import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer.jsx'
import GuestHeader from '../Components/Header/GuestHeader.jsx'
export default function SharedLayouth() {
    return (
        <>
        <GuestHeader/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}


