import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '@Css/andrp.module.css';
import img from '@Assets/images/newletter-icon.png';


// Main component
export default function Anonce() {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [showReject, setShowReject] = useState(true);
    const [showPending, setShowPending] = useState(true);

    const handleRejectClose = () => {
        setShowReject(false);
    };

    const handlePendingClose = () => {
        setShowPending(false);
    };

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    return (
        <div className="container">
            <div className="row">
                <aside className="col-md-3">
                    <FilterGroup selectedFilter={selectedFilter} onChange={handleFilterChange} />
                </aside>
                <main className="col-md-9">
                    {selectedFilter === 'pending' && showPending && <Pendingdiv onClose={handlePendingClose} />}
                    {selectedFilter === 'rejected' && showReject && <Rejectdiv onClose={handleRejectClose} />}
                    <EmptyAnnoucements/>
                    <AnnouncementCard/>
                </main>
            </div>
        </div>
    );
}
const EmptyAnnoucements = () => (
    <div className="row" style={{ marginTop: '40px' }}>
              <div className="col-md-12 text-center">
                <h2>You have something to sell ?</h2>
                <h5 className="mt-3">Post your ad for free</h5>
                <a href="{{route('shop.index')}}" className="btn btn-warning mt-4">
                Post an ad      
               </a>
              </div>
    </div>
)
// Filter group component
const FilterGroup = ({ selectedFilter, onChange }) => (
    <div className={`card ${styles.filter}`}>
        <article className="filter-group">
            <header className="card-header">
                <h6 style={{ fontWeight: 'bold', fontSize: '15px', margin: '10px' }}>Tri</h6>
            </header>
            <div className="card-body">
                <RadioInput label="All Announcement (19)" value="all" selectedFilter={selectedFilter} onChange={onChange} />
                <RadioInput label="Accepted (5)" value="accepted" selectedFilter={selectedFilter} onChange={onChange} />
                <RadioInput label="Rejected (5)" value="rejected" selectedFilter={selectedFilter} onChange={onChange} />
                <RadioInput label="Pending (3)" value="pending" selectedFilter={selectedFilter} onChange={onChange} />
            </div>
        </article>
    </div>
);

const Rejectdiv = ({ onClose }) => (
    <div className="alert alert-danger" role="alert" style={{ fontFamily: 'Monospace, sans-serif', fontSize: '16px' }}>
        <button type="button" className={`${styles.closeButton} close`} aria-label="Close" onClick={onClose}>
            <span aria-hidden="true">&times;</span>
        </button>

        <h2 style={{ fontFamily: 'Monospace, sans-serif', fontSize: '24px', paddingBottom: '20px' }}>advertisement Rejected</h2>
        <h3 style={{ padding: '5px' }}>Your product has been rejected for some reasons</h3>
        <h3 style={{ padding: '5px' }}>Please refer to the details below for more information:</h3>
    </div>
);

const Pendingdiv = ({ onClose }) => (
    <div className="alert alert-primary" role="alert" style={{ fontFamily: 'Monospace, sans-serif', fontSize: '16px' }}>
        <button type="button" className={`${styles.closeButton} close`} aria-label="Close" onClick={onClose}>
            <span aria-hidden="true">&times;</span>
        </button>
        <h2 style={{ fontFamily: 'Monospace, sans-serif', fontSize: '24px', paddingBottom: '20px' }}>Advertisement Pending</h2>
        <h3 style={{ padding: '5px' }}>The average moderation time for an advertisement is 1 hour. </h3>
        <h3 style={{ padding: '5px' }}>If after this period the advertisement still appears in this tab ,contact our customer service</h3>
    </div>
);

// Radio input component
const RadioInput = ({ label, value, selectedFilter, onChange }) => (
    <div className="form-check">
        <input
            className="form-check-input"
            type="radio"
            value={value}
            checked={selectedFilter === value}
            onChange={() => onChange(value)}
        />
        <label className="form-check-label">{label}</label>
    </div>
);


// Announcement card component
const AnnouncementCard = () => (
    <div className={`${styles.myCard} card ${styles.hoverableCard}`}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={img} className={`${styles.image} `} alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <DropdownMenu />
                    <h4 className="card-title">$ 99.99</h4>
                    <p className="card-text">short description</p>
                </div>
                <div className="announcement-footer" style={{ position: "absolute", bottom: "10px", right: "10px" }}>
                    <span className={`${styles.text}`}> il y a 18 minutes &nbsp; </span>
                    <span className={`${styles.text}`}> Tanger</span>
                </div>
                <div className={`announcement-footer  ${styles.announcementDiv}`} style={{ position: "absolute", bottom: "0px"}}>
            <div className={`alert alert-danger ${styles.announcementFooter}`} role="alert" style={{ fontFamily: 'Monospace, sans-serif', fontSize: '16px' , borderRadius: '17px'}}>
            <h3>Detail of rejection</h3>
        </div>
            </div>
            </div>
        </div>
    </div>
);

// Dropdown menu component
const DropdownMenu = () => (
    <div className="dropdown" style={{ position: "absolute", top: "10px", right: "10px" }}>
        <div className={styles.uniqueDropdown}>
            <Link to="#" className={styles.uniqueDropbtn}>
                <svg className="av-icon" height={19} width={19} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="Settings3LineTitleID" style={{ fill: "rgb(74, 74, 74)", stroke: "rgb(74, 74, 74)", strokeWidth: 0 }}>
                    <path d="M3.34 17a10.018 10.018 0 01-.978-2.326 3 3 0 00.002-5.347A9.99 9.99 0 014.865 4.99a3 3 0 004.631-2.674 9.99 9.99 0 015.007.002 3 3 0 004.632 2.672A9.99 9.99 0 0120.66 7c.433.749.757 1.53.978 2.326a3 3 0 00-.002 5.347 9.99 9.99 0 01-2.501 4.337 3 3 0 00-4.631 2.674 9.99 9.99 0 01-5.007-.002 3 3 0 00-4.632-2.672A10.018 10.018 0 013.34 17zm5.66.196a4.993 4.993 0 012.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0115 17.197a4.993 4.993 0 013.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0118 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 00-.75-1.298A4.993 4.993 0 0115 6.804a4.993 4.993 0 01-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 019 6.803a4.993 4.993 0 01-3.525.565 7.99 7.99 0 00-.748 1.298A4.993 4.993 0 016 12a4.99 4.99 0 01-1.273 3.334a8.126 8.126 0 00.75 1.298A4.993 4.993 0 019 17.196zM12 15a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                <svg className="av-icon sc-4g43f0-2 cFmdeh" height={19} width={19} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="ChevronDownTitleID" style={{ fill: "rgb(74, 74, 74)", stroke: "rgb(74, 74, 74)", strokeWidth: 0 }}> <path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42z" /></svg>
            </Link>
            <div className={styles.uniqueDropdownContent}>
                <ul>
                    <li><Link to="/shop/clothes" className="d-block"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="15" viewBox="0 0 16 16"><path d="M 6.496094 1 C 5.675781 1 5 1.675781 5 2.496094 L 5 3 L 2 3 L 2 4 L 3 4 L 3 12.5 C 3 13.328125 3.671875 14 4.5 14 L 10.5 14 C 11.328125 14 12 13.328125 12 12.5 L 12 4 L 13 4 L 13 3 L 10 3 L 10 2.496094 C 10 1.675781 9.324219 1 8.503906 1 Z M 6.496094 2 L 8.503906 2 C 8.785156 2 9 2.214844 9 2.496094 L 9 3 L 6 3 L 6 2.496094 C 6 2.214844 6.214844 2 6.496094 2 Z M 5 5 L 6 5 L 6 12 L 5 12 Z M 7 5 L 8 5 L 8 12 L 7 12 Z M 9 5 L 10 5 L 10 12 L 9 12 Z"></path> </svg> Delete</Link></li>
                    <li><Link to="/shop/info" className="d-block"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="15" viewBox="0 0 26 26"><path d="M 20.09375 0.25 C 19.5 0.246094 18.917969 0.457031 18.46875 0.90625 L 17.46875 1.9375 L 24.0625 8.5625 L 25.0625 7.53125 C 25.964844 6.628906 25.972656 5.164063 25.0625 4.25 L 21.75 0.9375 C 21.292969 0.480469 20.6875 0.253906 20.09375 0.25 Z M 16.34375 2.84375 L 14.78125 4.34375 L 21.65625 11.21875 L 23.25 9.75 Z M 13.78125 5.4375 L 2.96875 16.15625 C 2.71875 16.285156 2.539063 16.511719 2.46875 16.78125 L 0.15625 24.625 C 0.0507813 24.96875 0.144531 25.347656 0.398438 25.601563 C 0.652344 25.855469 1.03125 25.949219 1.375 25.84375 L 9.21875 23.53125 C 9.582031 23.476563 9.882813 23.222656 10 22.875 L 20.65625 12.3125 L 19.1875 10.84375 L 8.25 21.8125 L 3.84375 23.09375 L 2.90625 22.15625 L 4.25 17.5625 L 15.09375 6.75 Z M 16.15625 7.84375 L 5.1875 18.84375 L 6.78125 19.1875 L 7 20.65625 L 18 9.6875 Z"></path></svg> Update</Link></li>
                </ul>
            </div>
        </div>
    </div>
);
