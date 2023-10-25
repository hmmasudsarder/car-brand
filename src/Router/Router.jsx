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
            loader: () => fetch('https://brand-shop-server-75fl384hx-masuds-projects-c3df1a1c.vercel.app/brand')
        },
        {
            path: '/add',
            element: <PrivateRoute><ProductAdded/></PrivateRoute>
        },
        {
          path: '/showDetails/:id',
          element:<ShowDetailsButton></ShowDetailsButton>,
          loader: ({params}) => fetch(`https://brand-shop-server-75fl384hx-masuds-projects-c3df1a1c.vercel.app/details/${params.id}`)
        },
        {
            path: '/my/:email',
            element: <PrivateRoute><MyCart/></PrivateRoute>,
            loader:({params}) => fetch(`https://brand-shop-server-75fl384hx-masuds-projects-c3df1a1c.vercel.app/user/${params.email}`)
        },
        {
          path: '/showBrand/:category',
          element:<ShowBrandDetails></ShowBrandDetails>,
          loader: ({params}) => fetch(`https://brand-shop-server-75fl384hx-masuds-projects-c3df1a1c.vercel.app/product/${params.category}`)
        },
        {
          path:'/updateProduct/:id',
          element:<ProductUpdate></ProductUpdate>,
          loader: ({params}) => fetch(`https://brand-shop-server-75fl384hx-masuds-projects-c3df1a1c.vercel.app/cardUpdate/${params.id}`)
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