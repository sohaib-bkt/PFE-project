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
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z"></path>
</svg>

    </div>
    <div className="social-image">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
</svg>
    </div>
    <div className="social-image">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
<path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"></path>
</svg>    </div>
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
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                    <path d="M 15 2 A 1 1 0 0 0 14.300781 2.2851562 L 3.3925781 11.207031 A 1 1 0 0 0 3.3554688 11.236328 L 3.3183594 11.267578 L 3.3183594 11.269531 A 1 1 0 0 0 3 12 A 1 1 0 0 0 4 13 L 5 13 L 5 24 C 5 25.105 5.895 26 7 26 L 23 26 C 24.105 26 25 25.105 25 24 L 25 13 L 26 13 A 1 1 0 0 0 27 12 A 1 1 0 0 0 26.681641 11.267578 L 26.666016 11.255859 A 1 1 0 0 0 26.597656 11.199219 L 25 9.8925781 L 25 6 C 25 5.448 24.552 5 24 5 L 23 5 C 22.448 5 22 5.448 22 6 L 22 7.4394531 L 15.677734 2.2675781 A 1 1 0 0 0 15 2 z M 18 15 L 22 15 L 22 23 L 18 23 L 18 15 z"></path>
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
              <i className="far fa-heart" />
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
          <h2>New Arrival</h2>
          <h5 className="theme-color">Our Collection</h5>
          <div className="d-flex justify-content-end mt-3">
          <a href="#">See More</a>
          </div>
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
