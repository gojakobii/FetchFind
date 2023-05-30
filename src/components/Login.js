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
        <div className="pt-8 pb-12 px-4 bg-white">
            <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto gap-5">
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h2>
                <form className="bg-white">
                    <div className="flex flex-col justify-center">
                            {/* <label htmlFor="name">Name</label>
                            <input ref={inputName} type="text" placeholder="John Smith" id="name" />
                            <label htmlFor="email">Email</label>
                            <input ref={inputEmail} type="email" placeholder="jsmith@gmail.com" id="email" />
                            <button onClick={login}>Login</button> */}
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={inputName} id="name" type="text" placeholder="John Smith"/>
                        <label class="block text-gray-700 text-sm font-bold mb-2 my-3" for="email">Email</label>
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="jsmith@gmail.com"/>
                        {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */} 
                        {/* //notify poor login input */}
                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}