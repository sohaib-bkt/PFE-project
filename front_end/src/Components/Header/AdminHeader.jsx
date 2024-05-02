import logo from '@Assets/images/icons8.png'
import '@Css/customAdmincss.css';
import $ from 'jquery';
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faTable} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
export default function AdminHeader(){
    useEffect(() => {
        $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
          $("body").toggleClass("sidebar-toggled");
          $(".sidebar").toggleClass("toggled");
          if ($(".sidebar").hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
          };
        });
    
        !function(l){"use strict";l("#sidebarToggle, #sidebarToggleTop").on("click",function(e){l("body").toggleClass("sidebar-toggled"),l(".sidebar").toggleClass("toggled"),l(".sidebar").hasClass("toggled")&&l(".sidebar .collapse").collapse("hide")}),l(window).resize(function(){l(window).width()<768&&l(".sidebar .collapse").collapse("hide"),l(window).width()<480&&!l(".sidebar").hasClass("toggled")&&(l("body").addClass("sidebar-toggled"),l(".sidebar").addClass("toggled"),l(".sidebar .collapse").collapse("hide"))}),l("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel",function(e){var o;768<l(window).width()&&(o=(o=e.originalEvent).wheelDelta||-o.detail,this.scrollTop+=30*(o<0?1:-1),e.preventDefault())}),l(document).on("scroll",function(){100<l(this).scrollTop()?l(".scroll-to-top").fadeIn():l(".scroll-to-top").fadeOut()}),l(document).on("click","a.scroll-to-top",function(e){var o=l(this);l("html, body").stop().animate({scrollTop:l(o.attr("href")).offset().top},1e3,"easeInOutExpo"),e.preventDefault()})}(jQuery);    
        return () => {
          // Clean up jQuery event listeners if necessary
          $("#sidebarToggle, #sidebarToggleTop").off('click');
        };
      }, []);
    return(
        <>
          <ul
            className="navbar-nav bg-gradient-primary11 sidebar sidebar-dark accordion"
            id="accordionSidebar" >
            {/* Sidebar - Brand */}
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="index.html"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <img src={logo} alt="logo" width={'35px'}/>
              </div>
              <div className="sidebar-brand-text mx-3" style={{ fontFamily: "sans-serif" , fontWeight: '500', fontSize: '16.4px'}}>
                Moon Store
              </div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" style={{opacity: '0.7', backgroundColor: 'white' }}/>
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
              <Link className="nav-link" to="/dashboard">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Dashboard</span>
              </Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" style={{opacity: '0.7', backgroundColor: 'white' }}/>
            {/* Heading */}
            <div className="sidebar-heading" style={{color: 'white', fontFamily: "monospace", fontSize: '14px'}}>
            <FontAwesomeIcon icon={faTable}/>&nbsp;Tables</div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
            <Link className="nav-link" to="/users">
            &nbsp;&nbsp;<FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;
                <span>Users</span>
              </Link>
            </li>
            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i className="fas fa-fw fa-wrench" />
                <span>Utilities</span>
              </a>
              <div
                id="collapseUtilities"
                className="collapse"
                aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Custom Utilities:</h6>
                  <a className="collapse-item" href="utilities-color.html">
                    Colors
                  </a>
                  <a className="collapse-item" href="utilities-border.html">
                    Borders
                  </a>
                  <a className="collapse-item" href="utilities-animation.html">
                    Animations
                  </a>
                  <a className="collapse-item" href="utilities-other.html">
                    Other
                  </a>
                </div>
              </div>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" style={{opacity: '0.7', backgroundColor: 'white' }}/>
            {/* Heading */}
            <div className="sidebar-heading">Addons</div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapsePages"
                aria-expanded="true"
                aria-controls="collapsePages"
              >
                <i className="fas fa-fw fa-folder" />
                <span>Pages</span>
              </a>
              <div
                id="collapsePages"
                className="collapse"
                aria-labelledby="headingPages"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Login Screens:</h6>
                  <a className="collapse-item" href="login.html">
                    Login
                  </a>
                  <a className="collapse-item" href="register.html">
                    Register
                  </a>
                  <a className="collapse-item" href="forgot-password.html">
                    Forgot Password
                  </a>
                  <div className="collapse-divider" />
                  <h6 className="collapse-header">Other Pages:</h6>
                  <a className="collapse-item" href="404.html">
                    404 Page
                  </a>
                  <a className="collapse-item" href="blank.html">
                    Blank Page
                  </a>
                </div>
              </div>
            </li>
            {/* Nav Item - Charts */}
            <li className="nav-item">
              <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area" />
                <span>Charts</span>
              </a>
            </li>
            {/* Nav Item - Tables */}
            <li className="nav-item">
              <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-table" />
                <span>Tables</span>
              </a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" style={{opacity: '0.7', backgroundColor: 'white' }}/>
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
              <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>

          </ul>
          {/* End of Sidebar */}
          
        </>
    )
}
