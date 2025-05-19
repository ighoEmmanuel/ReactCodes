import { useGetPopularMoviesQuery} from "../../service/movieApi.jsx";
import MovieCard from "../../reuseable/MovieCard.jsx";

const Popular = () => {
    const data = useGetPopularMoviesQuery();
    return (
        <MovieCard data={data} />
    )
}


export default Popular