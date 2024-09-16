import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Services from "../pages/Services/Services/Services";
import Career from "../pages/Career/Career/Career";
import Blog from "../pages/Blog/Blog/Blog";
import Contact from "../pages/Contact/Contact/Contact";
import About from "../pages/About/About/About";
import Team from "../pages/Team/Team";
import Project from "../pages/Project/Project/Project";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../Layout/Dashboard";
import Client from "../pages/DashBoard/Client/Client";


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
                path: 'project',
                element: <Project></Project>
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
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },

        ],
    },
    {
        path:'/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'user',
                element:
            },
            {
                path: 'client',
                element: <Client></Client>
            }
        ]
    }
])