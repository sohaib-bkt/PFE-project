import React, { useEffect } from 'react';
import Prods from '@Components/Prods.jsx';
import ProdHome from '@Components/ProdHome.jsx';
export default function Home() {

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
      <h4>
        Sale <span className="theme-color">35% Off</span>
      </h4>
      <h1>
        New Latest <span>Dresses</span>
      </h1>
      <p>
        BUY ONE GET ONE <span className="theme-color">FREE</span>
      </p>
      <h2>
        $79.00{" "}
        <span className="theme-color">
          <del>$65.00</del>
        </span>
      </h2>
      <p className="poster-details mb-0">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  </div>
  <div className="right-side-contain">
    <div className="social-image">
      <h6>Facebook</h6>
    </div>
    <div className="social-image">
      <h6>Instagram</h6>
    </div>
    <div className="social-image">
      <h6>Twitter</h6>
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
              <i className="far fa-heart" />
            </a>
            <span className="font-dark-30">
              26% <span>OFF</span>
            </span>
          </div>
          <a href="shop-left-sidebar.html" className="contain-banner">
            <div className="banner-content with-big">
              <h2 className="mb-2">New Hoodie</h2>
              <span>BUY ONE GET ONE FREE</span>
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
              <i className="far fa-heart" />
            </a>
            <span className="font-dark-30">
              50% <span>OFF</span>
            </span>
          </div>
          <a href="shop-left-sidebar.html" className="contain-banner">
            <div className="banner-content with-big">
              <h2 className="mb-2">Women Fashion</h2>
              <span>New offer 50% off</span>
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
              <i className="far fa-heart" />
            </a>
            <span className="font-dark-30">
              36% <span>OFF</span>
            </span>
          </div>
          <a href="shop-left-sidebar.html" className="contain-banner">
            <div className="banner-content with-big">
              <h2 className="mb-2">New Jacket</h2>
              <span>BUY ONE GET ONE FREE</span>
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
          <h2>New Arrival</h2>
          <h5 className="theme-color">Our Collection</h5>
        </div>
      </div>
    </div>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n                .r-price {\n                    display: flex;\n                    flex-direction: row;\n                    gap: 20px;\n                }\n\n                .r-price .main-price {\n                    width: 100%;\n                }\n\n                .r-price .rating {\n                    padding-left: auto;\n                }\n\n                .product-style-3.product-style-chair .product-title {\n                    text-align: left;\n                    width: 100%;\n                }\n\n                @media (max-width:600px) {\n\n                    .product-box p,\n                    .product-box a {\n                        text-align: left;\n                    }\n\n                    .product-style-3.product-style-chair .main-price {\n                        text-align: right !important;\n                    }\n                }\n            "
      }}
    />
    <div className="row g-sm-4 g-3">
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
    </div>
  </div>
</section>
<section className="ratio_asos overflow-hidden">
  <div className="container p-sm-0">
    <div className="row m-0">
      <div className="col-12 p-0">
        <div className="title-3 text-center">
          <h2>New Arrival</h2>
          <h5 className="theme-color">Our Collection</h5>
        </div>
      </div>
    </div>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n                .r-price {\n                    display: flex;\n                    flex-direction: row;\n                    gap: 20px;\n                }\n\n                .r-price .main-price {\n                    width: 100%;\n                }\n\n                .r-price .rating {\n                    padding-left: auto;\n                }\n\n                .product-style-3.product-style-chair .product-title {\n                    text-align: left;\n                    width: 100%;\n                }\n\n                @media (max-width:600px) {\n\n                    .product-box p,\n                    .product-box a {\n                        text-align: left;\n                    }\n\n                    .product-style-3.product-style-chair .main-price {\n                        text-align: right !important;\n                    }\n                }\n            "
      }}
    />
    <div className="row g-sm-4 g-3">
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
      <Prods/>
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
          <h2> Top Price</h2>
        </div>
      </div>
      <div className="our-product products-c">
       <ProdHome/>
       <ProdHome/>
       <ProdHome/>
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


</>


     
    )
}
