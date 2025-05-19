import { useGetProductDetailsQuery} from "../service/ProductApi.jsx";

const About = (id) => {
    const data = useGetProductDetailsQuery(id);
    console.log(data);
    return (
        <div>
            {
                <div>
                    <img src={`${data.images}`} alt="img"/>
                    <p>`${data.title}`</p>
                    <p>{}</p>
                </div>
            }
        </div>
    )

}


export default About;