import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Video from "../Pages/Video";

const router = createBrowserRouter ([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
                
            },

            {
                path:'/videos/:id',
                element:<Video></Video>,
             

                
            },
            {
                path:'/videos',
                element:<Video></Video>,
               

                
            },

        ]
    }
]);

export default router;