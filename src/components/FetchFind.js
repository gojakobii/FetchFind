import { useEffect, useState, Fragment } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

import Pagination from "./Pagination";
import Dog from "./Dog";

import { useFavorites } from "../contexts/FavoritesContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function FetchFind(props) {
  const [minAge, setMinAge] = useState();
  const [maxAge, setMaxAge] = useState();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [dogs, setDogs] = useState([]);
  const [allBreeds, setAllBreeds] = useState([]);
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [page, setPage] = useState(1);
  const [showSize, setShowSize] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [sort, setSort] = useState("asc");
  const { favorites } = useFavorites();
  const size = 40;

  useEffect(() => {
    const findDogs = async () => {
      const queryParams = new URLSearchParams();

      if (selectedBreeds.length > 0) {
        selectedBreeds.forEach((breed) => {
          queryParams.append("breeds", breed);
        });
      }

      const queryString = queryParams.toString();
      const url = `https://frontend-take-home-service.fetch.com/dogs/search?size=${size}&from=${
        (page - 1) * size
      }
              &ageMin=${minAge}&ageMax=${maxAge}&${queryString}&sort=breed:${sort}`;
      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();

        setTotalPages(Math.ceil(data.total / size));
        setShowSize(data.resultIds.length);
        setTotalResults(data.total);
        getDogs(data.resultIds);
      } else {
        console.error(`Failed to fetch dogs' ids`);
      }
    };

    const getDogs = async (ids) => {
      const url = `https://frontend-take-home-service.fetch.com/dogs`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ids),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setDogs(data);
      } else {
        console.error("Failed to fetch dogs");
      }
    };

    findDogs();
  }, [page, sort, minAge, maxAge, selectedBreeds]);

  useEffect(() => {
    const getDogBreeds = async () => {
      const url = "https://frontend-take-home-service.fetch.com/dogs/breeds";
      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();

        setAllBreeds(data);
      } else {
        console.error("Failed to fetch dog breeds");
      }
    };

    getDogBreeds();
  }, []);

  const handleBreedSelect = (e) => {
    const breed = e.target.value;

    setPage(1);
    setSelectedBreeds((prevSelectedBreeds) => {
      if (prevSelectedBreeds.includes(breed)) {
        return prevSelectedBreeds.filter(
          (selectedBreed) => selectedBreed !== breed
        );
      }
      return [...prevSelectedBreeds, breed];
    });
  };

  return (
    <div className="bg-white">
      <div>
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-syne font-extrabold text-[#2d0f38]">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <form className="mt-4 border-t border-gray-200">
                    <Disclosure
                      as="div"
                      key={"dog_breed"}
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium font-lexend text-[#2d0f38]">
                                Dog Breeds
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            {selectedBreeds.length !== 0 ? (
                              <div className="mb-5">
                                {selectedBreeds.map((breed) => (
                                  <button
                                    key={breed}
                                    className="font-lexend text-sm mr-1 mb-1 p-[6px] rounded-md bg-gray-200 hover:bg-gray-300"
                                    value={breed}
                                    onClick={handleBreedSelect}
                                  >
                                    {breed} X
                                  </button>
                                ))}
                              </div>
                            ) : null}
                            <div className="overflow-y-scroll max-h-52 space-y-6">
                              {allBreeds.map((breed) => (
                                <div
                                  key={breed}
                                  className="flex ml-1 mt-1 items-center"
                                >
                                  <input
                                    type="checkbox"
                                    value={breed}
                                    onChange={handleBreedSelect}
                                    checked={selectedBreeds.includes(breed)}
                                    className="h-4 w-4 rounded border-gray-300 text-[#800f74] focus:ring-[#800f74]"
                                  />
                                  <label className="ml-3 font-lexend text-sm text-gray-600">
                                    {breed}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure
                      as="div"
                      key={"age"}
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium font-lexend text-[#2d0f38]">
                                Age
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              <label
                                className="block font-lexend text-gray-700 text-sm mb-2"
                                htmlFor="minAge"
                              >
                                Minimum age
                              </label>
                              <input
                                className="shadow font-lexend appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-[#800f74] focus:shadow-outline"
                                value={minAge}
                                onChange={(e) => setMinAge(e.target.value)}
                                id="minAge"
                                type="number"
                                min="0"
                                max={maxAge}
                              />
                              <label
                                className="block font-lexend text-gray-700 text-sm mb-2 my-3"
                                htmlFor="maxAge"
                              >
                                Maximum age
                              </label>
                              <input
                                className="shadow font-lexend appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:ring-[#800f74] focus:shadow-outline"
                                value={maxAge}
                                onChange={(e) => setMaxAge(e.target.value)}
                                id="maxAge"
                                type="number"
                                min={minAge}
                              />
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-16">
            <h1 className="text-4xl font-syne font-extrabold tracking-tight text-[#2d0f38]">
              FETCH FINDS
            </h1>
            <div className="flex items-center">
              <Menu
                as="div"
                className="font-lexend relative inline-block text-left"
              >
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item
                        key="asc_breed"
                        value="asc"
                        onClick={() => {
                          setSort("asc");
                          setPage(1);
                        }}
                      >
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              sort === "asc"
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Breed: Ascending
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item
                        key="desc_breed"
                        value="desc"
                        onClick={() => {
                          setSort("desc");
                          setPage(1);
                        }}
                      >
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              sort === "desc"
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Breed: Descending
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="dogs-heading" className="pb-24 pt-6">
            <h2 id="dogs-heading" className="sr-only">
              Dogs
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden font-lexend lg:block">
                <Disclosure
                  as="div"
                  key={"dog_breed"}
                  className="border-b border-gray-200 py-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-[#2d0f38]">
                            Dog Breeds
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        {selectedBreeds.length !== 0 ? (
                          <div className=" mb-5">
                            {selectedBreeds.map((breed) => (
                              <button
                                key={breed}
                                className=" text-sm mr-1 mb-1 p-[6px] rounded-md bg-gray-200 hover:bg-gray-300"
                                value={breed}
                                onClick={handleBreedSelect}
                              >
                                {breed} X
                              </button>
                            ))}
                          </div>
                        ) : null}
                        <div className="overflow-y-scroll max-h-36 space-y-4">
                          {allBreeds.map((breed) => (
                            <div
                              key={breed}
                              className="flex ml-1 mt-1 items-center"
                            >
                              <input
                                type="checkbox"
                                value={breed}
                                onChange={handleBreedSelect}
                                checked={selectedBreeds.includes(breed)}
                                className="h-4 w-4 rounded border-gray-300 text-[#800f74] focus:ring-[#800f74]"
                              />
                              <label className="ml-3 text-sm text-gray-600">
                                {breed}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure
                  as="div"
                  key={"age"}
                  className="border-b border-gray-200 py-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-[#2d0f38]">
                            Age
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          <label
                            className="block text-gray-700 text-sm mb-2"
                            htmlFor="minAge"
                          >
                            Minimum age
                          </label>
                          <input
                            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-[#800f74] focus:shadow-outline"
                            value={minAge}
                            onChange={(e) => setMinAge(e.target.value)}
                            id="minAge"
                            type="number"
                            min="0"
                            max={maxAge}
                          />
                          <label
                            className="block text-gray-700 text-sm mb-2 my-3"
                            htmlFor="maxAge"
                          >
                            Maximum age
                          </label>
                          <input
                            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:ring-[#800f74] focus:shadow-outline"
                            value={maxAge}
                            onChange={(e) => setMaxAge(e.target.value)}
                            id="maxAge"
                            type="number"
                            min={minAge}
                          />
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="bg-white">
                  <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                    {dogs.length > 0 ? (
                      <div className="grid gap-x-6 gap-y-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                        {dogs.map((dog) => {
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
                </div>
              </div>
            </div>
            <Pagination
              page={page}
              totalPages={totalPages}
              size={size}
              showSize={showSize}
              totalResults={totalResults}
              setPage={setPage}
            />
          </section>
        </main>
      </div>
    </div>
  );
}

export default FetchFind;
