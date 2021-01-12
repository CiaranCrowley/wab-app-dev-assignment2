import React, { useState, createContext, useEffect, useReducer } from "react";
import { getTv } from "../api/movie-api";

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
            setAuthenticated
         }}
      >
         {props.children}
      </TvContext.Provider>
   );
};

export default TvContextProvider