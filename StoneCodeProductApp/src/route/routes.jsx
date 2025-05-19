import {createBrowserRouter}  from "react-router";
import DummyProduct from "../components/products/DummyProduct.jsx";
import Layout from "../components/layout/Layout.jsx";
import FakeStore from "../components/products/FakeStore.jsx";


const routes = createBrowserRouter([
    {
        path: "/home",
        element: <Layout />,
        children: [
            {
                path: "dummy-product",
                element: <DummyProduct/>
            },
            {
                path: "fake-store",
                element: <FakeStore/>
            }
        ]
    },

])



export default routes;