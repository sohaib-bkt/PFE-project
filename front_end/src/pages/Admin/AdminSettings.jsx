import React, { useState } from 'react';
import Info from '@Components/EditInfo.jsx';
import Pass from '@Components/EditPass.jsx';
import AdminNav from '@Pages/Admin/AdminNav.jsx';
import {Link} from 'react-router-dom';
export default function UserProfile() {
    const [activeTab, setActiveTab] = useState('info'); // Default active tab is 'info'

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
         <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <AdminNav />
            <div className="tab-pane fade active show">
                <div className="col-12">
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="row">
              <div className="col">
                <nav
                  aria-label="breadcrumb"
                  className="bg-body-tertiary rounded-3 p-3 mb-4"
                >
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                    <Link 
                                    type="button" 
                                    onClick={() => handleTabClick('info')}
                                    >
                                    Edit Your Information &nbsp;
                                
                                </Link>   
                    </li>
                    <li className="breadcrumb-item">
                    <Link 
                                    type="button" 
                                    onClick={() => handleTabClick('password')}
                                >
                                    Edit Your Password &nbsp;
                                   
                                </Link>                     </li>
                
                  </ol>
                </nav>
              </div>
    </div>
                        </div>
                        <div className="col-lg-8">
                            {activeTab === 'info' && <Info />}
                            {activeTab === 'password' && <Pass />}
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
            </div>
        </>
    );
}
