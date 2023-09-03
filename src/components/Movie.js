import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Movie ({id, coverImage, title, summary, genres}) {
    return (
        <div>
            <img src={coverImage} alt={title} />
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <p>{summary}</p>
            <ul>
            {genres.map(genre => (
                <li key={genre}>{genre}</li>
            ))}
            </ul>
        </div>
    )
}

export default Movie;