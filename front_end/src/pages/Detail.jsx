import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns';
import axiosClient from '../api/axios';
import HashLoader from "react-spinners/HashLoader";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import userimg from '@Assets/images/user.svg.png';
import img from '@Assets/images/scam.png';
import SectionStart from '@Components/SectionStart';
import DetailDesc from '@Components/Detail/DetailDesc';
import DetailSpec from '@Components/Detail/DetailSpecifiction';
import DetailSizing from '@Components/Detail/DetailSizing';
import Slider from '@Components/Slider';
import Dslider from '@Components/Dslider.jsx';
import Swal from 'sweetalert2';
import UserApi from '../services/api/user/UserApi';

export default function Detail() {

   
    const [activeTab, setActiveTab] = useState('desc');
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [seler, setSeler] = useState({});
    const [user , setUser] = useState({});
    const [timeAgo, setTimeAgo] = useState('');
    const [specifications, setSpecifications] = useState([]);
    const { slug } = useParams();
    useEffect(() => {
        UserApi.getUser().then(response => {
            setUser(response.data);
            
        })
    },[])

    useEffect(() => {
        axiosClient.get(`api/detail/${slug}`)
            .then(response => {
                setProduct(response.data);
                const createdAt = new Date(response.data.created_at);
                setTimeAgo(formatDistanceToNow(createdAt, { addSuffix: true }));
                axiosClient.get(`api/user/${response.data.user_id}`).then(response => {
                    setSeler(response.data);
                    setLoading(false);
                })
                setSpecifications(JSON.parse(response.data.specification));
            });
    }, [slug]);

    useEffect(() => {
        const loadScripts = async () => {
            const scripts = [
                'https://code.jquery.com/jquery-3.6.0.min.js',
                '../assets/js/lazysizes.min.js',
                '../assets/js/slick/slick.js',
                '../assets/js/slick/slick-animation.min.js',
                '../assets/js/slick/custom_slick.js'
            ];

            for (let src of scripts) {
                try {
                    await loadScript(src);
                } catch (error) {
                    console.error(error);
                }
            }
        };

        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve();
                    return;
                }

                const script = document.createElement('script');
                script.src = src;
                script.async = true;

                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Failed to load script ${src}`));

                document.body.appendChild(script);
            });
        };

        loadScripts();

        return () => {
            const scripts = [
                'https://code.jquery.com/jquery-3.6.0.min.js',
                '../assets/js/lazysizes.min.js',
                '../assets/js/slick/slick.js',
                '../assets/js/slick/slick-animation.min.js',
                '../assets/js/slick/custom_slick.js'
            ];
            scripts.forEach(src => {
                const script = document.querySelector(`script[src="${src}"]`);
                if (script) {
                    document.body.removeChild(script);
                }
            });
        };
    }, []);



    const showSwal = () => {
        Swal.fire({
            title: "Attention !",
            html: `
            <div>
                <p>Never send money in advance to the seller via bank transfer or through a money transfer agency when purchasing goods available on the site.</p>
                <h3>Call ${seler.name} Phone</h3><br/>
            </div>
            `,
            imageUrl: img,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
            input: "text",
            inputValue: seler.phone,
            inputAttributes: {
                autocapitalize: "off",
                style: "margin: auto;",
                readOnly: true
            },
            showConfirmButton: false
        });
    };
    
    const reportabuseswal = async () => {
        const { value: formValues } = await Swal.fire({
            title: 'Report Abuse',
            html:
            `<div>
                <h3>Message</h3>
                <textarea id="swal-input-message" class="swal2-textarea" placeholder="Type your message here..." aria-label="Type your message here" rows="2" cols="30"></textarea>
            </div>`,
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input-message').value,
                ];
            },
            showCancelButton: true,
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
            showLoaderOnConfirm: true,
            allowOutsideClick: () => !Swal.isLoading()
        });
    
        if (formValues) {
            const [text] = formValues;
            if (text) {
                axiosClient.post('http://localhost:8000/api/product/report_abuse', {
                    message: text,
                    productId: product.id ,
                    id_reported: product.user_id,
                    id_reporter:user.id
                })
                .then(response => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Report submitted successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
                .catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to submit report. Please try again later.',
                        showConfirmButton: false,
                        timer: 1500 // Close alert after 1.5 seconds
                    });
                });
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'Message is required.',
                    showConfirmButton: false,
                    timer: 1500 
                });
            }
        }
    };
    
          
    const createdDate = new Date(product.created_at);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - createdDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    

    return (
        <>
            <SectionStart title="Detail" activeBreadcrumb="Detail" />
            {loading ? (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
                    <HashLoader color="red" loading={loading} size={80} />
                </div>
            ) : (
                <>
                    <section>
                        <div className="container">
                            <div className="row gx-4 gy-5">
                                <div className="col-lg-12 col-12">
                                    <div className="details-items">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <Dslider images={product.images} image={product.image}></Dslider>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="cloth-details-size">
                                                    <div className="product-count">
                                                        <ul>
                                                            {[...Array(1)].map((_, index) => (
                                                                <li key={index}>
                                                                    <img src={userimg} alt="Profile" style={{ width: '24px', height: '24px', borderRadius: '50%', marginRight: '5px' }} />
                                                                    <span className="lang">
                                                                        <Link to={`/user/${seler.id}/products`} style={{ color: "black", fontFamily: "monospace", fontSize: "16px" }}>{seler.name}</Link>
                                                                    </span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className='d-flex justify-content-between border-product'>
                                                        <div className="price-detail" style={{ marginTop: "0px" , marginBottom: "0px"}}>
                                                           <h3 >{product.name}</h3> 
                                                            <div style={{ color: "grey", fontSize: "12px", marginTop: "8px" , marginBottom: "0px" }}>
                                                                <FontAwesomeIcon icon={faLocationDot} />&nbsp;{seler.city}&nbsp;&nbsp;
                                                                <FontAwesomeIcon icon={faClock} />&nbsp;{diffDays} Days ago
                                                            </div>
                                                        </div>
                                                        <div className="price-detail" style={{ marginTop: "5px" }}>
                                                            <h3>{product.regular_price} DH</h3>
                                                        </div>
                                                    </div>
                                                    <div className=' border-product' style={{ marginTop: "0px" }}>
                                                    <div className="label-section" style={{ marginTop: "0px" }}>
                                                    <span className="badge badge-grey-color" style={{color:"white"}}>{product.category_name}</span>
                                                    <span className="label-text">{product.brand_name}</span>
                                                    </div>
                                                    </div>
                                                   
                                                    <div className="product-buttons">
                                                        <a
                                                            className="btn btn-solid"
                                                            id="triggerModal"
                                                            onClick={showSwal}
                                                            style={{ borderRadius: "8px" }}
                                                        >
                                                            <FontAwesomeIcon icon={faPhone} /> &nbsp;
                                                            <span>Call Seller</span>
                                                        </a>
                                                    </div>
                                                    <div className="border-product">
                                                        <div className=' d-flex justify-content-between'>
                                                            <div className="product-icon">
                                                                <ul className="product-social">
                                                                    <li><a href=""><i className="fab fa-google fa-lg" style={{ color: "#dd4b39" }} /></a></li>
                                                                    <li><a href=""><i className="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }} /></a></li>
                                                                    <li><a href=""><i className="fab fa-twitter fa-lg" style={{ color: "#55acee" }} /></a></li>
                                                                    <li><a href=""><i className="fab fa-whatsapp fa-lg" style={{ color: "#25d366" }} /></a></li>
                                                                </ul>
                                                            </div>
                                                            {user.id && (
                                                                <button
                                                                    type="button"
                                                                    onClick={reportabuseswal}
                                                                    className="btn btn-danger rounded-pill shadow-sm"
                                                                    style={{
                                                                        backgroundColor: "white",
                                                                        color: "#dd4b39",
                                                                        fontFamily: 'monospace',
                                                                        fontSize: "15px",
                                                                        fontWeight: "lighter",
                                                                        padding: '3px 10px 3px 10px'
                                                                    }}
                                                                >
                                                                    <IoIosInformationCircleOutline style={{ fontSize: "18px" }} /> Report abuse
                                                                </button>
                                                            )}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="cloth-review">
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                {['desc', 'speci', product.categorie_product === "VET" && 'Sguide'].filter(Boolean).map((tab, index) => (
                                                    <button
                                                        key={index}
                                                        className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                                                        id={`nav-${tab}-tab`}
                                                        data-bs-toggle="tab"
                                                        data-bs-target={`#${tab}`}
                                                        type="button"
                                                        onClick={() => setActiveTab(tab)}
                                                    >
                                                        {tab === 'desc' && 'Description'}
                                                        {tab === 'speci' && 'Specifications'}
                                                        {tab === 'Sguide' && 'Sizing Guide'}
                                                    </button>
                                                ))}
                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <DetailDesc clicked={activeTab === 'desc' ? 'show active' : ''} description={product.description} />
                                            <DetailSpec clicked={activeTab === 'speci' ? 'show active' : ''} specification={specifications} />
                                            {product.categorie_product === "VET" && <DetailSizing clicked={activeTab === 'Sguide' ? 'show active' : ''} />}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="ratio_asos overflow-hidden pb-5">
                    <div className="px-0 container-fluid p-sm-0">
                        <div className="row m-0">
                        <div className="col-12 p-0">
                            <div className="title-3 text-center">
                            <h2>Other products you may like</h2>
                            </div>
                        </div>
                            <Slider/>
                        </div>
                    </div>
                    </section>
                </>
            )}
        </>
    );
}
