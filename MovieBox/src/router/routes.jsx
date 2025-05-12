import {createBrowserRouter}  from "react-router";
import SignUp from "../components/auth/signUp/SignUp.jsx";
import Login from "../components/auth/login/Login.jsx";

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
    }
])



export default router;