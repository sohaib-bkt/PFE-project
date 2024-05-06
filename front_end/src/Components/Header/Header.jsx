import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import feather from 'feather-icons';
import logo from '@Public/assets/images/logo.png';
import $ from 'jquery';
import '@Css/Header.css';
import axiosClient from '../../api/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const Header = ({ children }) => {

  
  const [countWishList, setCountWishList] = useState(0);
  const location = useLocation();

  useEffect(() => {
    axiosClient.get('http://localhost:8000/api/wishlist/count').then((response) => {
      setCountWishList(response.data.count);

    })
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
  }, []);

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
                            <Link to="/" className="nav-link ">Home</Link>
                          </li>

                        <li className="onhover-dropdown">
                          <Link to="#" className="onhover-dropdown">Shop</Link>
                          <div  className="onhover-div profile-dropdown">
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
                          <li>
                            <Link to="/blog" className="nav-link ">Blog</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  <div className="menu-right">
                    <ul>
                      <li>
                        {/* <div className="search-box theme-bg-color">
                          <i data-feather="search" />
                        </div> */}
                          {location.pathname !== '/ajouter-annonce' && location.pathname !== '/edit-annonce' && (
                            <>
                        <div className="search-box btn btn-light" style={{backgroundColor: '#FAF2F2', border: 'none',  color: '#3E3E3E', fontWeight: '100', fontFamily: 'monospace', borderRadius: '20px', paddingRight: '10px', paddingLeft: '10px' }}>
                         
                              <FontAwesomeIcon icon={faPlus} />
                              <Link to="/ajouter-annonce" className="post-ad-link"> Post an ad</Link>
                              </div>
                            </>
                          )}
                        
                      </li>
                      <li className="onhover-dropdown wislist-dropdown">
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

                  {/* <div className="search-full">
                  <form method="GET" action="{{ route('search.products') }}">
                    <div className="input-group">
                      <span className="input-group-text">
                        <button type="submit" className="btn btn-light search-icon-open">
                          <i data-feather="search" className="font-light" />
                        </button>
                      </span>
                      <input
                        type="text"
                        name="q"
                        className="form-control search-type"
                        placeholder="Search here.."
                      />
                      <span className="input-group-text">
                        <button type="button" className="btn btn-light close-search">
                          <i data-feather="x" className="font-light" />
                        </button>
                      </span>
                    </div>
                  </form>
                  </div> */}

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
