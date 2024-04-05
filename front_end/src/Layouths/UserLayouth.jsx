import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer.jsx'
import UserHeader from '../Components/Header/UserHeader.jsx'
import { useUserContext } from '../context/UserContext.jsx'
import { useEffect } from 'react';
import UserApi from '../services/api/user/UserApi.js';
export default function UserLayouth() {
    const context = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        UserApi.getUser().then((data) => {
            context.setUser(data.data);
            
            context.setAuthenticated(true);
        }).catch(() => {
            context.logout();
            navigate("/login");
            
        })
        
        
    }, []);
    return (
        <>
        <UserHeader/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}


