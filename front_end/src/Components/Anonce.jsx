import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@Css/andrp.module.css';

export default function Anonce() {

    return (
        <div className="container">
            <div className="row">
                <aside className="col-md-3">
                    <div className="card">
                        <article className="filter-group">
                            <header className="card-header">
                                <h6 style={{ fontWeight: 'bold', fontSize: '15px', margin: '10px' }}>Tri </h6>
                            </header>
                            <div className="card-body">
                                <RadioInput label="All Announcement (19)" />
                                <RadioInput label="Accepted (5)" />
                                <RadioInput label="Rejected (5)" />
                                <RadioInput label="Pending (3)" />
                            </div>
                        </article>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="col-md-9">

                    <div className="card" style={{ width: "100%" }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="..." className="card-img-top" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="dropdown" style={{ position: "absolute", top: "10px", right: "10px" }}>

                                        <div className={styles.uniqueDropdown}>
                                            <Link to="#" className={styles.uniqueDropbtn}>
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 24 24">
                                                    <path d="M 9.6679688 2 L 9.1757812 4.5234375 C 8.3550224 4.8338012 7.5961042 5.2674041 6.9296875 5.8144531 L 4.5058594 4.9785156 L 2.1738281 9.0214844 L 4.1132812 10.707031 C 4.0445153 11.128986 4 11.558619 4 12 C 4 12.441381 4.0445153 12.871014 4.1132812 13.292969 L 2.1738281 14.978516 L 4.5058594 19.021484 L 6.9296875 18.185547 C 7.5961042 18.732596 8.3550224 19.166199 9.1757812 19.476562 L 9.6679688 22 L 14.332031 22 L 14.824219 19.476562 C 15.644978 19.166199 16.403896 18.732596 17.070312 18.185547 L 19.494141 19.021484 L 21.826172 14.978516 L 19.886719 13.292969 C 19.955485 12.871014 20 12.441381 20 12 C 20 11.558619 19.955485 11.128986 19.886719 10.707031 L 21.826172 9.0214844 L 19.494141 4.9785156 L 17.070312 5.8144531 C 16.403896 5.2674041 15.644978 4.8338012 14.824219 4.5234375 L 14.332031 2 L 9.6679688 2 z M 12 8 C 14.209 8 16 9.791 16 12 C 16 14.209 14.209 16 12 16 C 9.791 16 8 14.209 8 12 C 8 9.791 9.791 8 12 8 z"></path>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                                    <rect x="0" fill="none" width="24" height="24" />
                                                    <g>
                                                        <path d="M7 10l5 5 5-5" />
                                                    </g>
                                                </svg>
                                            </Link>
                                            <div className={styles.uniqueDropdownContent}>
                                                <ul>
                                                    <li><Link to="/shop/clothes" className="d-block">Delete &nbsp; <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 16 16">
                                                        <path d="M 6.496094 1 C 5.675781 1 5 1.675781 5 2.496094 L 5 3 L 2 3 L 2 4 L 3 4 L 3 12.5 C 3 13.328125 3.671875 14 4.5 14 L 10.5 14 C 11.328125 14 12 13.328125 12 12.5 L 12 4 L 13 4 L 13 3 L 10 3 L 10 2.496094 C 10 1.675781 9.324219 1 8.503906 1 Z M 6.496094 2 L 8.503906 2 C 8.785156 2 9 2.214844 9 2.496094 L 9 3 L 6 3 L 6 2.496094 C 6 2.214844 6.214844 2 6.496094 2 Z M 5 5 L 6 5 L 6 12 L 5 12 Z M 7 5 L 8 5 L 8 12 L 7 12 Z M 9 5 L 10 5 L 10 12 L 9 12 Z"></path>
                                                    </svg></Link></li>
                                                    <li><Link to="/shop/info" className="d-block">Update &nbsp; <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13" height="13" viewBox="0 0 26 26">
                                                        <path d="M 20.09375 0.25 C 19.5 0.246094 18.917969 0.457031 18.46875 0.90625 L 17.46875 1.9375 L 24.0625 8.5625 L 25.0625 7.53125 C 25.964844 6.628906 25.972656 5.164063 25.0625 4.25 L 21.75 0.9375 C 21.292969 0.480469 20.6875 0.253906 20.09375 0.25 Z M 16.34375 2.84375 L 14.78125 4.34375 L 21.65625 11.21875 L 23.25 9.75 Z M 13.78125 5.4375 L 2.96875 16.15625 C 2.71875 16.285156 2.539063 16.511719 2.46875 16.78125 L 0.15625 24.625 C 0.0507813 24.96875 0.144531 25.347656 0.398438 25.601563 C 0.652344 25.855469 1.03125 25.949219 1.375 25.84375 L 9.21875 23.53125 C 9.582031 23.476563 9.882813 23.222656 10 22.875 L 20.65625 12.3125 L 19.1875 10.84375 L 8.25 21.8125 L 3.84375 23.09375 L 2.90625 22.15625 L 4.25 17.5625 L 15.09375 6.75 Z M 16.15625 7.84375 L 5.1875 18.84375 L 6.78125 19.1875 L 7 20.65625 L 18 9.6875 Z"></path>
                                                    </svg></Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <h4 className="card-title">$ Price</h4>
                                    <p className="card-text">
                                        short description
                                    </p>

                                </div>
                                <div >
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    );
}

// Helper component for radio input
const RadioInput = ({ label }) => (
    <div className="form-check">
        <input className="form-check-input" type="radio" />
        <label className="form-check-label">{label}</label>
    </div>
);
