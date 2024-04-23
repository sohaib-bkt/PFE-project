import  { useContext } from 'react';
import Header from './Header.jsx';
import { UserContext } from '../../context/UserContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import UserApi from '../../services/api/user/UserApi.js';

export default function UserHeader() {
    const {  user, logout : contextLogout  } = useContext(UserContext);
    const navigate = useNavigate();

    const logout = async() => {
        UserApi.logout();
        contextLogout();
        navigate("/");
    }

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
                                    <a onClick={logout} className="d-block">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                )}
            </Header>
        </>
    );
}
