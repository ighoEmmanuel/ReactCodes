import {Link} from "react-router";
import "./SideBar.modoule.css"
const SideBar = () =>{
    return (
        <div className="display">
            <Link to={"dummy-product"} className={"now-playing"}>Dummy Store</Link>
            <Link to={"fake-store"} className={"popular-movie"}>Fake Store</Link>
        </div>
    )
}


export default SideBar