
import { Link } from "react-router-dom";
import axiosClient from "../api/axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useProductContext } from "../context/ProductContext";
export default function Prods({prod}) {
  const [loading, setLoading] = useState(false);
  const {countWishList , setCountWishList} = useProductContext();
  const addToCart = () => {
    setLoading(true);
    axiosClient.post('http://localhost:8000/api/cart/add', {
        id: prod.id,
    })
    .then(response => {

        setCountWishList(countWishList + 1);
        setLoading(false);
    })
    .catch(error => {
        console.error('Error adding item to cart:', error);
        setLoading(false);
    });
};

    
    return (
        <>
        <div className="col-xl-2 col-lg-2 col-6">
        <div className="product-box">
          <div className="img-wrapper">
          <Link to={`/detail/${prod.slug}`} >
              <img
                src={`http://localhost:8000/api/images/products/${prod.image}`}
                className="w-100 bg-img blur-up lazyload"
                alt=""
              />
            </Link>
            <div className="circle-shape" />            
            <div className="cart-wrap">
              <ul>
                <li>
                  <Link to={`/detail/${prod.slug}`} >
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </li>
                <li>
                <a
            className="wishlist"
            onClick={addToCart}
            disabled={loading}
          >
          {loading ? 'Adding to Wishlist...' : (
            <FontAwesomeIcon icon={faHeart} />
            )}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-style-3 product-style-chair">
            <div className="product-title d-block mb-0">
              <div className="r-price">
                <div className="theme-color">${prod.regular_price}</div>   
              </div>
              <Link to={`/detail/${prod.slug}`} className="font-default">
                <h4>{prod.name}</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}