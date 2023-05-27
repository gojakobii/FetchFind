import React, { useEffect, useContext } from 'react';

function Logout() {
    useEffect(() => {
        fetch('https://cs571.org/s23/hw6/api/logout', {
            method: 'POST',
            headers: {
                "X-CS571-ID": "bid_f5948715b660ef942104"
            },
            credentials: "include"
        }).then(res => res.json()).then(json => {
            setIsLoggedIn(false);
        })
    }, [setIsLoggedIn]);

    return <>
        <h1>Logout</h1>
        <p>You have been successfully logged out.</p>
    </>
}

export default Logout;