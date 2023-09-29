
import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/notFound";

//pages 
import { Home } from "./pages/home";
import { Layout } from "./components/layout";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";
import { HomerSimpson } from "./pages/homerSimpson";
import { MargeSimpson} from "./pages/margeSimpson";
import { BartSimpson } from "./pages/bartSimpson";
import { LisaSimpson } from "./pages/lisaSimpson";
import { MaggieSimpson } from "./pages/maggieSimson";


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
                    path: '/about',
                    element: <About/>
                },
                {
                    path: '/homer-simpson-about',
                    element:<HomerSimpson/>
                },
                {
                    path: '/marge-simpson-about',
                    element:<MargeSimpson/>
                },
                {
                    path: '/bart-simpson-about',
                    element:<BartSimpson/>
                },
                {
                    path: '/lisa-simpson-about',
                    element: <LisaSimpson/>
                },
                {
                    path:'/maggie-simpson-about',
                    element: <MaggieSimpson/>
                },
                {
                    path: '*',
                    element:<NotFound/>
                }
            ]
        }
    ]
)