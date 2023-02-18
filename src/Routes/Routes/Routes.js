import { createBrowserRouter } from "react-router-dom";
import Test from "../../Contexts/Test";
import Main from "../../Layout/Main";
import Login from "../../Pages/Authentications/Login/Login";
import Signup from "../../Pages/Authentications/Signup/Signup";
import DisplayError from "../../Pages/DisplayError/DisplayError";
import Home from '../../Pages/Home/Home/Home';
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        path: "/test",
        element: (
          <PrivateRoute>
            <Test />
          </PrivateRoute>
        ),
      },
    ],
  },
]);