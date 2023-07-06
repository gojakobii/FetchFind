import React from "react";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const inputName = useRef();
  const inputEmail = useRef();

  const login = async (event) => {
    const name = inputName.current.value;
    const email = inputEmail.current.value;

    const url = "https://frontend-take-home-service.fetch.com/auth/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      credentials: "include",
    });

    if (response.ok) {
      localStorage.setItem("expireTime", Date.now() + 1);
      navigate("/find");
    } else {
      console.error("Login failed");
    }
  };

  return (
    <div className="static overflow-hidden">
      <div className="fixed min-h-screen min-w-[100vw] -z-[20] bg-gradient-to-r from-[#b3efef] to-[#9ddfe0] flex flex-col md:flex-row justify-center md:justify-around px-6 py-12 lg:px-8">
        <div className="relative flex flex-col justify-center w-full text-center md:text-left md:w-[400px] text-[#2d0f38]">
          <div className="absolute left-1/2 transform -translate-x-[250px] -translate-y-[150px] -z-[20] hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-[#69bac8]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="absolute right-0 transform -translate-x-[60px] -translate-y-[116px] -z-[20] hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-[#69bac8]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="absolute right-0 transform translate-x-[20px] -translate-y-[66px] -z-[20] hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-[#69bac8]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-[225px] translate-y-[155px] -z-[20] hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-[#69bac8]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-[250px] translate-y-[130px] -z-[20] hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-[#69bac8]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-x-[135px] translate-y-[110px] -z-[20] hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-[#69bac8]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="absolute right-0 transform -translate-x-[60px] -translate-y-[130px] -z-[20] hidden md:block">
            <div className="w-2 h-2 rounded-full bg-[#69bac8]"></div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-[220px] -translate-y-[130px] -z-[20] hidden md:block">
            <div className="w-2 h-2 rounded-full bg-[#69bac8]"></div>
          </div>
          <h1 className="text-5xl block font-syne font-extrabold">FETCH</h1>
          <h2 className="mt-2 text-5xl leading-9 font-syne tracking-tight">
            your forever friend
          </h2>
          <p className="mt-5 font-lexend text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="relative flex flex-col justify-center mt-5 md:mt-0 w-full md:w-72">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-[400px] -translate-y-1/2 -z-[20] hidden md:block">
            <div className="w-[1000px] h-[1000px] rounded-full opacity-80 bg-[#b4e6de] blur-lg"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-[350px] -translate-y-1/2 -z-[20] hidden md:block">
            <div className="w-[1000px] h-[1000px] rounded-full bg-[#9ddfe0]"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-[300px] -translate-y-1/2 -z-[20] hidden md:block">
            <div className="w-[900px] h-[900px] rounded-full bg-[#8dcfdb]"></div>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={login}>
              <input
                className="font-lexend mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#800f74] sm:text-md sm:leading-6"
                ref={inputName}
                placeholder="Name"
                id="name"
                type="text"
                autoComplete="name"
                required
              />
              <input
                className="font-lexend mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#800f74] sm:text-md sm:leading-6"
                ref={inputEmail}
                placeholder="Email address"
                id="email"
                type="email"
                autoComplete="email"
                required
                pattern="[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}"
                title="e.g. fetchfrontend@gmail.com"
              />
              <button
                type="submit"
                className="font-syne font-semibold mt-5 w-full px-10 flex justify-center rounded-md bg-[#2d0f38] py-1.5 text-md leading-6 text-white shadow-sm hover:bg-[#800f74] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d0f38]"
              >
                Sign in
              </button>
            </form>
            <p className="mt-5 text-center font-lexend text-md text-[#2d0f38]">
              Not a member?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-[#2d0f38] hover:text-[#800f74]"
              >
                Sign up now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
