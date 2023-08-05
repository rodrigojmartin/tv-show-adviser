import s from "./style.module.css"
import { SMALL_IMG_COVER_BASE_URL } from "../../config"
import noMovieImage from "../../assets/images/backdrop.jpeg";
const MAX_TITLE_CHAR = 20;

export function MovieListItem({movie, onClick}){

    const onClick_ = () => {
        onClick(movie);
    };

    return <div onClick={onClick_}className={s.container}>
        <img alt={movie.name}
        src={movie.backdrop_path ? SMALL_IMG_COVER_BASE_URL+movie.backdrop_path : noMovieImage }
        className={s.img}/>
        <div className={s.title}>{movie.title.length > MAX_TITLE_CHAR ? movie.title.slice(0,MAX_TITLE_CHAR)+"..." : movie.title}</div>
    </div>

}