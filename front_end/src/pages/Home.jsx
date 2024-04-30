import  { useEffect, useState } from 'react';
import Prods from '@Components/Prods.jsx';
import { Link } from 'react-router-dom';
import axiosClient from '../api/axios';
import Slider from '@Components/Slider.jsx';

export default function Home() {
  const [clothes, setClothes] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ clothesResponse, infoResponse] = await Promise.all([

          axiosClient.get('http://localhost:8000/api/clothes'),
          axiosClient.get('http://localhost:8000/api/inf')
        ]);

        setClothes(clothesResponse.data);
        setInfo(infoResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const scripts = [
      'https://code.jquery.com/jquery-3.6.0.min.js',
      './assets/js/lazysizes.min.js',
      './assets/js/script.js',
      './assets/js/slick/slick.js',
      './assets/js/slick/slick-animation.min.js',
      './assets/js/slick/custom_slick.js'
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
    return (
        <>
           <section className="pt-0 poster-section">
  <div className="poster-image slider-for custome-arrow classic-arrow">
    <div>
      <img
        src="assets/images/furniture-images/poster/1.png"
        className="img-fluid blur-up lazyload"
        alt=""
      />
    </div>
    <div>
      <img
        src="assets/images/furniture-images/poster/2.png"
        className="img-fluid blur-up lazyload"
        alt=""
      />
    </div>
    <div>
      <img
        src="assets/images/furniture-images/poster/3.png"
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
      <h3>      Find everything you need and sell your own items <span className="theme-color">hassle-free.</span>
</h3>
    </div>
  </div>
  <div className="right-side-contain">
    <div className="social-image">
    <a href="https://www.tiktok.com" target="_blank">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={50}
      height={50}
      viewBox="0 0 30 30"
    >
      <path d="M24 4H6a2 2 0 00-2 2v18a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zm-1.311 9.474a4.27 4.27 0 01-3.967-1.911v6.577a4.861 4.861 0 11-4.861-4.862c.102 0 .201.009.3.015v2.396c-.1-.012-.197-.03-.3-.03a2.481 2.481 0 000 4.962c1.371 0 2.581-1.08 2.581-2.45l.024-11.17h2.289a4.268 4.268 0 003.934 3.811v2.662z" />
    </svg>
    </a>

    </div>
    <div className="social-image">
      <a href="https://www.facebook.com" target="_blank">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={50}
      height={50}
      viewBox="0 0 30 30"

    >
      <path d="M24 4H6a2 2 0 00-2 2v18a2 2 0 002 2h10v-9h-3v-3h3v-1.611C16 9.339 17.486 8 20.021 8c1.214 0 1.856.09 2.16.131V11h-1.729C19.376 11 19 11.568 19 12.718V14h3.154l-.428 3H19v9h5a2 2 0 002-2V6a2 2 0 00-2-2z" />
    </svg>
    </a>
    </div>
    <div className="social-image">
    <a href="https://www.twitter.com" target="_blank">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={50}
      height={50}
      viewBox="0 0 30 30"

    >
      <path d="M6 4a2 2 0 00-2 2v18a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2H6zm2.648 5h4.612l2.691 3.848L19.281 9h1.451l-4.128 4.781L21.654 21h-4.611l-2.986-4.27L10.369 21H8.895l4.505-5.205L8.648 9zm2.23 1.184l6.755 9.627h1.789l-6.756-9.627h-1.787z" />
    </svg>
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
              src="assets/images/fashion/banner/6.jpg"
              className="bg-img blur-up lazyload"
              alt=""
            />
          </a>
          <div className="banner-detail">
            <a href="#" className="heart-wishlist">
            <svg
      width={20}
      height={20}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <path d="M40.7 20.4l-4-3.9V43H11.3V16.5l-4 3.9L1 14.1 9.2 5H19a5.2 5.2 0 0010 0h9.8l8.2 9.1z" />
    </svg>          
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
                src="assets/images/fashion/banner/off.jpg"
                className="bg-img blur-up lazyload"
                alt=""
            />
        </a>
        <div className="banner-detail">
            <a href="#" className="heart-wishlist">
            <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={20}
      height={20}
      viewBox="0 0 30 30"
  
    >
      <path d="M15 2a1 1 0 00-.7.285L3.394 11.207a1 1 0 00-.038.03l-.037.03v.003A1 1 0 003 12a1 1 0 001 1h1v11a2 2 0 002 2h16a2 2 0 002-2V13h1a1 1 0 001-1 1 1 0 00-.318-.732l-.016-.012a1 1 0 00-.068-.057L25 9.893V6a1 1 0 00-1-1h-1a1 1 0 00-1 1v1.44l-6.322-5.172A1 1 0 0015 2zm3 13h4v8h-4v-8z" />
    </svg>
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
              src="assets/images/fashion/banner/4.jpg"
              className="bg-img blur-up lazyload"
              alt=""
            />
          </a>
          <div className="banner-detail">
            <a href="#" className="heart-wishlist">
            <svg
      viewBox="0 0 48 48"
      width={20}
      height={20}
      xmlns="http://www.w3.org/2000/svg"
   
    >
      <path d="M44 18v-4H34V4h-4v10h-4V4h-4v10h-4V4h-4v10H4v4h10v4H4v4h10v4H4v4h10v10h4V34h4v10h4V34h4v10h4V34h10v-4H34v-4h10v-4H34v-4h10z" />
      <path d="M8 12v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4H12c-2.2 0-4 1.8-4 4z" />
      <path
        fill="#fff"
        d="M31 31H17c-1.1 0-2-.9-2-2V19c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2z"
      />
    </svg>              </a>
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
                src="assets/images/fashion/category/1.jpg"
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
                src="assets/images/fashion/category/2.jpg"
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
                src="assets/images/fashion/category/3.jpg"
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
                src="assets/images/fashion/category/4.jpg"
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
                src="assets/images/fashion/category/3.jpg"
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
