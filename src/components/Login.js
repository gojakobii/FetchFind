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

    event.preventDefault();

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
      <div className="fixed min-h-screen min-w-[100vw] -z-[20] bg-gradient-to-r from-[#b3efef] to-[#8dcfdb] md:to-[#9ddfe0] flex flex-col md:flex-row justify-center md:justify-around px-6 py-12 lg:px-8">
        <div className="hidden md:flex flex-col relative justify-center w-full text-center md:text-left md:w-[400px] text-[#2d0f38]">
          <div className="absolute left-1/2 transform -translate-x-[250px] -translate-y-[150px] -z-[20]">
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
          <div className="absolute right-0 transform -translate-x-[60px] -translate-y-[116px] -z-[20]">
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
          <div className="absolute right-0 transform translate-x-[20px] -translate-y-[66px] -z-[20]">
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-[225px] translate-y-[155px] -z-[20]">
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-[250px] translate-y-[130px] -z-[20]">
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
          <div className="absolute top-1/2 right-0 transform -translate-x-[135px] translate-y-[110px] -z-[20]">
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
          <div className="absolute right-0 transform -translate-x-[60px] -translate-y-[130px] -z-[20]">
            <div className="w-2 h-2 rounded-full bg-[#69bac8]"></div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-[220px] -translate-y-[130px] -z-[20]">
            <div className="w-2 h-2 rounded-full bg-[#69bac8]"></div>
          </div>
          <h1 className="text-5xl block font-syne font-extrabold">FETCH</h1>
          <h2 className="mt-2 text-5xl leading-9 font-syne tracking-tight">
            your forever friend
          </h2>
          <p className="md:mt-5 font-lexend text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="relative flex flex-col justify-center mt-7 md:mt-0 w-full md:w-72">
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
              <svg
                className="block m-auto text-center"
                width="100"
                height="100"
                viewBox="0 0 57.84 85"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.7173 59.0221H10.1719C4.586 59.0221 0.0253906 54.4364 0.0253906 48.8199V11.0684C0.0253906 5.45185 4.586 0.866211 10.1719 0.866211H47.7173C53.3032 0.866211 57.8638 5.45185 57.8638 11.0684V48.8199C57.8638 54.4364 53.2678 59.0221 47.7173 59.0221Z"
                  fill="#300D38"
                ></path>
                <path
                  d="M50.44 33.1432C50.3339 31.5436 49.5915 29.624 45.2077 30.8682C42.945 31.5081 40.8945 31.5436 39.9753 30.6549C39.8693 30.5127 39.7632 30.3705 39.6925 30.2283C39.339 29.5529 39.5157 28.4865 40.3642 27.0646C40.9652 26.0337 41.6723 25.7849 42.4854 25.7849C43.1925 25.7849 43.9703 25.9271 44.9602 25.9271C48.0006 25.856 49.1672 23.9364 49.0258 22.1946C48.9905 21.6614 48.2834 21.8391 46.9753 21.5192C45.6673 21.1993 44.6066 21.377 44.3238 19.493C44.2531 18.9598 43.546 17.7867 41.9551 17.5379C40.8945 17.3601 38.6319 16.2937 36.9349 17.6445L35.4501 17.0046C34.4602 16.7558 34.5309 17.4312 33.6117 17.7867C32.7632 18.0711 31.1369 17.289 31.5965 18.391C31.9501 19.2797 33.3996 20.4528 35.1672 19.884C34.1066 25.1806 29.0511 26.3892 24.844 26.2115C19.2228 25.9982 14.8743 21.2348 15.0864 15.6183C15.1572 13.9831 14.6268 13.521 14.0965 14.3741C13.9551 14.623 13.7784 15.014 13.6723 15.5117C13.6369 15.6894 13.5662 15.8671 13.5309 16.0449C13.0713 18.391 13.6369 23.0833 17.5258 26.1404C17.5258 26.1404 16.2178 27.2068 15.7935 29.1975C15.546 30.335 15.6521 31.2592 15.7228 31.7213C15.7582 31.9346 15.7935 32.0768 15.7935 32.0768C16.147 33.8187 12.9299 34.9917 11.5157 35.2406C11.4097 35.2406 11.3036 35.2761 11.1976 35.2761C10.9854 35.2761 10.8087 35.2761 10.6319 35.2761C10.3844 35.2761 10.1723 35.2406 9.99553 35.205C9.14705 35.1339 8.54604 35.2761 7.98038 37.3734C7.20261 40.3594 4.97533 39.684 4.44503 40.5371C3.59654 41.888 4.86927 42.8833 6.46018 42.9899C7.41473 43.0255 8.51068 42.7766 9.32382 42.0301C12.0814 39.5418 10.7733 38.4043 13.4955 38.6176C13.8491 38.6531 14.2733 38.6887 14.7683 38.7598C17.8087 39.1508 19.9652 39.7906 22.9349 36.5558C22.9349 36.5558 23.1824 36.1648 23.5359 35.8804C23.6774 35.7382 23.8541 35.6316 24.0662 35.5605C24.1369 35.4894 24.5258 35.5249 24.5965 35.5249C25.7632 35.8093 28.344 37.2312 31.2784 36.7336C32.445 36.307 33.5056 35.6316 34.3541 34.7784C34.3541 34.7784 34.8137 34.3519 35.1319 34.7429C35.5208 35.1695 35.9097 35.916 36.3693 36.4136C37.4299 37.5511 37.4299 37.089 39.6571 36.1648C39.8693 36.0581 40.1167 35.9871 40.3996 35.8804C46.1976 33.7476 46.0561 33.0722 47.2228 35.3827C47.4349 35.8093 48.1774 35.8449 48.8844 35.5605C49.7329 35.1695 50.5107 34.3519 50.44 33.1432Z"
                  fill="#FBA919"
                ></path>
              </svg>
              <input
                className="font-lexend block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#800f74] sm:text-md sm:leading-6"
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
                title="e.g.fetchfrontend@gmail.com"
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
            <p className="mt-7 md:mt-5 font-lexend text-xs text-gray-600 w-[100%] text-center">
              Disclaimer: Several features are purely aesthetic, e.g. no
              functionality exists for creating an account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
