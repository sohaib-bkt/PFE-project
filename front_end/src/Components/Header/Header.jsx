import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import feather from 'feather-icons';
import logo from '@Public/assets/images/logo.png';
import $ from 'jquery';
import '@Css/Header.css';

const Header = ({ children }) => {
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
                                  <li><Link to="/shop/clothes" className="d-block" style={{ color: "#e87316" }}>Shop Vetement</Link></li>
                                  <li><Link to="/shop/info" className="d-block" style={{ color: "#e87316" }}>Shop Info</Link></li>
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
                        <div className="search-box theme-bg-color" style={{ backgroundColor: "#e87316" }}>
                          <i data-feather="search" />
                        </div>
                      </li>
                      <li className="onhover-dropdown wislist-dropdown">
                        <div className="cart-media">
                          <a href="{{route('wishlist.list')}}">
                            <i data-feather="heart" />
                            <span id="wishlist-count" className="label label-theme rounded-pill" style={{ backgroundColor: "#e87316" }}>1</span>
                          </a>
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
        <div className="bg-overlay"></div>
      </header>

      <div className="mobile-menu d-sm-none">
        <ul>
          <li>
            <Link to="/" className='active'>
              <i data-feather="home"></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/shop">
              <i data-feather="align-justify"></i>
              <span>Category</span>
            </Link>
          </li>
          <li>
            <a href="/wishlist">
              <i data-feather="heart"></i>
              <span>Wishlist</span>
            </a>
          </li>
          <li>
            <a href="/profile">
              <i data-feather="user"></i>
              <span>Account</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
