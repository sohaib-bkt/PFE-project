import img from '@Public/assets/images/fashion/product/back/17.jpg';
import img2 from '@Public/assets/images/fashion/product/back/18.jpg';
import SectionStart from "@Components/SectionStart.jsx";
import DetailDesc from '@Components/Detail/DetailDesc.jsx';
import DetailReview from '@Components/Detail/DetailReview.jsx';
import DetailSpec from '@Components/Detail/DetailSpecifiction.jsx';
import DetailSizing from '@Components/Detail/DetailSizing.jsx';
import ProdHome from '@Components/ProdHome.jsx';
import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from "../api/axios";

export default function Detail() {
  const [activeTab, setActiveTab] = useState('desc');
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const scripts = [
        'https://code.jquery.com/jquery-3.6.0.min.js',
        '../assets/js/lazysizes.min.js',
        '../assets/js/slick/slick.js',
        '../assets/js/slick/slick-animation.min.js',
        '../assets/js/slick/custom_slick.js'
    ];

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

    const loadScriptsSequentially = async () => {
        for (let src of scripts) {
            try {
                await loadScript(src);
            } catch (error) {
                console.error(error);
            }
        }
    };

    loadScriptsSequentially();

    return () => {
        // Cleanup
        scripts.forEach(src => {
            const script = document.querySelector(`script[src="${src}"]`);
            if (script) {
                document.body.removeChild(script);
            }
        });
    };
  }, []);
  useEffect(() => {
    axiosClient.get(`http://localhost:8000/api/detail/${id}`)
      .then(response => {
        setProduct(response.data);
        console.log(response.data); 
      })
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);
  

  return (
    <>
      <SectionStart  title="Detail" activeBreadcrumb="Detail" />
      <section>
        <div className="container">
          <div className="row gx-4 gy-5">
            <div className="col-lg-12 col-12">
              <div className="details-items">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-lg-2">
                        <div className="details-image-vertical black-slide rounded">
                          <div>
                            <img
                              src={'../'+product.image}
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </div>
                          <div>
                            <img
                              src={'../'+product.image}
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="details-image-1 ratio_asos">
                          <div>
                            <img
                              src={'../'+product.image}
                              id="zoom_01"
                              className="img-fluid w-100 image_zoom_cls-1 blur-up lazyload"
                              alt=""
                            />
                          </div>
                          <div>
                            <img
                              src={'../'+product.image}
                              id="zoom_02"
                              className="img-fluid w-100 image_zoom_cls-2 blur-up lazyload"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cloth-details-size">
                      <div className="product-count">
                        <ul>
                          <li>
                            <img
                              src="../assets/images/gif/fire.gif"
                              className="img-fluid  lazyload"
                              alt="image"
                            />
                            <span className="p-counter">37</span>
                            <span className="lang">orders in last 24 hours</span>
                          </li>
                          <li>
                            <img
                              src="../assets/images/gif/person.gif"
                              className="img-fluid user_img  lazyload"
                              alt="image"
                            />
                            <span className="p-counter">44</span>
                            <span className="lang">active view this</span>
                          </li>
                        </ul>
                      </div>
                      <div className="details-image-concept">
                        <h2>
                         <b>{product.name}</b>
                        </h2>
                      </div>
                      <div className="label-section">
                        <span className="badge badge-grey-color">#1 Best seller</span>
                        <span className="label-text">in fashion</span>
                      </div>
                      <h3 className="price-detail">
                        ${product.regular_price}

                      </h3>
                      <div className="product-buttons">
                        <a
                          href=""
                          className="btn btn-solid"
                          id="triggerModal"
                        >
                          <i className="fa fa-bookmark fz-16 me-2" />
                          <span>Commande</span>
                        </a>
                      </div>

                      
                      <div className="border-product">
                        <h6 className="product-title d-block">share it</h6>
                        <div className="product-icon">
                          <ul className="product-social">
                            <li>
                              <a href="https://www.facebook.com/">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.google.com/">
                                <i className="fab fa-google-plus-g" />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li className="pe-0">
                              <a href="https://www.google.com/">
                                <i className="fas fa-rss" />
                              </a>
                            </li>
                          </ul>
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
                    <button
                      className={`nav-link ${activeTab === 'desc' ? 'active' : ''}`}
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#desc"
                      type="button"
                      onClick={() => handleClick('desc')}
                    >
                      Description
                    </button>
                    <button
                      className={`nav-link ${activeTab === 'speci' ? 'active' : ''}`}
                      id="nav-speci-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#speci"
                      type="button"
                      onClick={() => handleClick('speci')}
                    >
                      Specifications
                    </button>
                    <button
                      className={`nav-link ${activeTab === 'Sguide' ? 'active' : ''}`}
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#desc"
                      type="button"
                      onClick={() => handleClick('Sguide')}
                    >
                      Sizing Guide
                    </button>
                    <button
                      className={`nav-link ${activeTab === 'review' ? 'active' : ''}`}
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#review"
                      type="button"
                      onClick={() => handleClick('review')}
                    >
                      Review
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <DetailDesc clicked={activeTab === 'desc' ? 'show active' : ''} />
                  <DetailSpec clicked={activeTab === 'speci' ? 'show active' : ''} />
                  <DetailReview clicked={activeTab === 'review' ? 'show active' : ''} />
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
                    <div className="our-product products-c">
                      <ProdHome/>
                      <ProdHome/>
                      <ProdHome/>
                      <ProdHome/>
                      <ProdHome/>
                      <ProdHome/>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
