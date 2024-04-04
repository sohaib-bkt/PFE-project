import React, { useContext, useEffect } from 'react';
import Header from './Header.jsx';
import { UserContext } from '../../context/UserContext.jsx';
import UserApi from '../../services/api/user/UserApi.js';

export default function UserHeader() {
    const { setUser, user, setAuthenticated } = useContext(UserContext);
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await UserApi.getUser();
                setUser(response.data);
                setAuthenticated(true);
                console.log(response.data);
            } catch (error) {
                setUser({});
                setAuthenticated(false);
                console.log(error);
            }
        };

        fetchUser();
    }, []); // Empty dependency array to run once when component mounts

    return (
        <>
            <Header>
                <li className="onhover-dropdown">
                    <div className="cart-media name-usr">
                        {user && user.name} <i data-feather="user" />
                    </div>
                    <div className="onhover-div profile-dropdown">
                        <ul>
                            <li><a href="{{route('admin.index')}}" className="d-block">Profile</a></li>
                            <li><a href="{{route('user.index')}}" className="d-block">My Account</a></li>
                            <li>
                                <a href="{{route('logout')}}" className="d-block">Logout</a>
                                <form id="frmlogout" action="{{route('logout')}}" method="POST"></form>
                            </li>
                        </ul>
                    </div>
                </li>
            </Header>
        </>
    );
}
