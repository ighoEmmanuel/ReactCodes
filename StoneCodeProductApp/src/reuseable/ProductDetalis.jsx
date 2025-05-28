import { useParams } from "react-router";
import { useGetProductDetailsQuery } from "../service/ProductApi.jsx";
import { Link } from "react-router";
import styles from "./Product.module.css"

const ProductDetails = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetProductDetailsQuery(id);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching product details</div>;
    if (!data) return <div>No product found</div>;

    const product = data;

    return (
        <div className={styles.productDescription}>
            <button>
                <Link to={"/home/dummy-product"} className={styles.return}>Go Back</Link>
            </button>
            <div className={styles.singleCard}>
                <img src={product.images} alt={product.title} />
                <p><b>Title: </b>{product.title}</p>
                <p><b>Price: </b>${product.price}</p>
                <p><b>Product Description: </b>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;
