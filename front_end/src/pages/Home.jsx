import  { useEffect, useState } from 'react';
import Prods from '@Components/Prods.jsx';
import { Link } from 'react-router-dom';
import axiosClient from '../api/axios';
import Slider from '@Components/Slider.jsx';
import HashLoader from "react-spinners/HashLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShirt , faHouse, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { FaSquareXTwitter ,FaSquareInstagram ,FaSquareFacebook   } from "react-icons/fa6";

  const loadScripts = () => {
    const scripts = [
      'https://code.jquery.com/jquery-3.6.0.min.js',
      './assets/js/lazysizes.min.js',
      './assets/js/script.js',
      './assets/js/slick/slick.js',
      './assets/js/slick/slick-animation.min.js',
      './assets/js/slick/custom_slick.js'
    ];

    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      document.body.appendChild(script);
    });
  };
export default function Home() {
  loadScripts();
  const [clothes, setClothes] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
 // Load scripts when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [clothesResponse, infoResponse] = await Promise.all([
          axiosClient.get('http://localhost:8000/api/clothes'),
          axiosClient.get('http://localhost:8000/api/inf')
        ]);

        setClothes(clothesResponse.data);
        setInfo(infoResponse.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

   

  }, []);


  if (loading) {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
        <HashLoader color="red" loading={loading} size={80} />
      </div>
    );
  }
    return (
        <>
           <section className="pt-0 poster-section">
  <div className="poster-image slider-for custome-arrow classic-arrow">
    <div>
      <img
        src="assets/images/poster/1.png"
        className="img-fluid blur-up lazyload"
        alt=""
      />
    </div>
    <div>
      <img
        src="assets/images/poster/2.png"
        className="img-fluid blur-up lazyload"
        alt=""
      />
    </div>
    <div>
      <img
        src="assets/images/poster/3.png"
        className="img-fluid blur-up lazyload"
        alt=""
      />
    </div>
  </div>
  <div className="slider-nav image-show">
    <div>
    </div>
    <div>
    </div>
  </div>
  <div className="left-side-contain">
    <div className="banner-left">
      <h3>
      Welcome to <span className="theme-color">MoonStore</span>
      </h3>
      <h1>
      <span>Discover </span>New Listings
      </h1>
      <h3>Find everything you need and sell your own items <span className="theme-color">hassle-free.</span>
</h3>
    </div>
  </div>
  <div className="right-side-contain">
    <div className="social-image">
    <a href="https://www.tiktok.com" target="_blank">
    <FaSquareInstagram  style={{width: 40, height: 40 , color: 'black'}}/>

    </a>

    </div>
    <div className="social-image">
      <a href="https://www.facebook.com" target="_blank">
      <FaSquareFacebook  style={{width: 40, height: 40 , color: 'black' , borderRadius: '30%'}}/>
    </a>
    </div>
    <div className="social-image">
    <a href="https://www.twitter.com" target="_blank">
    <FaSquareXTwitter  style={{width: 40, height: 40 , color: 'black'}}/>

    </a>
   </div>
  </div>
</section>
<section className="ratio2_1 banner-style-2">
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-4 col-md-6">
        <div className="collection-banner p-bottom p-center text-center">
          <a href="shop-left-sidebar.html" className="banner-img">
            <img
              src="assets/images/banner/6.jpg"
              className="bg-img blur-up lazyload"
              alt=""
            />
          </a>
          <div className="banner-detail">
            <a href="#" className="heart-wishlist" style={{color:'black'}}>
            <FontAwesomeIcon icon={faShirt} />
        
          </a>
            <span className="font-dark-30">
              <span>NEW</span>
            </span>
          </div>
          <a href="shop-left-sidebar.html" className="contain-banner">
            <div className="banner-content with-big">
              <h2 className="mb-2">Clothes</h2>
              <span>Explore the latest additions</span>
            </div>
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
    <div className="collection-banner p-bottom p-center text-center">
        <a href="shop-left-sidebar.html" className="banner-img">
            <img
                src="assets/images/banner/off.jpg"
                className="bg-img blur-up lazyload"
                alt=""
            />
        </a>
        <div className="banner-detail">
            <a href="#" className="heart-wishlist" style={{color:'black'}}>
            <FontAwesomeIcon icon={faHouse} />
            </a>
            <span className="font-dark-30">
                <span>NEW</span>
            </span>
        </div>
        <a href="shop-left-sidebar.html" className="contain-banner">
            <div className="banner-content with-big">
                <h2 className="mb-2">Apartments</h2>
                <span>Explore the latest additions</span>
            </div>
        </a>
    </div>
</div>

      <div className="col-lg-4">
        <div className="collection-banner p-bottom p-center text-center">
          <a href="shop-left-sidebar.html" className="banner-img">
            <img
              src="assets/images/banner/4.jpg"
              className="bg-img blur-up lazyload"
              alt=""
            />
          </a>
          <div className="banner-detail">
            <a href="#" className="heart-wishlist" style={{color:'black'}}>
            <FontAwesomeIcon icon={faMicrochip} />
           </a>
            <span className="font-dark-30">
              <span>NEW</span>
            </span>
          </div>
          <a href="shop-left-sidebar.html" className="contain-banner">
            <div className="banner-content with-big">
              <h2 className="mb-2">Electonics</h2>
              <span>Explore the latest additions</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="ratio_asos overflow-hidden">
  <div className="container p-sm-0">
    <div className="row m-0">
      <div className="col-12 p-0">
        <div className="title-3 text-center">
          <h2>Our Products</h2>
          <h5 className="theme-color">Our Collection (Clothes)</h5>
          <div className="d-flex justify-content-end mt-3">
          <Link to="/shop/clothes">See More</Link>          
          </div>
        </div>
        
      </div>
    </div>
   
    <div className="row g-sm-4 g-3">
      {clothes.map((prod) => (
        <Prods key={prod.id} prod={prod} />
      ))}
   
    </div>
   
  </div>
</section>

<section className="ratio_asos overflow-hidden">
  <div className="container p-sm-0">
    <div className="row m-0">
      <div className="col-12 p-0">
        <div className="title-3 text-center">
          <h2>Our Products</h2>
          <h5 className="theme-color">Our Collection (Electronics)</h5>
          <div className="d-flex justify-content-end mt-3">
          <Link to="/shop/info">See More</Link>          
          </div>
        </div>
      </div>
    </div>
   
    <div className="row g-sm-4 g-3">
      {info.map((prod) => (
        <Prods key={prod.id} prod={prod} />
      ))}
    
    </div>
  </div>
</section>


   

<section className="category-section ratio_40">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="title title-2 text-center">
          <h2>Our Category</h2>
          <h5 className="text-color">Our collection</h5>
        </div>
      </div>
    </div>
    <div className="row gy-3">
      <div className="col-xxl-2 col-lg-3">
        <div className="category-wrap category-padding category-block theme-bg-color">
          <div>
            <h2 className="light-text">Top</h2>
            <h2 className="top-spacing">Our Top</h2>
            <span>Categories</span>
          </div>
        </div>
      </div>
      <div className="col-xxl-10 col-lg-9">
        <div className="category-wrapper category-slider1 white-arrow category-arrow">
          <div>
            <a
              href="shop-left-sidebar.html"
              className="category-wrap category-padding"
            >
              <img
                src="assets/images/category/1.jpg"
                className="bg-img blur-up lazyload"
                alt="category image"
              />
              <div className="category-content category-text-1">
                <h3 className="theme-color">Shoes</h3>
                <span className="text-dark">Fashion</span>
              </div>
            </a>
          </div>
          <div>
            <a
              href="shop-left-sidebar.html"
              className="category-wrap category-padding"
            >
              <img
                src="assets/images/category/2.jpg"
                className="bg-img blur-up lazyload"
                alt="category image"
              />
              <div className="category-content category-text-1">
                <h3 className="theme-color">Men</h3>
                <span className="text-dark">Fashion</span>
              </div>
            </a>
          </div>
          <div>
            <a
              href="shop-left-sidebar.html"
              className="category-wrap category-padding"
            >
              <img
                src="assets/images/category/3.jpg"
                className="bg-img blur-up lazyload"
                alt="category image"
              />
              <div className="category-content category-text-1">
                <h3 className="theme-color">Jeans</h3>
                <span className="text-dark">Fashion</span>
              </div>
            </a>
          </div>
          <div>
            <a
              href="shop-left-sidebar.html"
              className="category-wrap category-padding"
            >
              <img
                src="assets/images/category/4.jpg"
                className="bg-img blur-up lazyload"
                alt="category image"
              />
              <div className="category-content category-text-1">
                <h3 className="theme-color">Jacket</h3>
                <span className="text-dark">Fashion</span>
              </div>
            </a>
          </div>
          <div>
            <a
              href="shop-left-sidebar.html"
              className="category-wrap category-padding"
            >
              <img
                src="assets/images/category/3.jpg"
                className="bg-img blur-up lazyload"
                alt="category image"
              />
              <div className="category-content category-text-1">
                <h3 className="theme-color">Jeans</h3>
                <span className="text-dark">Fashion</span>
              </div>
            </a>
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
          <h2> Latest Products</h2>
        </div>
      </div>
      

        <Slider />
      
    </div>
  </div>
</section>


</>


     
    )
}
