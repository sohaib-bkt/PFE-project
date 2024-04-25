import img from "@Assets/images/fashion/instagram/4.jpg";
export default function Prods(){
    return (
        <>
        <div className="col-xl-2 col-lg-2 col-6">
        <div className="product-box">
          <div className="img-wrapper">
            <a href="product/details.html">
              <img
                src={img}
                className="w-100 bg-img blur-up lazyload"
                alt=""
              />
            </a>
            <div className="circle-shape" />            
            <div className="cart-wrap">
              <ul>
                <li>
                  <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>                  </a>
                </li>
                <li>
                  <a href="#" className="wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>   
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-style-3 product-style-chair">
            <div className="product-title d-block mb-0">
              <div className="r-price">
                <div className="theme-color">$21.99</div>
                <div className="main-price">
                <p className="font-light mb-sm-2 mb-0">desc</p>
            </div>
              </div>
              <a href="product/details.html" className="font-default">
                <h6>ProdName</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}