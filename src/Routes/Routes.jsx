import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Services from "../pages/Services/Services/Services";
import Career from "../pages/Career/Career/Career";
import Blog from "../pages/Blog/Blog/Blog";
import Contact from "../pages/Contact/Contact/Contact";
import About from "../pages/About/About/About";
import Team from "../pages/Team/Team";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'services',
                element: <Services></Services>
            },
            {
                path: 'career',
                element: <Career></Career>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'team',
                element: <Team></Team>
            },

        ]
    }
])