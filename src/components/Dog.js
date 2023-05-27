import { useState, useContext, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import Pagination from 'react-bootstrap/Pagination';

import FavoriteDogsContext from "../contexts/FavoriteDogsContext";

function Dog(props) {
    const handleFavoriteDog = () => {
        setFavorites(() => {
            if (favStatus) {
                const {[props.id]: removedDog, ...updatedFavorites} = favorites;
                return updatedFavorites;
            } else {
                return {...favorites, [props.id]:props};
            }
        });

        setFavStatus(!favStatus);
    }

    const [favorites, setFavorites] = useContext(FavoriteDogsContext);
    const [favStatus, setFavStatus] = useState(props.id in favorites);
    
    // const [city, setCity] = useState('');
    // const [state, setState] = useState('');

    // useEffect(() => {
    //     const fetchCity = async () => {
    //         const response = await fetch(`https://frontend-take-home-service.fetch.com/locations`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify([props.zip]),
    //             credentials: 'include',
    //         });

    //         if (response.ok) {
    //             const data = await response.json();
    //             // console.log(data)
    //             if (data[0] !== null) {
    //                 setCity(data[0].city);
    //                 setState(data[0].state);
    //             }
    //         } else {
    //             console.error("Failed to fetch location data");
    //         }
    //     };
    
    //     fetchCity();

    // }, []);

    
    return <Card>
        <Card.Img width="auto" max-width="100px" height="auto" max-height="100px" src={props.img} alt="Dog photo"/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle>{props.breed}</Card.Subtitle>
                <Card.Text> {props.age}, {props.zip_code} </Card.Text>
                <Button 
                    onClick={handleFavoriteDog}
                    variant= {(favStatus)? "danger" : "primary"}>
                    {(favStatus)? "Remove from Favorites" : "Add to Favorites"}
                </Button>
            </Card.Body>
    </Card>
}

export default Dog;