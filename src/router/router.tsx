import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../auth/Login";
import SignUp from "../auth/SignUp";
import Account from "../pages/Account";
import Details from "../pages/Details";
import MyHikes from "../pages/MyHikes";
import Ski from "../pages/Ski";
import VillageWithHikes from "../pages/VillageWithHikes";
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
  {
    path: "/ski",
    element: <Ski />,
  },
  {
    path: "/:id",
    element: <Details />,
  },
  {
    path: "/villages/:id/:villagename",
    element: <VillageWithHikes />
  }
]);
