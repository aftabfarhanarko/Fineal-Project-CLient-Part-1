import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Loding from "../Shared/Loding";
import MapCover from "../pages/MapCover";
import About from "../pages/About";
import Error from "../Shared/Error";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import PriverRouter from "./PriverRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <Loding></Loding>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/mapcover",
        element: <PriverRouter><MapCover></MapCover></PriverRouter>,
      },
      {
        path: "/about",
        element: <PriverRouter><About></About></PriverRouter>,
      },

      {
        path: "/*",
        element: <Error></Error>,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/*",
        element: <Error></Error>,
      },
    ],
  },
]);
