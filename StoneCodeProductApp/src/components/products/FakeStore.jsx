import { useGetFakeStoreProductsQuery} from "../../service/FakeStoreApi.jsx";
import FakeStoreCard from "../../reuseable/FakeStoreCard.jsx";

const FakeStore = () => {
    const data = useGetFakeStoreProductsQuery();
    console.log(data)

    return (
        <div>
            <FakeStoreCard data={data} />
        </div>
    )
}

export default FakeStore