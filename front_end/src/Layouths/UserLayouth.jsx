import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer.jsx'
import UserHeader from '../Components/Header/UserHeader.jsx'
export default function UserLayouth() {
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


