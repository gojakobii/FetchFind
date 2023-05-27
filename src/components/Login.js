import React from 'react';

import { useRef, useContext } from "react"
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap"

export default function FetchLogin() {
    const navigate = useNavigate();
    const inputName = useRef();
    const inputEmail = useRef();
        
    const login = async () => {
        const name = inputName.current.value;
        const email = inputEmail.current.value;

        // Alert user underneath input fields
        if (!name || !email) {
            return alert('You must provide both a name and email!');
        }

        const url = 'https://frontend-take-home-service.fetch.com/auth/login';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
            }),
            credentials: 'include',
        });
        
        console.log(response)
        if (response.ok) {
            alert('Your login was successful!');
            navigate("/find");
        } else {
            console.error('Login failed');
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="name">Name</label>
                <input ref={inputName} type="text" placeholder="John Smith" id="name" />
                <label htmlFor="email">Email</label>
                <input ref={inputEmail} type="email" placeholder="jsmith@gmail.com" id="email" />
                <Button onClick={login}>Login</Button>
            </form>
        </div>
    )
}