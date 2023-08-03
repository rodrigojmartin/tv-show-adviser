import { useEffect, useState } from "react";
import { MovieAPI } from "./api/movie";
import { BACKDROP_BASE_URL } from "./config";
import { MovieDetail } from "./components/MovieDetail/MovieDetail";
import { Logo } from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png";
import s from "./style.module.css";



export function App() {

    const [currentMovie, setCurrentMovie] = useState();
    async function fetchPopularMovies() {
        const popularMovieList = await MovieAPI.fetchPopulars();
        if (popularMovieList.length > 0) {
            setCurrentMovie(popularMovieList[0]);
        }
    }
    useEffect(() =>{
        fetchPopularMovies();
        
    }, []);

    console.log(currentMovie);

    return(
        <div className={s.main_container}
        style={{background: currentMovie
            ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
               url("${BACKDROP_BASE_URL}${currentMovie.backdrop_path}") no-repeat center / cover`
            : "black",}}>
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo img={logoImg} title="Pelikulon" subtitle="Find a movie you may like"/>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <input style={{width: "100%"}}type="text"/>
                    </div>
                    
                </div>
            </div>
            <div className={s.movie_detail}>
              {currentMovie && <MovieDetail movie={currentMovie}/>} 
            </div>
            <div className={s.recommended_movies}>Recommended Movies</div>
        </div>
    );
}