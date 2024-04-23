import React, { useState } from 'react';
import UserProfile from '@Components/UserProfile';
import Anonce from '@Components/Anonce';
import Wishlist from '@Pages/Wishlist';

export default function Profile() {
    const [activeTab, setActiveTab] = useState('anonce'); // Default active tab is 'desc'

    return (
        <>
            <div className='container-fluid-lg'>
                <div className="col-12">
                    <div className="cloth-review">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button 
                                    className={`nav-link ${activeTab === 'anonce' ? 'active' : ''}`} 
                                    onClick={() => setActiveTab('anonce')}
                                    type="button"
                                >
                                    My Announcement
                                </button>

                                <button 
                                    className={`nav-link ${activeTab === 'wishlist' ? 'active' : ''}`} 
                                    onClick={() => setActiveTab('wishlist')}
                                    type="button"
                                >
                                    Wishlist
                                </button>

                                <button 
                                    className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`} 
                                    onClick={() => setActiveTab('profile')}
                                    type="button"
                                >
                                    Profile
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='container-fluid-lg'>
            <div className="col-12"></div>
            <div className="mt-4">
                {activeTab === 'anonce' && <Anonce />}
                {activeTab === 'wishlist' && <Wishlist />}
                {activeTab === 'profile' && <UserProfile />}
            </div>
            </div>
            
        </>
    );
}
