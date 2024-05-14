import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '@Css/andrp.module.css';
import axiosClient from '../api/axios';
import UserApi from '../services/api/user/UserApi';
import HashLoader from "react-spinners/HashLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function Anonce() {
    const [selectedFilter, setSelectedFilter] = useState('Accepted');
    const [showReject, setShowReject] = useState(true);
    const [showAccept, setShowAccept] = useState(true);
    const [showPending, setShowPending] = useState(true);
    const [acceptedCount, setAcceptedCount] = useState(0);
    const [rejectedCount, setRejectedCount] = useState(0);
    const [pendingCount, setPendingCount] = useState(0);
    const [loading, setLoading] = useState(true);
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
            setLoading(false);
            axiosClient.get('http://127.0.0.1:8000/api/product/count', {
                params: {
                    userId: response.data.id 
                }
            }).then((response) => {
                setAcceptedCount(response.data.approved ?? 0);
                setPendingCount(response.data.pending ?? 0);
                setRejectedCount(response.data.rejected ?? 0);   
                // Set default filter to "Accepted" if count is greater than 0
                if (response.data.approved > 0) {
                    setSelectedFilter('accepted');
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
                <aside className="col-md-2">
                    <FilterGroup selectedFilter={selectedFilter} onChange={handleFilterChange}  acceptedCount={acceptedCount} pendingCount={pendingCount} rejectedCount={rejectedCount} />
                </aside>
                <main className="col-md-9">
                    {selectedFilter === 'accepted' && showAccept && <Acceptdiv onClose={handleAcceptClose} />} 
                    {selectedFilter === 'rejected' && showReject && <Rejectdiv onClose={handleRejectClose} />}
                    {selectedFilter === 'pending' && showPending && <Pendingdiv onClose={handlePendingClose} />}

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
        pending: { label: `Pending (${pendingCount})`, count: pendingCount },

        rejected: { label: `Rejected (${rejectedCount})`, count: rejectedCount },
    };

    return (
        <div className={`card ${styles.filter}`} style={{border: 'none'}}>
            <article className="filter-group">
                <header className="card-header"style={{border: 'none', backgroundColor: 'white'}}>
                    <h6 style={{ fontWeight: 'monospace', fontSize: '15px' }}>Status</h6>
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
const Acceptdiv = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [showAlert, setShowAlert] = useState(true);

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

    const handleAlertClose = () => {
        setShowAlert(false); // Hide the alert when closed
    };

    return (
        <>
            {loading && <p className="alert alert-success">Loading...</p>}
            {!loading && products.length === 0 && <EmptyAnnoucements />}
            {products.length > 0 && showAlert && (
                <div className="alert alert-success" role="alert" style={{ fontFamily: 'Monospace, sans-serif', fontSize: '16px' , width: '80%' , margin: 'auto' , marginBottom: '10px'}}>
                    <button type="button" className={`${styles.closeButton} close`} aria-label="Close" onClick={handleAlertClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>

                    <h2 style={{ fontFamily: 'Monospace, sans-serif', fontSize: '14px', paddingBottom: '10px' }}> {products.length} advertisements Accepted</h2>
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

const Rejectdiv = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [showAlert, setShowAlert] = useState(true); // State to control the visibility of the alert

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

    const handleAlertClose = () => {
        setShowAlert(false); // Hide the alert when closed
    };
    return (
        <>
            {loading && <p className="alert alert-danger">Loading...</p>}
            {!loading && products.length === 0 && <EmptyAnnoucements />}
            {products.length > 0 && showAlert && (
                <div className="alert alert-danger" role="alert" style={{ fontFamily: 'Monospace, sans-serif', fontSize: '16px' , width: '80%' , margin: 'auto' , marginBottom: '10px' }}>
                    <button type="button" className={`${styles.closeButton} close`} aria-label="Close" onClick={handleAlertClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>

                    <h2  style={{ fontFamily: 'Monospace, sans-serif', fontSize: '14px', paddingBottom: '10px' }}>advertisements Rejected</h2>
                    <h3  style={{ fontFamily: 'Monospace, sans-serif', fontSize: '11px' ,paddingBottom: '4px' }}>Your product has been rejected for some reasons , Please refer to the details below for more information:</h3>
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

const Pendingdiv = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [showAlert, setShowAlert] = useState(true); // State to control the visibility of the alert

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

    const handleAlertClose = () => {
        setShowAlert(false); // Hide the alert when closed
    };

    return (
        <>
            {loading && <p className="alert alert-primary">Loading...</p>}
           {!loading && products.length === 0 && <EmptyAnnoucements />}
            {products.length > 0 && showAlert && (
                <div className="alert alert-primary " role="alert" style={{ fontFamily: 'Monospace, sans-serif', fontSize: '16px' , width: '80%' , margin: 'auto' , marginBottom: '10px' }}>
                    <button type="button" className={`${styles.closeButton} close`} aria-label="Close" onClick={handleAlertClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h2 style={{ fontFamily: 'Monospace, sans-serif', fontSize: '14px', paddingBottom: '10px' }}>Advertisements Pending</h2>
                    <h4 style={{ fontFamily: 'Monospace, sans-serif', fontSize: '11px' ,paddingBottom: '4px' }}>The average moderation time for an advertisement is 1 hour  If after this period the advertisement still appears in this tab, contact our customer service </h4>
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
            onChange={() => onChange(value)}
        />
        <label className="form-check-label">{label}</label>
    </div>
);



const AnnouncementCardP = ({ product }) => {
    const createdDate = new Date(product.created_at);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - createdDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return (
        <div className={`${styles.myCard} card ${styles.hoverableCard}`} style={{marginBottom: '20px'}}>
            <div className="row no-gutters">
                <a className="col-md-3" href={`/detail/${product.slug}`} >
                    <img src={`http://localhost:8000/api/images/products/${product.image}`} className={`${styles.image} `} alt="..." />
                </a>
            
                <div className="col-md-9">
                    <div className="card-body d-flex flex-column justify-content-between h-100">
                        <div>
                        <h4 className="card-title">{product.regular_price}</h4>
                        <p className="card-text">{product.name}</p>
                        </div>
                        <span className={`${styles.text} align-self-end`}><FontAwesomeIcon icon={faClock}/>  &nbsp; {diffDays} days ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
};




const AnnouncementCardA = ({ product }) => {
    const createdDate = new Date(product.created_at);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - createdDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return (
    <div className={`${styles.myCard} card ${styles.hoverableCard}`} style={{marginBottom: '20px'}}>
        <div className="row no-gutters">
            <a className="col-md-3" href={`/detail/${product.slug}`} >
                <img src={`http://localhost:8000/api/images/products/${product.image}`} className={`${styles.image} `} alt="..." />
            </a>
            <div className="col-md-9">
                <div className="card-body d-flex flex-column justify-content-between h-100">
                    <div>
                    <DropdownMenu key={product.id} product={product}  />
                    <h4 className="card-title">{product.regular_price}</h4>
                    <p className="card-text">{product.name}</p>
                    </div>
                    <span className={`${styles.text} align-self-end`}><FontAwesomeIcon icon={faClock}/>  &nbsp; {diffDays} days ago</span>
                </div>
            </div>
        </div>
    </div>
    )
}
const AnnouncementCardR = ({ product }) => {
    const createdDate = new Date(product.created_at);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - createdDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const rejectionReason = "Product rejected due to invalid data";
    return(
        <>
    <div className={`${styles.myCard} card ${styles.hoverableCard}`} style={{ borderBottomRightRadius: '0px' }}>
        <div className="row no-gutters">
            <a className="col-md-3" href={`/detail/${product.slug}`} >
                <img src={`http://localhost:8000/api/images/products/${product.image}`} className={`${styles.rej}`} alt="..." />
            </a>
            <div className="col-md-9">
                <div className="card-body d-flex flex-column justify-content-between h-100">
                    <div>
                    <DropdownMenu key={product.id} product={product} isRejected={true}  />
                    <h4 className="card-title">{product.regular_price}</h4>
                    <p className="card-text">{product.name}</p>
                    </div>
                    <span className={`${styles.text} align-self-end`}><FontAwesomeIcon icon={faClock}/>  &nbsp; {diffDays} days ago</span>
                </div>
            </div>
        </div>
    </div>
    <div className={`${styles.myCard} alert alert-danger`} role="alert" style={{ borderTopLeftRadius: '0px', borderTopRightRadius: '0px', display: 'flex', alignItems: 'center' }}>
    <span style={{ marginRight: '10px', fontWeight: 'bold', borderRight: '1px solid black', paddingRight: '10px', height: '100%' }}>Reason</span>
    <span>{rejectionReason}</span>
    </div>
    </>

    )
}


const DropdownMenu = ({ product, isRejected }) => {
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
                  <FontAwesomeIcon icon={faCog} />&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faAngleDown} />

                </a>
                <div className={styles.uniqueDropdownContent}>
                    <ul>
                        <li style={{display: 'block'}}>
                            <Link onClick={deleteProduct} ><FontAwesomeIcon icon={faTrash} /> Delete</Link>
                       </li>

                       {!isRejected && // Render Edit option only if not rejected
                           <li style={{display: 'block'}}>
                               <Link to='/edit-annonce'><FontAwesomeIcon icon={faEdit} /> Edit</Link>
                           </li>
                       }
                    </ul>
                </div>
            </div>
        </div>
    );
};