import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import { useUserContext } from '../context/UserContext.jsx';
import AdminHeader from '../Components/Header/AdminHeader.jsx';

export default function AdminLayout() {
    const { user } = useUserContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        if (!localStorage.getItem('authenticated') && localStorage.getItem('authenticated') === 'false' && !user || user.utype !== 'admin') {
            navigate('/login');
        } else {
            setLoading(false); 
        }
        

        return () => {
        
        };
    }, [user, navigate]); 
    if (loading) {
        return <div>Loading...</div>;
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
