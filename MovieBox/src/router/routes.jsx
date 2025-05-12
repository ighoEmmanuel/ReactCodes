import {createBrowserRouter}  from "react-router";
import SignUp from "../components/auth/signUp/SignUp.jsx";

const router = createBrowserRouter([
    {
        path: "",
        element: <SignUp />
    },
    {
        path: "/signup",
        element: <SignUp />
    }
])



export default router;