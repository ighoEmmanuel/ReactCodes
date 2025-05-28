import styles from  './Product.module.css'
const FakeStoreCard= (props) => {
    const {data, isLoading} = props.data;


    if(isLoading){
        return <div>Loading...</div>;
    }


    return (
        <div className={styles.productCard}>
            {
                data?.map((result) =>(
                    <div className={styles.card}>
                        <div key={result.id} className="id">
                            <img src={`${result.image}`}/>
                            <p>Title:{result.title}</p>
                            <p>Price:${result.price}</p>
                            <p className={styles.viewDescription}>{result.description}</p>
                            {/*<p>{result.vote_average}</p>*/}

                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default FakeStoreCard