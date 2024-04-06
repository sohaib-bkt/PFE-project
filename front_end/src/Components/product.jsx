import image from '@Public/assets/images/newletter-icon.png';
export default function Product() {
    return (
        <div className=" flex flex-row mt-1" >
        <div>
          <div className="product-box">
            <div className="img-wrapper">
              <div className="front">
                <a href="">
                  <img src={image} className="bg-img lazyload" alt="image" />
                </a>
              </div>
              <div className="back">
                <a href="#">
                  <img src="#" className="bg-img blur-up lazyload" alt="" />
                </a>
              </div>
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
            <div className="product-details">
              <div className="rating-details">
                <span className="font-light grid-content">cat name</span>
                <ul className="rating mt-0">
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
              <div className="main-price">
                <a href="#" className="font-default">
                  <h5 className="ms-0">prod</h5>
                </a>
                <div className="listing-content">
                  <span className="font-light">prodcatname</span>
                  <p className="font-light">prod desc</p>
                </div>
                <h3 className="theme-color">$price</h3>
                <button className="btn listing-content">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}