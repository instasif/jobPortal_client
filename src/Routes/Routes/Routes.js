import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Pages/Authentications/Login/Login";
import Signup from "../../Pages/Authentications/Signup/Signup";
import DisplayError from "../../Pages/DisplayError/DisplayError";
import Home from '../../Pages/Home/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <DisplayError/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            }
        ]
    }
])