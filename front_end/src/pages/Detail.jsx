import  { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axiosClient from '../api/axios';
import SectionStart from '@Components/SectionStart';
import DetailDesc from '@Components/Detail/DetailDesc';
import DetailSpec from '@Components/Detail/DetailSpecifiction';
import DetailSizing from '@Components/Detail/DetailSizing';
import Slider from '@Components/Slider';
import Dslider from '@Components/Dslider.jsx';
import HashLoader from "react-spinners/HashLoader";
import img from '@Assets/images/scam.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Detail() {
    const [activeTab, setActiveTab] = useState('desc');
    const { slug } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [seler, setSeler] = useState({});

    const handleClick = (tab) => {
        setActiveTab(tab);
    };


    useEffect(() => {
        
        axiosClient.get(`http://localhost:8000/api/detail/${slug}`)
        .then(response => {
            setProduct(response.data);
            axiosClient.get(`http://localhost:8000/api/user/${response.data.user_id}`).then(response => {
                setSeler(response.data);   
                setLoading(false);
            })
           
            
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
    if (loading) {
        return (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
            <HashLoader color="red" loading={loading} size={80} />
          </div>
        );
      }

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
    

    return (
        <>
            <SectionStart title="Detail" activeBreadcrumb="Detail" />
            <section>
                <div className="container">
                    <div className="row gx-4 gy-5">
                        <div className="col-lg-12 col-12">
                            <div className="details-items">
                                <div className="row g-4">
                                    <div className="col-md-6" >
                                     
                                           <Dslider></Dslider>
                                           
                                    </div>
                                    <div className="col-md-6">
                                        <div className="cloth-details-size">
                                       
                                            <div className="product-count">
                                                
                                                <ul>
                                                    {[...Array(1)].map((_, index) => (
                                                        <li key={index}>
                                                           <FontAwesomeIcon icon={faUser} />
                                                            <span className="lang"> <a href="" style={{color:"blue", fontFamily:"monospace"}}>&nbsp;{seler.name}</a></span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="details-image-concept">
                                                <h2>
                                                    {product.name}
                                                </h2>
                                            </div>
                                            <div className="label-section">
                                                <span className="badge badge-grey-color" style={{color:"white"}}>Categorie</span>
                                                <span className="label-text">subcategorie</span>
                                            </div>
                                           
                                            <h3 className="price-detail">
                                                ${product.regular_price}
                                            </h3>
                                            
                                            <div className="product-buttons">
                                                <a
                                                    className="btn btn-solid"
                                                    id="triggerModal"
                                                    onClick={showSwal}
                                                    style={{borderRadius:"8px"}}
                                                >
                                                <FontAwesomeIcon icon={faPhone} /> &nbsp;
                                                    <span>Call Seller</span>
                                                </a>
                                            </div>
                                            <div className="border-product">
                                                <h6 className="product-title d-block">share it</h6>
                                                <div className="product-icon">
                                                    <ul className="product-social">
                                                    <li>
                                                    <a href=""><i className="fab fa-google fa-lg" style={{ color: "#dd4b39" }} /></a>
                                                    </li>
                                                    <li>
                                                   <a href=""> <i className="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }} /></a>
                                                    </li>
                                                    <li>
                                                   <a href=""> <i className="fab fa-twitter fa-lg" style={{ color: "#55acee" }} /></a>
                                                    </li>             
                                                    <li>
                                                   <a href=""> <i className="fab fa-whatsapp fa-lg" style={{ color: "#25d366" }} /></a>
                                                    </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="border-product" style ={{marginTop:"10px"}}>
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
                                        {['desc', 'speci', 'Sguide'].map((tab, index) => (
                                            <button
                                                key={index}
                                                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                                                id={`nav-${tab}-tab`}
                                                data-bs-toggle="tab"
                                                data-bs-target={`#${tab}`}
                                                type="button"
                                                onClick={() => handleClick(tab)}
                                            >
                                                {tab === 'desc' && 'Description'}
                                                {tab === 'speci' && 'Specifications'}
                                                {tab === 'Sguide' && 'Sizing Guide'}
                                            </button>
                                        ))}
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <DetailDesc clicked={activeTab === 'desc' ? 'show active' : ''} />
                                    <DetailSpec clicked={activeTab === 'speci' ? 'show active' : ''} />
                                    <DetailSizing clicked={activeTab === 'Sguide' ? 'show active' : ''} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ratio_asos section-b-space overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="title-3 text-center">Customers Also Bought These</h2>
                            <section className="ratio_asos overflow-hidden pb-5">
                                <div className="px-0 container-fluid p-sm-0">
                                    <div className="row m-0">
                                        <div className="col-12 p-0"></div>
                                        <Slider />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
