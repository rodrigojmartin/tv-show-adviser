import s from "./style.module.css"

export function MovieDetail({movie}) {
    return <div>
        <div className={s.title}>{movie.name}</div>
        <div className={s.rating}>{movie.vote_average/2}/5</div>
        <div className={s.overview}>{movie.overview}</div>
    </div>
}