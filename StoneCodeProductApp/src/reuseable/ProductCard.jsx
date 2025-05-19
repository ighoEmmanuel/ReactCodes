// const ImageBaseUrl = 'dummyjson.com/'

import About from "./About.jsx";

const ProductCard= (props) => {
    const {data, isLoading} = props.data;


    if(isLoading){
        return <div>Loading...</div>;
    }



    return (
        <div className="MovieCard" >
            {
                data?.products.map((result) =>(
                    <div key={result.id} className="id" onClick={() => About(result.id)}>
                        <img src={`${result.images}`}/>
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

export default ProductCard;