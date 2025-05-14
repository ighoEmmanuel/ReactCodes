import { useGetNowPlayingMoviesQuery} from "../../service/movieApi.jsx";
import MovieCard from "../../reuseable/MovieCard.jsx";
const NowPlaying = () => {
    const data = useGetNowPlayingMoviesQuery()


    return (
        <div>
            <MovieCard data={data} />
        </div>
    )
}


export default NowPlaying