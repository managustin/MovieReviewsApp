import './App.css'
import MovieCard from './components/MovieCard';

function App() {

  const movieNumber = 1;

  return (
    <>
      {movieNumber === 1 ? (
         <MovieCard movie={{title: "John Doe Film", release_date: "2025"}}/>
        ) : (
          <MovieCard movie={{title: "Random Film", release_date: "2025"}}/>
        )}
    </>
  ); 
}

export default App
