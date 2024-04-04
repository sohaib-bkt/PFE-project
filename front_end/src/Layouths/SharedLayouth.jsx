import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer.jsx'
import Header from '../Components/Header/Header.jsx'
export default function SharedLayouth() {
    return (
        <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}


