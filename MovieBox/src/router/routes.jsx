import {createBrowserRouter}  from "react-router";
import SignUp from "../components/auth/signUp/SignUp.jsx";
import Login from "../components/auth/login/Login.jsx";
import Layout from "../components/layout/Layout.jsx";
import NowPlaying  from "../components/movies/NowPlaying.jsx";
import Popular from "../components/movies/Popular.jsx";

const router = createBrowserRouter([
    {
        path: "",
        element: <SignUp />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/home",
        element: <Layout />,
        children:[
            {
                path: "now-playing",
                element:<NowPlaying/>
            },
            {
                path: "popular",
                element:<Popular/>
            }
        ]
    }
])



export default router;