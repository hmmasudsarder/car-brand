import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ProductAdded from "../Pages/ProductAdded/ProductAdded";
import Login from "../SharedComponents/Login";
import Register from "../SharedComponents/Register";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import MyCart from "../Pages/MyCart/MyCart";
import Error from "../SharedComponents/Error";
import ShowBrandDetails from "../Pages/BrandCard/ShowBrandDetails";
import ProductUpdate from "../Pages/ProductAdded/ProductUpdated/ProductUpdate";
import ShowDetailsButton from "../Pages/BrandCard/ShowDetailsButton";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
            loader: () => fetch('http://localhost:5000/brand')
        },
        {
            path: '/add',
            element: <PrivateRoute><ProductAdded/></PrivateRoute>
        },
        {
          path: '/showDetails/:id',
          element:<ShowDetailsButton></ShowDetailsButton>,
          loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
            path: '/my/:email',
            element: <PrivateRoute><MyCart/></PrivateRoute>,
            loader:({params}) => fetch(`http://localhost:5000/user/${params.email}`)
        },
        {
          path: '/showBrand/:category',
          element:<ShowBrandDetails></ShowBrandDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.category}`)
        },
        {
          path:'/updateProduct/:id',
          element:<ProductUpdate></ProductUpdate>,
          loader: ({params}) => fetch(`http://localhost:5000/cardUpdate/${params.id}`)
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