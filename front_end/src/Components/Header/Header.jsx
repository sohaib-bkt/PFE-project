import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import feather from 'feather-icons';
import logo from '@Public/assets/images/logo.png';
import $ from 'jquery';
import '@Css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useProductContext } from '../../context/ProductContext';

const Header = ({ children }) => {
  const { countWishList } = useProductContext();
  const location = useLocation();
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(window.localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    feather.replace();
    const handleNavToggle = (e) => {
      e.preventDefault();
      $(".nav-menu").css("right", "0px");
      $(".mobile-poster").css("right", "0px");
      $(".bg-overlay").addClass("show");
    };

    const handleNavClose = (e) => {
      e.preventDefault();
      $(".nav-menu").css("right", "-410px");
      $(".mobile-poster").css("right", "-410px");
      $(".bg-overlay").removeClass("show");
    };

    const handleSubMenuToggle = (e) => {
      e.preventDefault();
      const $this = $(e.currentTarget);
      $this.toggleClass("active");
      if ($this.next().is(":hidden")) {
        $this.find("span").html("-");
        $this.next().slideDown("normal");
      } else {
        $this.find("span").html("+");
        $this.next().slideUp("normal");
      }
    };

    $(".toggle-nav, .sidebar-toggle").on("click", handleNavToggle);
    $(".back-btn, .bg-overlay").on("click", handleNavClose);
    $(".menu-title, .menu-title-level1, .submenu-title").on("click", handleSubMenuToggle);

    return () => {
      $(".toggle-nav, .sidebar-toggle, .back-btn, .bg-overlay").off("click");
      $(".menu-title, .menu-title-level1, .submenu-title").off("click");
    };
  }, [location, countWishList]);

  return (
    <>
      <header className="header-style-2" id="home">
        <div className="main-header navbar-searchbar">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-menu">
                  <div className="menu-left">
                    <div className="brand-logo">
                      <Link to="/">
                        <img src={logo} className="h-logo img-fluid lazyload" alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <nav>
                    <div className="main-navbar">
                      <div id="mainnav">
                        <div className="toggle-nav">
                          <i className="fa fa-bars sidebar-bar" />
                        </div>
                        <ul className="nav-menu">
                          <li className="back-btn d-xl-none">
                            <div className="close-btn">
                              Menu
                              <span className="mobile-back">
                                <i className="fa fa-angle-left" />
                              </span>
                            </div>
                          </li>
                          <li>
                            <Link to="/" className="nav-link">Home</Link>
                          </li>
                          <li className="onhover-dropdown">
                            <Link to="#" className="onhover-dropdown">Shop</Link>
                            <div className="onhover-div profile-dropdown">
                              <ul>
                                <li><Link to="/shop/clothes" className="d-block">Shop Vetement</Link></li>
                                <li><Link to="/shop/info" className="d-block">Shop Info</Link></li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <Link to="/about" className="nav-link">About Us</Link>
                          </li>
                          <li>
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  <div className="menu-right">
                    <ul>
                      <li>
                        {location.pathname !== '/ajouter-annonce' && location.pathname !== '/edit-annonce' && user && user.utype !== 'admin' && (
                          <div className="search-box btn btn-light" style={{ backgroundColor: '#FAF2F2', border: 'none', color: '#3E3E3E', fontWeight: '100', fontFamily: 'monospace', borderRadius: '20px', paddingRight: '10px', paddingLeft: '10px' }}>
                            <Link to="/ajouter-annonce"><FontAwesomeIcon icon={faPlus} /><span className="post-ad-link"> Post an ad</span></Link>
                          </div>
                        )}
                      </li>
                      <li className="onhover-dropdown wishlist-dropdown">
                        <div className="cart-media">
                          <Link to="/wishlist">
                            <i data-feather="heart" />
                            <span id="wishlist-count" className="label label-theme rounded-pill">{countWishList}</span>
                          </Link>
                        </div>
                      </li>
                      {children}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
