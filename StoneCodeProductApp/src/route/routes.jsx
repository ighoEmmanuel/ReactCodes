import {createBrowserRouter}  from "react-router";
import DummyProduct from "../components/products/DummyProduct.jsx";
import Layout from "../components/layout/Layout.jsx";
import FakeStore from "../components/products/FakeStore.jsx";
import ProductDetails from "../reuseable/ProductDetalis.jsx";

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
            },
            {
                path: "dummy-product/:id",  // <--- This is correct
                element: <ProductDetails />
            }
        ]
    },

])



export default routes;