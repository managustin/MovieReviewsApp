import { useEffect } from "react"
import "../css/MovieCard.css"

function MovieCard({movie}) {

    function onFavoriteClick(){
        console.log('clicked')
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.tite}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                        ♥
                    </button>
                </div>    
        </div>
        <div className="movie-in">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard