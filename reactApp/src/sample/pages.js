import React from 'react';
import { useContext} from 'react';
import { MoviesContext } from './moviesContext';
import { PeopleContext } from './peopleContext';
import { TvContext } from './tvContext';

export const PublicPage = () => {
    return <h2>Public page</h2>
 }

 export const Movies = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Movies Data </h2>
        <div>
            {context.movies.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
        </div>
    </>
}

export const People = () => {
    const context = useContext(PeopleContext);
    return <>
        <h2>People Data</h2>
        <div>
            {context.people.map(person => { return <>{person.id},{person.name}<br /></> })}
        </div>
    </>
}

export const Tv = () => {
    const context = useContext(TvContext);
    return <>
        <h2>TV Data</h2>
        <div>
            {context.tv.map(tv => { return <>{tv.id},{tv.name}<br /></> })}
        </div>
    </>
}

 export const Profile = () => {
    return <h2>My Profile </h2>
}

 export const HomePage = () => {
     return  <h2>Home page</h2>
 }
 