import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min"


function Detail() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState()

    const getMovieDetails = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
        setMovie(json.data.movie)
        setLoading(false)
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return (
        <div>
            <Link to="/">{`< Back`}</Link>
            {
                loading ? (<h1>Loading...</h1>) : (
                    <div>
                        <img src={movie.large_cover_image} alt={movie.title} />
                        <h1>{movie.title}</h1>
                        <p>{movie.description_full}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Detail