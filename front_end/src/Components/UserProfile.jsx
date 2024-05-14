import React, { useEffect, useState } from 'react';
import Info from '@Components/EditInfo.jsx';
import Pass from '@Components/EditPass.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import UserApi from '../services/api/user/UserApi';
import HashLoader from 'react-spinners/HashLoader';
export default function UserProfile() {
    const [activeTab, setActiveTab] = useState('info'); 
    const [user, setUser] = useState(null); // Changed initial state to null
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); 

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
            
            if (!authenticated ) {
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

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="tab-pane fade active show">
                <div className="col-12">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="btn-group-vertical">
                                <button 
                                    type="button" 
                                    className='btn btn-dark mb-2'
                                    onClick={() => handleTabClick('info')}
                                >
                                    Edit Your Information &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button> 
                                <button 
                                    type="button" 
                                    className='btn btn-dark mb-2 '
                                    onClick={() => handleTabClick('password')}
                                >
                                    Edit Your Password &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button> 
                            </div>
                        </div>
                        <div className="col-lg-8">
                            {activeTab === 'info' && <Info />}
                            {activeTab === 'password' && <Pass />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
