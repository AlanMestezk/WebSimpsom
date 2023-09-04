
import { createBrowserRouter } from "react-router-dom";

//pages 
import { Home } from "./pages/home";

import { NotFound } from "./pages/notFound";
import { Layout } from "./components/layout";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";


export const router = createBrowserRouter(
    [
        {
            element: <Layout/>,
            children:[
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/contact',
                    element: <Contact/>
                },
                {
                    path: 'about',
                    element: <About/>
                },
                {
                    path: '*',
                    element:<NotFound/>
                }
            ]
        }
    ]
)