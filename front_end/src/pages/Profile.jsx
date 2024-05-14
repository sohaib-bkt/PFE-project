import { useState , useEffect } from 'react';
import UserProfile from '@Components/UserProfile';
import Anonce from '@Components/Anonce';
import Wishlist from '@Pages/Wishlist';
import { useNavigate } from 'react-router-dom';


export default function Profile() {
    const [activeTab, setActiveTab] = useState('anonce'); // Default active tab is 'desc'
    const navigate = useNavigate();
    useEffect(() => {
        const authenticated = localStorage.getItem('authenticated') === 'true';
   
            if (!authenticated) {
                navigate('/error');
            }

        const scripts = [
            './assets/js/lazysizes.min.js',     
        ];
    
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve();
                    return;
                }
    
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
    
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Failed to load script ${src}`));
    
                document.body.appendChild(script);
            });
        };
    
        const loadScriptsSequentially = async () => {
            for (let src of scripts) {
                try {
                    await loadScript(src);
                } catch (error) {
                    console.error(error);
                }
            }
        };
    
        loadScriptsSequentially();
    
        return () => {
            // Cleanup
            scripts.forEach(src => {
                const script = document.querySelector(`script[src="${src}"]`);
                if (script) {
                    document.body.removeChild(script);
                }
            });
        };
    }, []);
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
                                    My Advertisement
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
                                    Settings
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
