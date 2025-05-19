import React from 'react'
import {Link} from 'react-router'
import "./SideBar.modoule.css"

const SideBar = () => {
    return (
        <div className="display">
            <Link to={"now-playing"} className={"now-playing"}>Now Playing</Link>
            <Link to={"popular"} className={"popular-movie"}>Popular Movies</Link>
        </div>
    )
}


export default SideBar;