import React, { useState } from 'react';
import Info from '@Components/EditInfo.jsx';
import Pass from '@Components/EditPass.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
