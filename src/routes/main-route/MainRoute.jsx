import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/main-layout/MainLayout";
import Home from "../../pages/home/Home";
import ErrorPage from "../../pages/error-page/ErrorPage";
import CategoryPage from "../../pages/category-page/CategoryPage";
import LoginPage from "../../pages/login/LoginPage";
import Login from "../../pages/login/Login";
import Register from "../../pages/login/Register";
import PrivateRoute from "../private-route/PrivateRoute";
import Profile from "../../pages/profile/Profile";
import Bookings from "../../pages/bookings/Bookings";

const MainRoute = createBrowserRouter([
    {
        path: `/`,
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: `/`,
                element: <Home></Home>
            },
            {
                path: `/category`,
                element: <CategoryPage></CategoryPage>,
                loader: () => fetch(`./events.json`)
            },
            {
                path: `/login`,
                element: <LoginPage></LoginPage>,
                children: [
                    {
                        path: `/login`,
                        element: <Login></Login>
                    },
                    {
                        path: `/login/register`,
                        element: <Register></Register>
                    }
                ]
            },
            {
                path: `/profile`,
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: `/bookings`,
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
    }
])

export default MainRoute;