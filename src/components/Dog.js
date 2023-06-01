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

    return (
        <div className="relative m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="w-full h-[45vw] md:h-[20vw] object-cover" src={props.img} alt="Dog photo"></img>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.name}</div>
                <p className="text-gray-700 text-base">{props.breed}</p>
                <p className="text-gray-700 text-base">{props.age}, {props.zip_code}</p>
            </div>
            <button className="absolute top-0 right-0 m-2 rounded bg-blue-500 p-2 text-white hover:bg-blue-800" onClick={handleFavoriteDog}>{"<3"}</button>
        </div>
    )
}

export default Dog;