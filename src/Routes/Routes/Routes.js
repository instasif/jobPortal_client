import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Pages/Authentications/Login/Login";
import Signup from "../../Pages/Authentications/Signup/Signup";
import DisplayError from "../../Pages/DisplayError/DisplayError";
import Home from "../../Pages/Home/Home/Home";
import Apply from '../../Pages/Apply/Apply';
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import About from '../../Pages/About/About';
import ContactUs from "../../Pages/Contactus/ContactUs";
import Blogs from "../../Pages/Bogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DisplayError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/apply",
        element: (
          <PrivateRoute>
            <Apply />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      },
      {
        path: "/blogs",
        element: <Blogs/>
      }
    ],
  },
]);