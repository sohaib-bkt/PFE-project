import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer.jsx'
import AdminHeader from '../Components/Header/AdminHeader.jsx'
import { useEffect } from 'react';
export default function AdminLayouth() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('authToken')) {
            navigate('/login');
        }
    })
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


