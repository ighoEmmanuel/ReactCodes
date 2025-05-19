import React from 'react'
import "./MovieCard.module.css"

const ImageBaseUrl = `https://image.tmdb.org/t/p/w500`
const MovieCard = (props) => {
    const {data, isLoading} = props.data;


    if(isLoading){
        return <div>Loading...</div>;
    }


    return (
        <div className="MovieCard">
            {
                data?.results.map((result) =>(
                    <div key={result.id} className="id">
                        <img src={`${ImageBaseUrl}${result.poster_path}`} alt="image"/>
                        <p>{result.overview}</p>
                        <p>{result.title}</p>
                        <p>{result.vote_count}</p>
                        <p>{result.vote_average}</p>

                    </div>

                ))
            }
        </div>
    )
}

export default MovieCard;