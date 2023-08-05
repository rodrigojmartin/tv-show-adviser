import { MovieListItem } from "../MovieListItem/MovieListItem";
import s from "./style.module.css";

export function MovieList({movieList}) {
    return (
        <div>
            <div className={s.title}>You'll probably like: </div>
            <div className={s.list}>
                {movieList.map((movie) =>{
                        return (
                            <span key={movie.id} className={s.movie_item}>
                                <MovieListItem 
                                movie={movie}
                                onClick={() => console.log("To do")}
                                />
                            </span>
                        );
                })}
            </div>
        </div>
    );
}