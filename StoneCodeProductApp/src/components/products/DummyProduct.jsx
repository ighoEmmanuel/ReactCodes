import { useGetProductsQuery } from "../../service/ProductApi.jsx";
import ProductCard from "../../reuseable/ProductCard.jsx";
const DummyProducts = () => {
    const data = useGetProductsQuery()
    console.log(data)
    return (
        <div>
            <ProductCard data={data} />
        </div>
    )
}


export default DummyProducts;