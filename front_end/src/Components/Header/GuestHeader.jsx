import { useContext, useState, useEffect } from 'react';
import Header from './Header.jsx';
import { UserContext } from '../../context/UserContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import UserApi from '../../services/api/user/UserApi.js';

export default function GuestHeader() {
    const { logout: contextLogout } = useContext(UserContext);
    const [name, setName] = useState('');
    const [user , setUser] = useState({})
    useEffect(() => {
        getUser();
    }, [name]);

    const getUser = async () => {
        try {
            const response = await UserApi.getUser();
            setName(response.data.name);
            setUser(response.data);
        } catch (error) {
            // Handle error
        }
    }

    const navigate = useNavigate();

    const logout = async () => {
        try {
            await UserApi.logout();
            contextLogout();
            setName("");
            navigate("/");
        } catch (error) {
            // Handle error
        }
    }

    return (
<>
    <Header>
        {name ? (
            <li className="onhover-dropdown">
                <div className="cart-media name-usr">
                    {name}<i data-feather="user" />
                </div>
                <div className="onhover-div profile-dropdown">
                    <ul>
                        <li>{user.utype == 'admin' ? <Link to="/dashboard" className="d-block">Dashboard</Link> : <Link to="/profile" className="d-block">Profile</Link>}</li>
                        
                        <li>
                            <a onClick={logout} className="d-block">Logout</a>
                        </li>
                    </ul>
                </div>
            </li>
        ) : (
            <li className="onhover-dropdown">
                <div className="cart-media name-usr">
                    Guest<i data-feather="user" />
                </div>
                <div className="onhover-div profile-dropdown">
                    <ul>
                        <li><Link to="/login" className="d-block">Login</Link></li>
                        <li><Link to="/register" className="d-block">Register</Link></li>
                    </ul>
                </div>
            </li>
        )}
    </Header>
</>

    );
}
