import { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import FavoriteDogsContext from "../contexts/FavoriteDogsContext";

import Dog from "./Dog"

const FavoriteDogs = ( props ) => {
    const [matchDog, setMatchDog] = useState({});
    const [favorites] = useContext(FavoriteDogsContext);
    
    const doDisplay = Object.keys(favorites).length >= 2;

    if (Object.values(favorites).length == 0) {
        return <div>
            <h1>Ruh-roh! Looks like you haven't favorited any pups!</h1>
            </div>
    }

    const match = async () => {
        const url = `https://frontend-take-home-service.fetch.com/dogs/match`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.keys(favorites)),
            credentials: 'include',
        });
    
        if (response.ok) {
            const data = await response.json();

            // console.log(favorites[data.match])
            setMatchDog(favorites[data.match]);

        } else {
            console.error(`Failed to fetch dogs' ids`);
        }
    };


    return <div>
        <h1>Favorites</h1>
        {doDisplay && (
        <Button onClick={match}>
            Find your match!
        </Button>
        )}
        < Container fluid >
            <Row>
            {
                Object.values(favorites).map((dog) => {
                    return <Col 
                        xs={12} sm={6} md={4} lg={3} xl={2}
                        key={dog.id}>
                    <Dog
                        id={dog.id}
                        name={dog.name}
                        img={dog.img}
                        age={dog.age}
                        zip_code={dog.zip_code}
                        breed={dog.breed}
                    />
                    </Col>
                    }
                )
            }
            </Row>
        </Container>

    </div>
}

export default FavoriteDogs;