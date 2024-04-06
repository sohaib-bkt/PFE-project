import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer.jsx'
import AdminHeader from '../Components/Header/AdminHeader.jsx'
import { useEffect } from 'react';
import { useUserContext } from '../context/UserContext.jsx';
export default function AdminLayouth() {
    const {user } = useUserContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('authenticated')) {
            navigate('/login');
        }
    })
    console.log(user);
    return (
        <>
        <AdminHeader/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}


