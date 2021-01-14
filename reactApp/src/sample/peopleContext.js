import React, { useState, createContext, useEffect, useReducer } from "react";
import { getPeople, addFavouriteActors } from "../api/movie-api";

export const PeopleContext = createContext(null);

const reducer = (state, action) => {
   switch (action.type) {
      case "load":
         return { people: action.payload.result};
      default:
         return state;
   }
};

const PeopleContextProvider = props => {
   const [state, dispatch] = useReducer(reducer, { people: []});
   const [authenticated, setAuthenticated] = useState(false);

   const addToFavouriteActors = async (username, personId) => {
      const result = await  addFavouriteActors(username, personId);
      console.log(result.code);
      return (result.code == 201) ? true : false;
   }

   useEffect(() => {
      getPeople().then(result => {
         console.log(result);
         dispatch({type: "load", payload: {result}});
      });
   }, []);

   return (
      <PeopleContext.Provider
         value={{
            people: state.people,
            setAuthenticated,
            addToFavouriteActors,
         }}
      >
         {props.children}
      </PeopleContext.Provider>
   );
};

export default PeopleContextProvider