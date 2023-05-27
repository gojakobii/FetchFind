import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Filter from "./Filter"
import BreedSort from "./BreedSort"
import Pagination from "./Pagination"

import Dog from './Dog';

function FetchFind(props) {
    const [dogs, setDogs] = useState([]);
    const [allBreeds, setAllBreeds] = useState([]);
    const [selectedBreeds, setSelectedBreeds] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [sort, setSort] = useState('asc')
    const size = 35;

    useEffect(() => {
        const findDogs = async () => { // incorporate params for filtering i.e. breed/age/zip
            const queryParams = new URLSearchParams();
  
            if (selectedBreeds.length > 0) {
                queryParams.append('breeds', selectedBreeds.join(','));
            }

            const queryString = queryParams.toString();
            const url = `https://frontend-take-home-service.fetch.com/dogs/search?from=${(page - 1) * size}&${queryString}&sort=breed:${sort}`
            const response = await fetch(url, {
                method: 'GET',
                credentials: 'include',
            });
            
            if (response.ok) {
                const data = await response.json();

                setTotalPages(Math.ceil(data.total / 25));
                getDogs(data.resultIds);
            } else {
                console.error(`Failed to fetch dogs' ids`);
            }
        };

        const getDogs = async (ids) => {
            const url = `https://frontend-take-home-service.fetch.com/dogs`; // configure for pagination

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ids),
                credentials: 'include',
            });

            if (response.ok) {
                const data = await response.json();
                setDogs(data);
            } else {
                console.error('Failed to fetch dogs');
            }
        };

        findDogs();

    }, [page, sort, selectedBreeds]);

    useEffect(() => { // memoize
        const getDogBreeds = async () => {
            const url = 'https://frontend-take-home-service.fetch.com/dogs/breeds';
            const response = await fetch(url, {
                method: 'GET',
                credentials: 'include',
            });
        
            if (response.ok) {
                const data = await response.json();

                setAllBreeds(data);
            } else {
                console.error('Failed to fetch dog breeds');
            }
        };

        getDogBreeds();
    }, []);

    return <div>
        <h1>FetchFind</h1>
        <Filter
            allBreeds={allBreeds}
            selectedBreeds={selectedBreeds}
            setSelectedBreeds={setSelectedBreeds}
        />
        <BreedSort
            sort={sort}
            setSort={setSort}
        />
        < Container fluid >
            <Row>
            {
                dogs.map((dog) => {
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
        <Pagination 
            page={page}
            totalPages={totalPages}
            setPage={setPage}
        />
    </div>
}

export default FetchFind;