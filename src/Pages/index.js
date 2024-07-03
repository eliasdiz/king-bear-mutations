import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Will from './Will'


export const router = createBrowserRouter([

    {path: '/', element: <Home />},
    {path: '/will', element: <Will />}

    // {
    //     path: '/', element: <Home />,
    //     children:
    //     [
    //         {path: '/will', element: <Will />}
    //     ]
    // },

    
])

