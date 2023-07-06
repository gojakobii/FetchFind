import React, { Link } from "react-router-dom";

function FetchNoMatch() {
  return (
    <div className="h-96 font-lexend flex flex-col text-center justify-center">
      <h1 className="text-2xl">Woops</h1>
      <p>Looks like you're lost!</p>
      <Link
        className="font-syne font-semibold text-white bg-[#2d0f38] hover:bg-[#800f74] shadow-sm rounded-md mx-auto mt-5 p-3"
        to="/find"
      >
        Back to safety
      </Link>
    </div>
  );
}

export default FetchNoMatch;
