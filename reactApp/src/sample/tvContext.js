import React, { useState, createContext, useEffect, useReducer } from "react";
import { getTv, addFavouriteShows, addFavouriteActors } from "../api/movie-api";

export const TvContext = createContext(null);

const reducer = (state, action) => {
   switch (action.type) {
      case "load":
         return { tv: action.payload.result};
      default:
         return state;
   }
};

const TvContextProvider = props => {
   const [state, dispatch] = useReducer(reducer, { tv: []});
   const [authenticated, setAuthenticated] = useState(false);

   const addToFavouriteShows = async (username, showId) => {
      const result = await addFavouriteShows(username, showId);
      console.log(result.code);
      return (result.code == 201) ? true : false;
   }

   useEffect(() => {
      getTv().then(result => {
         console.log(result);
         dispatch({type: "load", payload: {result}});
      });
   }, []);

   return (
      <TvContext.Provider
         value={{
            tv: state.tv,
            setAuthenticated,
            addToFavouriteShows,
         }}
      >
         {props.children}
      </TvContext.Provider>
   );
};

export default TvContextProvider