import './App.css'
import router from "./router/routes.jsx"
import {RouterProvider} from "react-router";

function App() {


  return (
    <RouterProvider router={router}/>
  )
}

export default App
