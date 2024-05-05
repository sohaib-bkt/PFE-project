import axiosClient from "../api/axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ProdHome({ prod }) {
  const [loading, setLoading] = useState(false);

  const addToCart = () => {
    setLoading(true);
    axiosClient
      .post("http://localhost:8000/api/wishlist/add", {
        id: prod.id,
      })
      .then((response) => {
        console.log("Item added to cart:", response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
        setLoading(false);
      });
  };

  return (
    <div className="product-box">
      <div className="img-wrapper">
        <Link to={`/detail/${prod.slug}`}>
          <img
            src={'../'+prod.image}
            className="w-100 bg-img blur-up lazyload"
            alt={prod.name}
          />
        </Link>
        <div className="circle-shape" />
        <div className="cart-wrap">
          <ul>
            <li>
              <Link to={`/detail/${prod.slug}`}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </li>
            <li>
              <a
                className="wishlist"
                onClick={addToCart}
                disabled={loading}
              >
                {loading ? "Adding to Wishlist..." : (
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
            <h3 className="theme-color">${prod.regular_price}</h3>
            <div className="main-price"></div>
          </div>
          <Link to={`/detail/${prod.slug}`} className="font-default">
            <h3>{prod.name}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
