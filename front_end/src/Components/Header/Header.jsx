import { useEffect } from 'react';
import '@Public/assets/css/style.css';
import '@Public/assets/css/vendors/font-awesome.css';
import '@Public/assets/css/vendors/bootstrap.css';
import '@Public/assets/css/demo4.css';
import '@Public/assets/css/demo2.css';
import '@Public/assets/css/custom.css';
import feather from 'feather-icons';
import $ from 'jquery';
import '@Css/Header.css';

export default function Header({children}) {
  useEffect(() => {
    feather.replace(); // Replace all elements with `data-feather` attribute

    // Event listener for opening the navigation menu
    $(".toggle-nav, .sidebar-toggle").on("click", function (e) {
      e.preventDefault();
      $(".nav-menu").css("right", "0px");
      $(".mobile-poster").css("right", "0px");
      $(".bg-overlay").addClass("show");
    });

    // Event listener for closing the navigation menu
    $(".back-btn, .bg-overlay").on("click", function (e) {
      e.preventDefault();
      $(".nav-menu").css("right", "-410px");
      $(".mobile-poster").css("right", "-410px");
      $(".bg-overlay").removeClass("show");
    });

    // Toggle function for submenus
    $(".menu-title, .menu-title-level1, .submenu-title").on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("active");
      if ($(this).next().is(":hidden")) {
        $(this).find("span").html("-");
        $(this).next().slideDown("normal");
      } else {
        $(this).find("span").html("+");
        $(this).next().slideUp("normal");
      }
    });

    // Cleanup function
    return () => {
      // Remove event listeners when component unmounts
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
                    <a href="{{ route('app.index') }}">
                      <img src="../../../public/assets/images/logo.png" className="h-logo img-fluid lazyload" alt="logo" />
                    </a>
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
                          <a href="#" className="nav-link menu-title">Home </a>
                        </li>
                        <li>
                          <a href="#" className="nav-link menu-title">Shop</a>
                          <ul className="submenu">
                            <li>
                              <a href="{{route('shop.index')}}" className="nav-link">Vêtements</a>
                            </li>
                            <li>
                              <a href="#" className="nav-link">Matériel Info</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="{{route('app.aboutus')}}" className="nav-link menu-title">About Us</a>
                        </li>
                        <li>
                          <a href="{{route('app.contactus')}}" className="nav-link menu-title">Contact Us</a>
                        </li>
                        <li>
                          <a href="{{route('app.blog')}}" className="nav-link menu-title">Blog</a>
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
                <a href="demo3.php" className="active">
                    <i data-feather="home"></i>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i data-feather="align-justify"></i>
                    <span>Category</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i data-feather="heart"></i>
                    <span>Wishlist</span>
                </a>
            </li>
            <li>
                <a href="user-dashboard.php">
                    <i data-feather="user"></i>
                    <span>Account</span>
                </a>
            </li>
        </ul>
    </div>
    </>
  );
}
