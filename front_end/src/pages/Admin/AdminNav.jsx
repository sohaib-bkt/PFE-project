import { Link, useNavigate } from 'react-router-dom'
import img from '@Assets/images/user.svg.png'
import { useContext, useEffect, useState } from 'react';
import UserApi from '../../services/api/user/UserApi';
import { UserContext } from '../../context/UserContext';

export default function AdminNav(props) {
  const [user, setUser] = useState({});
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedUser = JSON.parse(window.localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/error");
    }
    setUser(storedUser);
  }, []);

  useEffect(() => {
    setCount(props.reportCount);
  }, [props.reportCount]);

  const handleLogout = async () => {
    try {
      await UserApi.logout();
      logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
  
    return (
        <>
         <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                >
                  <i className="fa fa-bars" style={{color:"black"}}/>
                </button>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="searchDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-search fa-fw" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary11" type="button">
                              <i className="fas fa-search fa-sm11 "/>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                  <li className="nav-item dropdown no-arrow mx-1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id={`alertsDropdown`}
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-bell fa-fw" />
                      <span className="badge badge-danger badge-counter">{count}</span>
                    </a>
                    <div
                      
                      className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby={`alertsDropdown`}
                    >
                      <h6 className="dropdown-header"style={{backgroundColor:"#D80606 " , border:'none'}}>Reports</h6>
                      {props.abuseReports.slice(-3).map((report) => (

                      <li className="dropdown-item d-flex align-items-center">
                        <div className="mr-3">
                            <img src={img} style={{width: '40px', height: '40px'}}/>
                        </div>
                        <div>
                          <div className="small text-black-500">{report.reporter.name}</div>
                          <span className="font-weight-bold">
                            {report.message}
                          </span>
                        </div>
                      </li>
                          ))}

                      <Link
                        className="dropdown-item text-center small text-gray-500"
                        to="/prod-reports"
                      >
                        Show All Reports 
                      </Link>

                    </div>


                  </li>


                  <li className="nav-item dropdown no-arrow mx-1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="messagesDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-envelope fa-fw" />
                      <span className="badge badge-danger badge-counter">7</span>
                    </a>
                    <div
                      className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="messagesDropdown"
                    >
                      <h6 className="dropdown-header">Message Center</h6>
                      <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="img/undraw_profile_1.svg"
                            alt="..."
                          />
                          <div className="status-indicator bg-success" />
                        </div>
                        <div className="font-weight-bold">
                          <div className="text-truncate">
                            Hi there! I am wondering if you can help me with a problem
                            I've been having.
                          </div>
                          <div className="small text-gray-500">
                            Emily Fowler · 58m
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="img/undraw_profile_2.svg"
                            alt="..."
                          />
                          <div className="status-indicator" />
                        </div>
                        <div>
                          <div className="text-truncate">
                            I have the photos that you ordered last month, how would
                            you like them sent to you?
                          </div>
                          <div className="small text-gray-500">Jae Chun · 1d</div>
                        </div>
                      </a>
                      <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="img/undraw_profile_3.svg"
                            alt="..."
                          />
                          <div className="status-indicator bg-warning" />
                        </div>
                        <div>
                          <div className="text-truncate">
                            Last month's report looks great, I am very happy with the
                            progress so far, keep up the good work!
                          </div>
                          <div className="small text-gray-500">
                            Morgan Alvarez · 2d
                          </div>
                        </div>
                      </a>
                     
                      <Link
                        className="dropdown-item text-center small text-gray-500"
                        to="/messages"
                      >
                        Read More Messages
                      </Link>
                    </div>
                  </li>
                  <div className="topbar-divider d-none d-sm-block" />
                  {/* Nav Item - User Information */}
                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                        {user && user.name}
                      </span>
                      <img
                        className="img-profile rounded-circle"
                        src={img}
                      />
                    </a>
                    {/* Dropdown - User Information */}
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <Link className="dropdown-item" to="/admin-profile">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                        Profile
                      </Link>
                      <Link className="dropdown-item" to="/admin-settings">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                        Settings
                      </Link>

                      <div className="dropdown-divider" />
                      <button
                        onClick={handleLogout}
                        className="dropdown-item"
                        href="#"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                        Logout
                      </button>
                    </div>
                  </li>
                </ul>
              </nav>
        </>
    );
}