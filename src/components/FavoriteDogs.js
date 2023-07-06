import { useState } from "react";

import Pagination from "./Pagination";

import Dog from "./Dog";
import Match from "./Match";

import { useFavorites } from "../contexts/FavoritesContext";

function FavoriteDogs() {
  const [matchDog, setMatchDog] = useState({});
  const [visibleModal, setVisibleModal] = useState(false);
  const [page, setPage] = useState(1);
  const { favorites } = useFavorites();

  const size = 40;

  const handleMatch = async () => {
    const url = `https://frontend-take-home-service.fetch.com/dogs/match`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.keys(favorites)),
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();

      setMatchDog(favorites[data.match]);
      setVisibleModal(true);
    } else {
      console.error(`Failed to fetch dogs' ids`);
    }
  };

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between pb-6 pt-16 border-b border-gray-200">
          <h1 className="text-4xl font-syne font-extrabold tracking-tight text-[#2d0f38]">
            Fetched Favorites
          </h1>
          {Object.values(favorites).length >= 2 ? (
            <button
              className="font-syne bg-[#2d0f38] hover:bg-[#800f74] text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleMatch}
            >
              Discover your Match
            </button>
          ) : null}
        </div>
        <section aria-labelledby="dogs-heading" className="pb-24 pt-6">
          <div className="mx-auto max-w-2xl  lg:max-w-7xl">
            {Object.values(favorites).length > 0 ? (
              <div className="grid gap-x-6 gap-y-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                {Object.values(favorites)
                  .slice((page - 1) * size, page * size)
                  .map((dog) => {
                    const isFavorite = dog.id in favorites;

                    return (
                      <Dog
                        key={dog.id}
                        id={dog.id}
                        name={dog.name}
                        img={dog.img}
                        age={dog.age}
                        zip_code={dog.zip_code}
                        breed={dog.breed}
                        isFavorite={isFavorite}
                      />
                    );
                  })}
              </div>
            ) : (
              <h1 className="text-center font-lexend font-bold">
                Ruh-roh! No dogs were found!
              </h1>
            )}
          </div>
          <Pagination
            page={page}
            totalPages={Object.values(favorites).length / size}
            size={size}
            showSize={
              Object.values(favorites).slice((page - 1) * size, page * size)
                .length
            }
            totalResults={Object.values(favorites).length}
            setPage={setPage}
          />
          <Match
            visibleModal={visibleModal}
            setVisibleModal={setVisibleModal}
            match={matchDog}
          />
        </section>
      </main>
    </div>
  );
}

export default FavoriteDogs;
