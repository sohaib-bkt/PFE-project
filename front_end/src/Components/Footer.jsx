import '@Public/assets/css/vendors/font-awesome.css';
import '@Public/assets/css/vendors/bootstrap.css';
import '@Public/assets/css/demo4.css';
import { useEffect } from 'react';
import $ from 'jquery';

export default function Footer() {
    useEffect(() => {
      var contentwidth = $(window).width();
      if (contentwidth < "576") {
          $(".footer-title h5").append(
              '<span class="according-menu"><i class="fas fa-chevron-down"></i></span>'
          );
          $(".footer-title").on("click", function () {
              $(".footer-title")
                  .removeClass("active")
                  .find("span")
                  .replaceWith(
                      '<span class="according-menu"><i class="fas fa-chevron-down"></i></span>'
                  );
              $(".footer-content").slideUp("normal");
              if ($(this).next().is(":hidden") == true) {
                  $(this).addClass("active");
                  $(this)
                      .find("span")
                      .replaceWith(
                          '<span class="according-menu"><i class="fas fa-chevron-up"></i></span>'
                      );
                  $(this).next().slideDown("normal");
              } else {
                  $(this)
                      .find("span")
                      .replaceWith(
                          '<span class="according-menu"><i class="fas fa-chevron-down"></i></span>'
                      );
              }
          });
          $(".footer-content").hide();
      } else {
          $(".footer-content").show();
      }
    },[])
    return (
        <>
           <footer className="footer-sm-space mt-5">
  <div className="main-footer">
    <div className="container">
      <div className="row gy-4">
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="footer-contact">
            <div className="brand-logo">
              <a
                href="#"
                className="footer-logo float-start"
              >
                <img
                  src="../../public/assets/images/logo.png"
                  className="f-logo img-fluid lazyload"
                  alt="logo"
                />
              </a>
            </div>
            <ul className="contact-lists" style={{ clear: "both" }}>
              <li>
                <span>
                  <b>phone:</b>{""}
                  <span className="font-light"> +1 0000000000</span>
                </span>
              </li>
              <li>
                <span>
                  <b>Address:</b>
                  <span className="font-light">
                    {" "}
                    NIT, Faridabad, Haryana, India
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <b>Email:</b>
                  <span className="font-light"> contact@surfsidemedia.in</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <div className="footer-links">
            <div className="footer-title">
              <h3>About us</h3>
            </div>
            <div className="footer-content">
              <ul>
                <li>
                  <a href="#" className="font-dark">
                    Home
                  </a>
                </li>
                <li>
                  <a href="shop.html" className="font-dark">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="about-us.html" className="font-dark">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="font-dark">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="contact-us.html" className="font-dark">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
          <div className="footer-links">
            <div className="footer-title">
              <h3>New Categories</h3>
            </div>
            <div className="footer-content">
              <ul>
                <li>
                  <a href="shop.html" className="font-dark">
                    Latest Shoes
                  </a>
                </li>
                <li>
                  <a href="shop.html" className="font-dark">
                    Branded Jeans
                  </a>
                </li>
                <li>
                  <a href="shop.html" className="font-dark">
                    New Jackets
                  </a>
                </li>
                <li>
                  <a href="shop.html" className="font-dark">
                    Colorfull Hoodies
                  </a>
                </li>
                <li>
                  <a href="shop.html" className="font-dark">
                    Shiner Goggles
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
          <div className="footer-links">
            <div className="footer-title">
              <h3>Get Help</h3>
            </div>
            <div className="footer-content">
              <ul>
                <li>
                  <a href="#" className="font-dark">
                    Your Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="font-dark">
                    Your Account
                  </a>
                </li>
                <li>
                  <a href="#" className="font-dark">
                    Track Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="font-dark">
                    Your Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="font-dark">
                    Shopping FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 d-none d-sm-block">
          <div className="footer-newsletter">
            <h3>Let’s stay in touch</h3>
            <div className="form-newsletter">
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control color-4"
                  placeholder="Your Email Address"
                />
                <span className="input-group-text" id="basic-addon4">
                  <i className="fas fa-arrow-right" />
                </span>
              </div>
              <p className="font-dark mb-0">
                Keep up to date with our latest news and special offers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

        </>
    )
}
