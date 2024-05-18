import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminHeader from '../Components/Header/AdminHeader.jsx';
import HashLoader from 'react-spinners/HashLoader.js';
import axiosClient from '../api/axios.js';
import AdminNav from '@Pages/Admin/AdminNav.jsx';

export default function AdminLayout() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [abuseReports, setAbuseReports] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axiosClient.get('api/abuse-reports')
      .then(response => {
        setAbuseReports(response.data);
      })
      .catch(error => {
        console.error('Error fetching abuse reports:', error);
      });
  }, []);

  useEffect(() => {
    axiosClient.get('http://localhost:8000/api/contact/get')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
      });
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = JSON.parse(window.localStorage.getItem("user"));
        setUser(storedUser);
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
      const isAdmin = user.utype === 'admin';
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

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Styles */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-sb-admin-2/4.1.4/css/sb-admin-2.min.css" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="../../public/assets/css/vendors/dataTables.bootstrap4.min.css" />
      <div id='wrapper'>
        <AdminHeader/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AdminNav reportCount={abuseReports.length} abuseReports={abuseReports} contacts={contacts} contactsCount={contacts.length} />
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
}
