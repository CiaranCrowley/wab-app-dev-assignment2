import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies, addFavouriteMovies } from "../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result};
    case "load-favourites":
      return { favourites: action.payload.result};
    default:
      return state;
  }
};

const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: []});
  const [authenticated, setAuthenticated] = useState(false);

  const addToFavourites = async (username, movieId) => {
    const result = await addFavouriteMovies(username, movieId);
    console.log(result.code);
    return (result.code == 201) ? true: false;
  }

  useEffect(() => {
    getMovies().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        favourites: state.favourites,
        setAuthenticated,
        addToFavourites,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider