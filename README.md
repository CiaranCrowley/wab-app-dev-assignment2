# Assignment 2 - Web API.

Name: Ciarán Crowley

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Feature 1 - Ability to Add favourite Movies
 + Feature 2 - Ability to Add favourite TV
 + Feature 3 - Ability to Add favourite Actors

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 
 +  NPM version 6.14.10

Describe getting/installing the software, perhaps:

```bat
git clone https://github.com/CiaranCrowley/wab-app-dev-assignment2.git
```

open movies-api:
 +  npm install
 +  npm install --save-dev babel-cli babel-preset-env nodemon eslint babel-eslint
 +  npm install --save dotenv express
 +  npm install -s node-fetch
 +  npm install -save mongoose
 +  npm install --save express-session
 +  npm install --save passport passport-jwt jsonwebtoken bcrypt-nodejs
 +  npm start

open reactApp:
 +  npm install
 +  npm start
 ```
## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY=tmdb_key

mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
```
## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST |
<br />
| /api/movies | Gets a list of movies |
<br />
| /api/tv/    | Gets a list of TV Shows | 
<br />
| /api/people | Gets a short list of Actors |
<br />
| /api/users  | Gets a list of users | Allows the registration of users |

## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.
  + Passport and sessions are present.  Movies, TV and People routes are all protected.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

export const addFavouriteMovies = (userName, movieId) => {
    return fetch(`/api/users/${userName}/favourites`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ id: movieId })
    }).then(res => res.json)
};

export const getPeople = () => {
    return fetch(
        '/api/people',{headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
};

export const addFavouriteActors = (userName, personId) => {
    return fetch(`/api/users/${userName}/favouriteActors`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ id: personId })
    }).then(res => res.json())
};

export const getTv = () => {
    return fetch(
        '/api/tv',{headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
};

export const addFavouriteShows = (userName, showId) => {
    return fetch(`/api/users/${userName}/favouriteShows`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ id: showId })
    }).then(res => res.json());
};
~~~

## Independent learning.

. . Lots of searching online for strange errors realting to mongo . .  
