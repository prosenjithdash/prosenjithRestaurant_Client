import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivetRoute from "./PrivetRoute";
import Deshboard from "../Layout/Deshboard";
import Cart from "../Pages/Dashboard/Cart/Cart";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/menu',
        element:<Menu></Menu>
      },
      {
        path: '/orderFood/:category',
        element:<OrderFood></OrderFood>
      },
      {
        path: '/contactUs',
        element:<ContactUs></ContactUs>
      },
      {
        path: '/logIn',
        element:<Login></Login>
      },
      {
        path: '/signUp',
        element:<SignUp></SignUp>
        },
        {
          path: '/secret',
          element: <PrivetRoute><Secret></Secret></PrivetRoute>
        }
    ]
  },
  {
    path: 'dashboard',
    element: <Deshboard></Deshboard>,
    children: [
      {
        path: 'cart',
        element:<Cart></Cart>
      }
    ]
  }
  ]);

export default Router;