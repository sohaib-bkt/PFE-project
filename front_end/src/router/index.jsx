import {createBrowserRouter} from "react-router-dom";
import Home from "@Pages/Home.jsx";
import Login from "@Pages/Login.jsx";
import Register from "@Pages/Register.jsx";
import Contact from "@Pages/Contact.jsx";
import About from "@Pages/About.jsx";
import Blog from "@Pages/Blog.jsx";
import Profile from "@Pages/Profile.jsx"
import Wishlist from "@Pages/Wishlist.jsx";
import Notfound from "@Pages/Notfound.jsx";
import UserLayouth from "@Layouths/UserLayouth.jsx"
import SharedLayouth from "@Layouths/SharedLayouth.jsx"
import GuestLayouth from "@Layouths/GuestLayouth.jsx"
import AdminLayouth from "@Layouths/AdminLayouth.jsx"
import ShopClothes from "@Pages/ShopClothes.jsx"
import ShopInfo from "@Pages/ShopInfo.jsx"
import Detail from "@Pages/Detail.jsx"
import AddAdv from "@Pages/Advertisement/AddAdv.jsx"
import EditAdv from "@Pages/Advertisement/EditAdv.jsx"
import  Dashboard  from "@Pages/Admin/Dashboard.jsx";
import ForgotPass from "@Pages/ForgotPass.jsx"
import ResetPass from "@Pages/ResetPass.jsx"
import Users from "@Pages/Admin/Users.jsx"
import EditUser from "@Pages/Admin/EditUser.jsx"

export const router = createBrowserRouter([

            {
                element: <UserLayouth/>,
                children: [
                    {
                        path: "/profile",
                        element: <Profile/>
                    },
                    {
                        path: "/ajouter-annonce",
                        element: <AddAdv/>
                    },
                    {
                        path: "/edit-annonce",
                        element: <EditAdv/>
                    },
                    

                ]
            },
            {
                element: <SharedLayouth/>,
                children: [
                    {
                        path: "/",
                        element: <Home/>
                    },
                    {
                        path: "/shop/clothes",
                        element: <ShopClothes/>
                    },
                    {
                        path: "/shop/info",
                        element: <ShopInfo/>
                    },
                    {
                        path: "/contact",
                        element: <Contact/>
                    },
                    {
                        path: "/about",
                        element: <About/>
                    },
                    {
                        path: "/blog",
                        element: <Blog/>
                    },
                    {
                        path: "/wishlist",
                        element: <Wishlist/>
                    },
                    {
                        path: "/detail/:slug",
                        element: <Detail/>
                    },
                    {
                        path: "/forgot-pass",
                        element: <ForgotPass/>
                    },
                    {
                        path: "/reset-pass",
                        element: <ResetPass/>
                    }
                ]
            },
            {
                element: <GuestLayouth/>,
                children: [
                    {
                        path: "/login",
                        element: <Login/>
                    },
                    {
                        path: "/register",
                        element: <Register/>
                    },

                ]
            },
            {
                element:<AdminLayouth/>,
                children:[
                    {
                        path: "/dashboard",
                        element: <Dashboard/>
                    },
                    {
                        path: "/users",
                        element: <Users/>
                    },
                    {
                        path: "/edit-user",
                        element: <EditUser/>
                    },
                    {
                        path: "brands",
                        element: <h1>hello admin</h1>
                    },
                    

                ]
            },
            {
                path: "*",
                element: <Notfound/>
            }

])
