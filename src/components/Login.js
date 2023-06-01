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
        <div className="p-20 px-4 ">
            <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto gap-5">
                <div className="text-[#551653] m-20">
                    <h1 className="font-syne font-semibold text-4xl">
                        Find your forever friend
                    </h1>
                    <h2 className="font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </h2>
                </div>
                <div className="m-auto">
                    <form className="bg-white/80 rounded-md h-full w-96 p-5">
                        <svg viewBox="0 0 256 60" xmlns="http://www.w3.org/2000/svg">
                            {/* <path d="M47.7173 59.0221H10.1719C4.586 59.0221 0.0253906 54.4364 0.0253906 48.8199V11.0684C0.0253906 5.45185 4.586 0.866211 10.1719 0.866211H47.7173C53.3032 0.866211 57.8638 5.45185 57.8638 11.0684V48.8199C57.8638 54.4364 53.2678 59.0221 47.7173 59.0221Z" fill="#300D38"></path> */}
                            <path d="M50.44 33.1432C50.3339 31.5436 49.5915 29.624 45.2077 30.8682C42.945 31.5081 40.8945 31.5436 39.9753 30.6549C39.8693 30.5127 39.7632 30.3705 39.6925 30.2283C39.339 29.5529 39.5157 28.4865 40.3642 27.0646C40.9652 26.0337 41.6723 25.7849 42.4854 25.7849C43.1925 25.7849 43.9703 25.9271 44.9602 25.9271C48.0006 25.856 49.1672 23.9364 49.0258 22.1946C48.9905 21.6614 48.2834 21.8391 46.9753 21.5192C45.6673 21.1993 44.6066 21.377 44.3238 19.493C44.2531 18.9598 43.546 17.7867 41.9551 17.5379C40.8945 17.3601 38.6319 16.2937 36.9349 17.6445L35.4501 17.0046C34.4602 16.7558 34.5309 17.4312 33.6117 17.7867C32.7632 18.0711 31.1369 17.289 31.5965 18.391C31.9501 19.2797 33.3996 20.4528 35.1672 19.884C34.1066 25.1806 29.0511 26.3892 24.844 26.2115C19.2228 25.9982 14.8743 21.2348 15.0864 15.6183C15.1572 13.9831 14.6268 13.521 14.0965 14.3741C13.9551 14.623 13.7784 15.014 13.6723 15.5117C13.6369 15.6894 13.5662 15.8671 13.5309 16.0449C13.0713 18.391 13.6369 23.0833 17.5258 26.1404C17.5258 26.1404 16.2178 27.2068 15.7935 29.1975C15.546 30.335 15.6521 31.2592 15.7228 31.7213C15.7582 31.9346 15.7935 32.0768 15.7935 32.0768C16.147 33.8187 12.9299 34.9917 11.5157 35.2406C11.4097 35.2406 11.3036 35.2761 11.1976 35.2761C10.9854 35.2761 10.8087 35.2761 10.6319 35.2761C10.3844 35.2761 10.1723 35.2406 9.99553 35.205C9.14705 35.1339 8.54604 35.2761 7.98038 37.3734C7.20261 40.3594 4.97533 39.684 4.44503 40.5371C3.59654 41.888 4.86927 42.8833 6.46018 42.9899C7.41473 43.0255 8.51068 42.7766 9.32382 42.0301C12.0814 39.5418 10.7733 38.4043 13.4955 38.6176C13.8491 38.6531 14.2733 38.6887 14.7683 38.7598C17.8087 39.1508 19.9652 39.7906 22.9349 36.5558C22.9349 36.5558 23.1824 36.1648 23.5359 35.8804C23.6774 35.7382 23.8541 35.6316 24.0662 35.5605C24.1369 35.4894 24.5258 35.5249 24.5965 35.5249C25.7632 35.8093 28.344 37.2312 31.2784 36.7336C32.445 36.307 33.5056 35.6316 34.3541 34.7784C34.3541 34.7784 34.8137 34.3519 35.1319 34.7429C35.5208 35.1695 35.9097 35.916 36.3693 36.4136C37.4299 37.5511 37.4299 37.089 39.6571 36.1648C39.8693 36.0581 40.1167 35.9871 40.3996 35.8804C46.1976 33.7476 46.0561 33.0722 47.2228 35.3827C47.4349 35.8093 48.1774 35.8449 48.8844 35.5605C49.7329 35.1695 50.5107 34.3519 50.44 33.1432Z" fill="#FBA919"></path>
                        </svg>
                        <h1 className="text-2xl font-bold">Welcome back!</h1>
                        <h1 className="text-sm">Not a member?
                            <a href="#" className="text-[#FBA919] font-semibold"> Sign up now</a>
                        </h1>
                        <div className="flex flex-col">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                            <input class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={inputName} id="name" type="text" placeholder="John Smith"/>
                            <label class="block text-gray-700 text-sm font-bold mb-2 my-3" for="email">Email</label>
                            <input class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" ref={inputEmail} id="email" type="email" placeholder="jsmith@gmail.com"/>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={login} type="button">Sign In</button>
                            <p className="text-center">-- Or continue with --</p>
                            <div className="gap-2 flex justify-center">
                                <button className="w-full flex gap-1.5 justify-center bg-white text-slate-400 font-semibold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="22px" height="25px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                                    Google
                                </button>
                                <button className="w-full flex gap-1.5 justify-center bg-blue-500 text-white font-semibold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="22px" height="25px"><path fill="white" d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/></svg>
                                    Facebook
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}