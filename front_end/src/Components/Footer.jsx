import { Link } from 'react-router-dom';
import TapToTop from './TaptoTop';
import logo from '../../public/assets/images/logo.png';

export default function Footer() {
    return (
        <footer className="footer-sm-space mt-5">
            <div className="main-footer">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-contact">
                                <div className="brand-logo">
                                    <Link to="/" className="footer-logo float-start">
                                        <img src={logo} className="f-logo img-fluid lazyload" alt="logo" />
                                    </Link>
                                </div>
                       
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="footer-links">
                                <div className="footer-title"><h3>Pages</h3></div>
                                <div className="footer-content">
                            <ul>
                                <li>
                                    <Link to="/" className="font-dark">Home</Link>
                                    <span className="link-space">&nbsp;&nbsp;|&nbsp;</span> {/* Add space between links */}
                                    <Link to="/shop/clothes" className="font-dark">Shop</Link>
                                </li>
                                <li>
                                    <Link to="/about-us" className="font-dark">About</Link>
                                    <span className="link-space"> &nbsp;&nbsp;|&nbsp;</span> {/* Add space between links */}
                                    <Link to="/blog" className="font-dark">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/contact-us" className="font-dark">Contact</Link>
                                </li>
                            </ul>
                        </div>

                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="footer-links">
                                <div className="footer-title"><h3>Contact</h3></div>
                                <div className="footer-content">
                                    <ul>
                                        <li><b>Phone:</b><span className="font-light">&nbsp; +212 6246252</span></li>
                                        <li><b>Address:</b><span className="font-light">&nbsp; Kenitra, Maroc</span></li>
                                        <li><b>Email:</b><span className="font-light">&nbsp; MoonStore@gmail.com</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 d-none d-sm-block">
                            <div className="footer-newsletter">
                                <h3>Let’s stay in touch</h3>
                                <div className="form-newsletter">
                                    <div className="input-group mb-4">
                                        <input type="text" className="form-control color-4" placeholder="Your Email Address" />
                                        <span className="input-group-text" id="basic-addon4"><i className="fas fa-arrow-right" /></span>
                                    </div>
                                    <p className="font-dark mb-0">Keep up to date with our latest news.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TapToTop />
        </footer>
    );
}
