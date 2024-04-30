import { Outlet, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import { useUserContext } from '../context/UserContext.jsx';

export default function AdminLayout() {
    const { user } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('authenticated')) {
            navigate('/login');
        }
        
        // Cleanup function to remove event listener
        return () => {
            // Remove any event listeners or clean-up tasks here if necessary
        };
    }, []); // Empty dependency array to only run on mount

    console.log(user);
    
    return (
        <>
            {/* Styles */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-sb-admin-2/4.1.4/css/sb-admin-2.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-sb-admin-2/4.1.4/css/sb-admin-2.min.css" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
            <main>
                <Outlet />
            </main>
        </>
    );
}
