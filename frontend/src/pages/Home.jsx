import MovieCard from "../components/MovieCard"
import {useState} from "react"
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: '2020'},
        {id: 2, title: "Terminator", release_date: '1980'},
        {id: 3, title: "Matrix", release_date: '1999'}
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery)
    }
        
    return <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie => (                          // Using the .map method to iterate all of the values inside the array 
                movie.title.toLowerCase().startsWith(searchQuery) && (  //conditional rendering
                <MovieCard movie={movie} key={movie.id} />  // and pass them to the MovieCard function, reeturning the component for every movie.
                // When dynamically rendering multiple things like wih .map, adding the 'key' property is needed,
                // even when it's not added as a prop in MovieCard.jsx 
                )
            ))}                                             
        </div>
    </div>
}

export default Home