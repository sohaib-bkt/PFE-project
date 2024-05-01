import { useEffect, useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import styles from '@Css/andrp.module.css';
import img from '@Assets/images/newletter-icon.png';
import axiosClient from '../api/axios';
import UserApi from '../services/api/user/UserApi';
import HashLoader from "react-spinners/HashLoader";

export default function Anonce() {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [showReject, setShowReject] = useState(true);
    const [showAccept, setShowAccept] = useState(true);
    const [showPending, setShowPending] = useState(true);
    const [pendingCount, setPendingCount] = useState(0);
    const [rejectedCount, setRejectedCount] = useState(0);
    const [acceptedCount, setAcceptedCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    
    const handleRejectClose = () => {
        setShowReject(false);
    };

    const handleAcceptClose = () => {
        setShowAccept(false);
    };

    const handlePendingClose = () => {
        setShowPending(false);
    };

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    useEffect(() => {
        UserApi.getUser().then((response) => {
            setUser(response.data);
            axiosClient.get('http://127.0.0.1:8000/api/product/count', {
                params: {
                    userId: response.data.id 
                }
            }).then((response) => {
                setAcceptedCount(response.data?.approved ?? 0);
                setPendingCount(response.data.pending ?? 0);
                setRejectedCount(response.data.rejected ?? 0);   

                setLoading(false);

                // Set default filter based on counts
                if (response.data.pending > 0) {
                    setSelectedFilter('pending');
                } else if (response.data.approved > 0) {
                    setSelectedFilter('accepted');
                } else if (response.data.rejected > 0) {
                    setSelectedFilter('rejected');
                }
            });
        });
    }, []);
    if (loading) {
        return     <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center' ,zIndex: 999 }}>
        <HashLoader color="red" loading={loading} size={80} />
      </div>
    }
    return (
        <div className="container">
            <div className="row">
                <aside className="col-md-3">
                    <FilterGroup selectedFilter={selectedFilter} onChange={handleFilterChange} pendingCount={pendingCount} acceptedCount={acceptedCount} rejectedCount={rejectedCount} />
                </aside>
                <main className="col-md-9">
                    {selectedFilter === 'pending' && showPending && <Pendingdiv onClose={handlePendingClose} />}
                    {selectedFilter === 'rejected' && showReject && <Rejectdiv onClose={handleRejectClose} />}
                    {selectedFilter === 'accepted' && showAccept && <Acceptdiv onClose={handleAcceptClose} />}
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
                <Link to={"/ajouter-annonce"} className="btn btn-warning mt-4">
                Post an ad      
               </Link>
              </div>
    </div>
)

const FilterGroup = ({ selectedFilter, onChange, pendingCount, acceptedCount, rejectedCount }) => {
    const announcements = {
        
        accepted: { label: `Accepted (${acceptedCount})`, count: acceptedCount },
        rejected: { label: `Rejected (${rejectedCount})`, count: rejectedCount },
        pending: { label: `Pending (${pendingCount})`, count: pendingCount },
    };

    return (
        <div className={`card ${styles.filter}`}>
            <article className="filter-group">
                <header className="card-header">
                    <h6 style={{ fontWeight: 'bold', fontSize: '15px', margin: '10px' }}>Tri</h6>
                </header>
                <div className="card-body">
                    {Object.keys(announcements).map(key => (
                        <RadioInput
                            key={key}
                            label={`${announcements[key].label}`}
                            value={key}
                            selectedFilter={selectedFilter}
                            onChange={onChange}
                        />
                    ))}
                </div>
            </article>
        </div>
    );
}
const Acceptdiv = ({ onClose }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        UserApi.getUser().then((response) => {
            axiosClient.get('http://127.0.0.1:8000/api/product/getaccepted', {
                params: {
                    userId: response.data.id
                }
            }).then((response) => {
                setProducts(response.data);
                setLoading(false);
            });
        });
    }, []);

    return (
        <>
            {loading && <p className='text-center alert alert-success'>Loading...</p>}
            {!loading && products.length === 0 && <EmptyAnnoucements />}
            {!loading && products.length > 0 && (
                <div className="alert alert-success" role="alert" style={{ fontFamily: 'Monospace, sans-serif', fontSize: '16px' }}>
                    <button type="button" className={`${styles.closeButton} close`} aria-label="Close" onClick={onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>

                    <h2 style={{ fontFamily: 'Monospace, sans-serif', fontSize: '24px', paddingBottom: '20px' }}>advertisement Accepted</h2>
                    <h3 style={{ padding: '5px' }}>Your product has been accepted</h3>
                </div>
            )}
            {!loading && (
                <div>
                    {products.map((product) => (
                        <AnnouncementCardA key={product.id} product={product} />
                    ))}
                </div>
            )}
        </>
    );
};

const Rejectdiv = ({ onClose }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        UserApi.getUser().then((response) => {
            axiosClient.get('http://127.0.0.1:8000/api/product/getrejected', {
                params: {
                    userId: response.data.id
                }
            }).then((response) => {
                setProducts(response.data);
                setLoading(false);
            });
        });
    }, []);

    return (
        <>
            {loading && <p className='text-center alert alert-danger'>Loading...</p>}
            {!loading && products.length === 0 && <EmptyAnnoucements />}
            {!loading && products.length > 0 && (
                <div className="alert alert-danger" role="alert" style={{ fontFamily: 'Monospace, sans-serif', fontSize: '16px' }}>
                    <button type="button" className={`${styles.closeButton} close`} aria-label="Close" onClick={onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>

                    <h2 style={{ fontFamily: 'Monospace, sans-serif', fontSize: '24px', paddingBottom: '20px' }}>advertisement Rejected</h2>
                    <h3 style={{ padding: '5px' }}>Your product has been rejected for some reasons</h3>
                    <h3 style={{ padding: '5px' }}>Please refer to the details below for more information:</h3>
                </div>
            )}
            {!loading && (
                <div>
                    {products.map((product) => (
                        <AnnouncementCardR key={product.id} product={product} />
                    ))}
                </div>
            )}
        </>
    );
};


const Pendingdiv = ({ onClose }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        UserApi.getUser().then((response) => {
            axiosClient.get('http://127.0.0.1:8000/api/product/getpending', {
                params: {
                    userId: response.data.id
                }
            }).then((response) => {
                setProducts(response.data);
                setLoading(false); 
            });
        });
    }, []);

    return (
        <>
            {loading && <p className='text-center alert alert-primary'>Loading...</p>}
            {!loading && products.length === 0 && <EmptyAnnoucements />}
            {!loading && products.length > 0 && (
                <div className="alert alert-primary" role="alert" style={{ fontFamily: 'Monospace, sans-serif', fontSize: '16px' }}>
                    <button type="button" className={`${styles.closeButton} close`} aria-label="Close" onClick={onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h2 style={{ fontFamily: 'Monospace, sans-serif', fontSize: '24px', paddingBottom: '20px' }}>Advertisement Pending</h2>
                    <h3 style={{ padding: '5px' }}>The average moderation time for an advertisement is 1 hour. </h3>
                    <h3 style={{ padding: '5px' }}>If after this period the advertisement still appears in this tab, contact our customer service</h3>
                </div>
            )}
            {!loading && (
                <div>
                    {products.map((product) => (
                        <AnnouncementCardP key={product.id} product={product} />
                    ))}
                </div>
            )}
        </>
    );
};




const RadioInput = ({ label, value, selectedFilter, onChange }) => (
    <div className="form-check">
        <input
            className="form-check-input"
            type="radio"
            value={value}
            checked={selectedFilter === value}
            defaultChecked={selectedFilter === value} // Add this line
            onChange={() => onChange(value)}
        />
        <label className="form-check-label">{label}</label>
    </div>
);


const AnnouncementCardP = ({ product }) => (
    <div className={`${styles.myCard} card ${styles.hoverableCard}`}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={img} className={`${styles.image} `} alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <DropdownMenu key={product.id} product={product}  />
                    <h4 className="card-title">{product.regular_price}</h4>
                    <p className="card-text">{product.description}</p>
                </div>
                <div className="announcement-footer" style={{ position: "absolute", bottom: "10px", right: "10px" }}>
                    <span className={`${styles.text}`}>{product.created_at} &nbsp; </span>
                   
                </div>

            </div>
        </div>
    </div>
);
const AnnouncementCardA = ({ product }) => (
    <div className={`${styles.myCard} card ${styles.hoverableCard}`}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={img} className={`${styles.image} `} alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    
                    <h4 className="card-title">{product.regular_price}</h4>
                    <p className="card-text">{product.description}</p>
                </div>
                <div className="announcement-footer" style={{ position: "absolute", bottom: "10px", right: "10px" }}>
                    <span className={`${styles.text}`}>{product.created_at} &nbsp; </span>
                   
                </div>

            </div>
        </div>
    </div>
);
const AnnouncementCardR = ({ product }) => (
    <div className={`${styles.myCard} card ${styles.hoverableCard}`}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={img} className={`${styles.image}`} alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    
                    <h4 className="card-title">{product.regular_price}</h4>
                    <p className="card-text">{product.description}</p>
                </div>
                <div className="announcement-footer" style={{ position: "absolute", bottom: "10px", right: "10px" }}>
                    <span className={`${styles.text}`}>{product.created_at} &nbsp; </span>
                   
                </div>
                <div className={`announcement-footer  ${styles.announcementDiv}`} style={{ position: "absolute", bottom: "0px"}}>
                    <div className={`alert alert-danger ${styles.announcementFooter}`} role="alert" style={{ fontFamily: 'Monospace, sans-serif', fontSize: '16px' , borderRadius: '17px'}}>
                        <h3>sir tl3ab</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


const DropdownMenu = ({ product }) => {
    const deleteProduct = () => {
        axiosClient.get(`http://127.0.0.1:8000/api/product/deleteAnnonce/${product.id}`)
            .then(() => {
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error deleting product:', error);
            });
    };
    


    return (
        <div className="dropdown" style={{ position: "absolute", top: "10px", right: "10px" }}>
            <div className={styles.uniqueDropdown}>
                <a  className={styles.uniqueDropbtn} >
                    <svg className="av-icon" height={19} width={19} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="Settings3LineTitleID" style={{ fill: "rgb(74, 74, 74)", stroke: "rgb(74, 74, 74)", strokeWidth: 0 }}>
                        <path d="M3.34 17a10.018 10.018 0 01-.978-2.326 3 3 0 00.002-5.347A9.99 9.99 0 014.865 4.99a3 3 0 004.631-2.674 9.99 9.99 0 015.007.002 3 3 0 004.632 2.672A9.99 9.99 0 0120.66 7c.433.749.757 1.53.978 2.326a3 3 0 00-.002 5.347 9.99 9.99 0 01-2.501 4.337 3 3 0 00-4.631 2.674 9.99 9.99 0 01-5.007-.002 3 3 0 00-4.632-2.672A10.018 10.018 0 013.34 17zm5.66.196a4.993 4.993 0 012.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0115 17.197a4.993 4.993 0 013.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0118 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 00-.75-1.298A4.993 4.993 0 0115 6.804a4.993 4.993 0 01-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 019 6.803a4.993 4.993 0 01-3.525.565 7.99 7.99 0 00-.748 1.298A4.993 4.993 0 016 12a4.99 4.99 0 01-1.273 3.334a8.126 8.126 0 00.75 1.298A4.993 4.993 0 019 17.196zM12 15a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z" />
                    </svg>
                    <svg className="av-icon sc-4g43f0-2 cFmdeh" height={19} width={19} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="ChevronDownTitleID" style={{ fill: "rgb(74, 74, 74)", stroke: "rgb(74, 74, 74)", strokeWidth: 0 }}> <path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42z" /></svg>
                </a>
                <div className={styles.uniqueDropdownContent}>
                    <ul>
                        <li><a onClick={deleteProduct} className="d-block" style={{ cursor: "pointer" }}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="15" viewBox="0 0 16 16"><path d="M 6.496094 1 C 5.675781 1 5 1.675781 5 2.496094 L 5 3 L 2 3 L 2 4 L 3 4 L 3 12.5 C 3 13.328125 3.671875 14 4.5 14 L 10.5 14 C 11.328125 14 12 13.328125 12 12.5 L 12 4 L 13 4 L 13 3 L 10 3 L 10 2.496094 C 10 1.675781 9.324219 1 8.503906 1 Z M 6.496094 2 L 8.503906 2 C 8.785156 2 9 2.214844 9 2.496094 L 9 3 L 6 3 L 6 2.496094 C 6 2.214844 6.214844 2 6.496094 2 Z M 5 5 L 6 5 L 6 12 L 5 12 Z M 7 5 L 8 5 L 8 12 L 7 12 Z M 9 5 L 10 5 L 10 12 L 9 12 Z"></path> </svg> Delete</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

