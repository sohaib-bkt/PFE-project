import Header from './Header.jsx'

export default function AdminHeader(){
    return(
        <>
         <Header>
         <li className="onhover-dropdown">
        <div className="cart-media name-usr">
        youssef <i data-feather="user" />
        </div>
        <div className="onhover-div profile-dropdown">
        <ul>
        <li><a href="{{route('admin.index')}}" className="d-block">Dashboard</a></li>
       <li><a href="{{route('user.index')}}" className="d-block">My Account</a></li>
       <li><a href="{{route('logout')}}" className="d-block">Logout</a>
       <form id="frmlogout" action="{{route('logout')}}" method="POST"></form>
        </li>
         </ul>
        </div>
        </li>
       </Header>
        </>
    )
}
