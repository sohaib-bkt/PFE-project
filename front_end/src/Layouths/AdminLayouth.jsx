import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminHeader from '../Components/Header/AdminHeader.jsx';
import UserApi from '../services/api/user/UserApi.js';
import HashLoader from 'react-spinners/HashLoader.js';

export default function AdminLayout() {
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
            const isAdmin = user.utype == 'admin';
            if (!authenticated || !isAdmin) {
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
            {/* Styles */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-sb-admin-2/4.1.4/css/sb-admin-2.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-sb-admin-2/4.1.4/css/sb-admin-2.min.css" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="../../public/assets/css/vendors/dataTables.bootstrap4.min.css" />
            <div id='wrapper'>
                <AdminHeader/>
                <Outlet />
            </div>
       </>
    );
}
