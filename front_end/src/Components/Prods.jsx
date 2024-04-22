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
                    <i data-feather="eye" />
                  </a>
                </li>
                <li>
                  <a href="#" className="wishlist">
                    <i data-feather="heart" />
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