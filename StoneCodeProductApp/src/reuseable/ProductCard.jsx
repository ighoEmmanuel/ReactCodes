import styles from  './Product.module.css'
import {Link} from "react-router";
const ProductCard= (props) => {
    const {data, isLoading} = props.data;

    if(isLoading){
        return <div>Loading...</div>;
    }



    return (
        <div className={styles.productCard}>
            {
                data?.products.map((result) =>(
                    <div className={styles.card}>
                        <div key={result.id} className="id"   >
                            <img src={`${result.images}`}/>
                            <p>Title:{result.title}</p>
                            <p>Price:${result.price}</p>
                            <p className={styles.viewDescription}><b>Description: </b>{result.description}</p>
                            <button>
                                <Link to={`/home/dummy-product/${result.id}`}
                                      className={styles.viewProduct}>
                                    View Product
                                </Link>
                            </button>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default ProductCard;