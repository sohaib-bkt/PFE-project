import React, { useState } from 'react';
import Info from '@Components/EditInfo.jsx';
import Pass from '@Components/EditPass.jsx';

export default function UserProfile() {
    const [activeTab, setActiveTab] = useState('info'); // Default active tab is 'info'

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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                    </svg>
                                </button> 
                                <button 
                                    type="button" 
                                    className='btn btn-dark mb-2 '
                                    onClick={() => handleTabClick('password')}
                                >
                                    Edit Your Password &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                    </svg>
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
