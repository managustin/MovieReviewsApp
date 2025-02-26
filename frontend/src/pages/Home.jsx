import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        {id: 1, title: "John Wick", release_date: '2020'},
        {id: 2, title: "Terminator", release_date: '1980'},
        {id: 3, title: "Matrix", release_date: '1999'}
    ];

    const handleSearch = () => {

    }
        
    return <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie => (                          // Using the .map method to iterate all of the values inside the array 
                <MovieCard movie={movie} key={movie.id} />  // and pass them to the MovieCard function, reeturning the component for every movie.
                // When dynamically rendering multiple things like wih .map, adding the 'key' property is needed,
                // even when it's not added as a prop in MovieCard.jsx 
            ))}                                             
        </div>
    </div>
}

export default Home