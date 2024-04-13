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
import ProdCard from "@Components/ProdCard.jsx"
import Slider from "@Components/Slider.jsx"
import PriceSlider from "@Components/PriceSlider.jsx"
export const router = createBrowserRouter([

            {
                element: <UserLayouth/>,
                children: [
                    {
                        path: "/profile",
                        element: <Profile/>
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
                        path: "/detail",
                        element: <Detail/>
                    },
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
                        element: <h1>hello admin</h1>
                    },
                    {
                        path: "products",
                        element: <h1>hello admin</h1>
                    },
                    {
                        path: "users",
                        element: <h1>hello admin</h1>
                    },
                    {
                        path: "brands",
                        element: <h1>hello admin</h1>
                    },
                    

                ]
            },
            {
                path: "*",
                element: <PriceSlider/>
            }

])
