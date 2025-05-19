import { Outlet } from "react-router";
import Header from "../header/Header.jsx";
import SideBar from "../sideBar/SideBar.jsx";
import Footer from "../footer/Footer.jsx" ;
import style from "./layout.module.css"

const Layout = () => {
    return (
        <div className={style.layOutMainWrapper}>
            <Header />
            <div className={style.sideBarOutlet}>
                <SideBar />
                <Outlet />
            </div>

            <Footer/>

        </div>
    )
}


export default Layout