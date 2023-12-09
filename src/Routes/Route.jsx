import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../pages/Home/Home";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    
    }
])
export default Router