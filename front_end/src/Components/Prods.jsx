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
            <span className="background-text">Furniture</span>
            <div className="label-block">
              <span className="label label-theme">30% Off</span>
            </div>
            <div className="cart-wrap">
              <ul>
                <li>
                  <a href="#" className="addtocart-btn">
                    <i data-feather="shopping-cart" />
                  </a>
                </li>
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
                <div className="theme-color">$21</div>
                <div className="main-price">
                  <ul className="rating mb-1 mt-0">
                    <li>
                      <i className="fas fa-star theme-color" />
                    </li>
                    <li>
                      <i className="fas fa-star theme-color" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-light mb-sm-2 mb-0">Qui Ut</p>
              <a href="product/details.html" className="font-default">
                <h5>Excepturi Et In Cum</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}