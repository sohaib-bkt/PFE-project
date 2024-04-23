
import { useContext } from 'react'
import Header from './Header.jsx'
import { UserContext } from '../../context/UserContext.jsx'
import {Link} from 'react-router-dom'
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

        <li>  <Link to="/login" className="d-block">Login</Link></li>
        <li><Link to="/Register" className="d-block">Register</Link></li>
         </ul>
    </div>
     </li>
      </Header>
        </>
    )
}
