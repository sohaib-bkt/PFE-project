
import { useContext } from 'react'
import Header from './Header.jsx'
import { UserContext } from '../../context/UserContext.jsx'
export default function GuestHeader(){
    const {user} = useContext(UserContext)
    return(
        <>
    <Header>
    <li className="onhover-dropdown">
    <div className="cart-media name-usr">
     {user.name} <i data-feather="user" />
     </div>
      <div className="onhover-div profile-dropdown">
       <ul>
        <li><a href="{{route('login')}}" className="d-block">Login</a></li>
         <li><a href="{{route('register')}}" className="d-block">Register</a></li>
         </ul>
    </div>
     </li>
      </Header>
        </>
    )
}
