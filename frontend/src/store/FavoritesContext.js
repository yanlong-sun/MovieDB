import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (favoriteMovie) => {},
  removeFavorites: (movieID) => {},
  isMovieFavorites: (movieID) => {},
});

export function FavoritesContextPorvieder(props) {
  const [userFavorites, setUserfavorites] = useState([]);
  // add favorite movie handler
  function addFavoritesHandler(favoriteMovie) {
    setUserfavorites((prevFavorites) => {
      return prevFavorites.concat(favoriteMovie);
    });
  }
  // remove favorite movie handler
  function removeFavoritesHandler(movieID) {
    setUserfavorites((prevFavorites) => {
      return prevFavorites.filter((movie) => movie.titleId !== movieID);
    });
  }

  // return if a movie is bookmarked
  function isMovieFavoritesHandler(movieID) {
    return userFavorites.some((movie) => movie.titleId === movieID);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavoritesHandler,
    removeFavorites: removeFavoritesHandler,
    isMovieFavorites: isMovieFavoritesHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
