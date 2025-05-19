const FakeStoreCard= (props) => {
    const {data, isLoading} = props.data;


    if(isLoading){
        return <div>Loading...</div>;
    }


    return (
        <div className="MovieCard">
            {
                data?.map((result) =>(
                    <div key={result.id} className="id">
                        <img src={`${result.image}`}/>
                        <p>${result.price}</p>
                        <p>{result.title}</p>
                        <p>{result.description}</p>
                        <p>{result.vote_average}</p>

                    </div>

                ))
            }
        </div>
    )
}

export default FakeStoreCard