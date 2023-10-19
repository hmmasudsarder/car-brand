import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ProductAdded from "../Pages/ProductAdded/ProductAdded";
import Login from "../SharedComponents/Login";
import Register from "../SharedComponents/Register";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import MyCart from "../Pages/MyCart/MyCart";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/add',
            element: <PrivateRoute><ProductAdded/></PrivateRoute>
        },
        {
            path: '/my',
            element: <PrivateRoute><MyCart/></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element:<Register></Register>
        }
      ],
    }
]);

export default Router;