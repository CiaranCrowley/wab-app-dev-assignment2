import React, { useState} from 'react';
import { useContext} from 'react';
import { useParams } from 'react-router-dom';
import { MoviesContext } from './moviesContext';
import { PeopleContext } from './peopleContext';
import { TvContext } from './tvContext';

export const PublicPage = () => {
    return <h2>Public page</h2>
 }

 export const Movies = () => {
    const context = useContext(MoviesContext);
    const [userName, setUserName] = useState("");
    const [movieId, setMovieId] = useState("");

    const addFavoutiteMovies = () => {
        context.addToFavourites(userName, movieId);
    };

    return <>
        <h2>Add Favourite Movies</h2>
        <p>Enter your user name and the ID of a movie you wish to add to your favourites list</p>

        <input value={userName} placeholder="userName" onChange={e => {
            setUserName(e.target.value);
        }}></input><br />

        <input value={movieId} placeholder="movie ID" onChange={e => {
            setMovieId(e.target.value);
        }}></input><br />
        <button onClick={addFavoutiteMovies}>Add to Favourites</button>
        <br />

        <h2>Movies Data </h2>
        <div>
            {context.movies.map(movie => { return <>{movie.id}, {movie.title}<br /></> })}
        </div>\
    </>
}

export const People = () => {
    const context = useContext(PeopleContext);
    const [userName, setUserName] = useState("");
    const [personId, setPersonId] = useState("");

    const addFavouriteActors = () => {
        context.addToFavouriteActors(userName, personId);
    };

    return <>
        <h2>Add Favourite Actors</h2>
        <p>Enter your user name and the ID of an actor you wish to add to your favourites list</p>

        <input value={userName} placeholder="userName" onChange={e => {
            setUserName(e.target.value);
        }}></input><br />

        <input value={personId} placeholder="Actor ID" onChange={e => {
            setPersonId(e.target.value);
        }}></input><br />
        <button onClick={addFavouriteActors}>Add to Favourite Actors</button>
        <br />

        <h2>People Data</h2>
        <div>
            {context.people.map(person => { return <>{person.id}, {person.name}<br /></> })}
        </div>
    </>
}

export const Tv = () => {
    const context = useContext(TvContext);
    const [userName, setUserName] = useState("");
    const [showId, setShowId] = useState("");

    const addFavouriteShows = () => {
        context.addToFavouriteShows(userName, showId);
    };

    return <>
        <h2>Add Favourite Tv Shows</h2>
        <p>Enter your user name and the ID of a show you wish to add to your favourites list</p>

        <input value={userName} placeholder="userName" onChange={e => {
            setUserName(e.target.value);
        }}></input><br />

        <input value={showId} placeholder="Show ID" onChange={e => {
            setShowId(e.target.value);
        }}></input><br />
        <button onClick={addFavouriteShows}>Add to Favourite TV Shows</button>
        <br />

        <h2>TV Data</h2>
        <div>
            {context.tv.map(tv => { return <>{tv.id}, {tv.name}<br /></> })}
        </div>
    </>
}

 export const Profile = () => {
    return <h2>My Profile </h2>
}

 export const HomePage = () => {
     return  <h2>Home page</h2>
 }
 