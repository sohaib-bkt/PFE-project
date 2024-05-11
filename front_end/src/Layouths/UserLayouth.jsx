import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer.jsx'
import UserHeader from '../Components/Header/UserHeader.jsx'
import { useEffect, useState } from 'react';
import UserApi from '../services/api/user/UserApi.js';
import HashLoader from 'react-spinners/HashLoader.js';
export default function UserLayouth() {
    const [user, setUser] = useState(null); // Changed initial state to null
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await UserApi.getUser();
                setUser(data.data);
                setLoading(false);
            } catch (error) {
                navigate('/login');
            }
        };

        fetchUser();
    }, [navigate]); 

    useEffect(() => {
        if (user) {
            const authenticated = localStorage.getItem('authenticated') === 'true';
            
            if (!authenticated) {
                navigate('/login');
            }
        }
    }, [user, navigate]); 

   
        if (loading) {
            return (
              <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
                <HashLoader color="red" loading={loading} size={80} />
              </div>
            );
          }
    
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


