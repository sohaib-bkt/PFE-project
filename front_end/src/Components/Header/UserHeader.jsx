import  { useContext } from 'react';
import Header from './Header.jsx';
import { UserContext } from '../../context/UserContext.jsx';
import { Link } from 'react-router-dom';

export default function UserHeader() {
    const {  user, logout  } = useContext(UserContext);

    return (
        <>
            <Header>
            
            
                {user && user.name && (
                    <li className="onhover-dropdown">
                        <div className="cart-media name-usr">
                            {user.name}<i data-feather="user" />
                        </div>
                        <div className="onhover-div profile-dropdown">
                            <ul>
                                <li><Link to="/profile" className="d-block">Profile</Link></li>
                                <li><Link to="/account" className="d-block">My Account</Link></li>
                                <li>
                                    <a href="#" onClick={logout} className="d-block">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                )}
            </Header>
        </>
    );
}
