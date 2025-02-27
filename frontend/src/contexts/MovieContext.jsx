import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => { //provides state to any of the components that are wrapped arount it
    /*Children is a reserved prop when you write a component and children is anything 
    that's inside of the component that you rendered*/
    
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites") //localStorage allows to store values directly within the browser
        
        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]) //it adds after the previous value. It is like array.push() for react using states.
    }
      
    const removeFromFavorites = (movieId) => { // Generates a new array that without the movie we want to remove
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    // Anything that's in 'children' below, can access all of the values inside the value object above.
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}