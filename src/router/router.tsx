import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../auth/Login";
import SignUp from "../auth/SignUp";
import Account from "../pages/Account";
import MyHikes from "../pages/MyHikes";
import Villages from "../pages/Villages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/myhikes",
    element: <MyHikes />,
  },
  {
    path: "/villages",
    element: <Villages />,
  },
]);
