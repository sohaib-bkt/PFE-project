import axiosClient from "../api/axios";
import { useState } from "react";
import { Link } from "react-router-dom";

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-eye"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
              </Link>
            </li>
            <li>
              <a
                className="wishlist"
                onClick={addToCart}
                disabled={loading}
              >
                {loading ? "Adding to Wishlist..." : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-heart"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
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
