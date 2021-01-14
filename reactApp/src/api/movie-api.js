export const login = (username, password) => {
   return fetch('/api/users', {
       headers: {
           'Content-Type': 'application/json'
       },
       method: 'post',
       body: JSON.stringify({ username: username, password: password })
   }).then(res => res.json())
};

export const signup = (username, password) => {
   return fetch('/api/users?action=register', {
       headers: {
           'Content-Type': 'application/json'
       },
       method: 'post',
       body: JSON.stringify({ username: username, password: password })
   }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
        '/api/movies',{headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
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