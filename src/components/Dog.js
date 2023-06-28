import { useFavorites } from "../contexts/FavoritesContext";

function Dog(props) {
    const { addFavorite, removeFavorite } = useFavorites();

    const handleFavoriteDog = () => {
        if (props.isFavorite) {
            removeFavorite(props);
        } else {
            addFavorite(props);
        }
    }

    return (
        <a className="group">
            <div className="relative rounded-lg shadow">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg xl:aspect-h-7 xl:aspect-w-7">
                    <img src={props.img} alt="Dog photo" className="h-full w-full object-cover object-center "/>
                </div>
                <div className="px-6 py-3 text-center">
                    <h1 className="font-syne font-medium text-2xl text-[#800f74]">{props.name}</h1>
                    <p className="text-gray-700 font-lexend text-md">{props.breed}</p>
                    <div className="flex justify-center gap-5 mt-1 border-t border-gray-200">
                        <div className="mt-1">
                            <h3 className="text-gray-500 font-lexend text-sm">Age</h3>
                            <p className="text-gray-700 font-lexend text-sm">{props.age}</p>
                        </div>
                        <div className="mt-1">
                            <h3 className="text-gray-500 font-lexend text-sm">Zip</h3>
                            <p className="text-gray-700 font-lexend text-sm">{props.zip_code}</p>
                        </div>
                    </div>
                </div>
                {
                    props.isFavorite ? 
                    <button className="rounded-full w-10 h-10 shadow-md absolute top-0 right-0 m-2 bg-white p-2 transition-colors text-[#800f74]" onClick={handleFavoriteDog}>
                        <svg className="absolute top-0 right-0 m-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                    </button> :
                    <button className="rounded-full w-10 h-10 shadow-md absolute top-0 right-0 m-2 bg-white bg-opacity-50 p-2 text-white transition-colors hover:text-[#800f74] hover:bg-white" onClick={handleFavoriteDog}>
                        <svg className="absolute top-0 right-0 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                    </button>
                }
            </div>
        </a>
    )
}

export default Dog;