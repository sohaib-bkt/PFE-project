
import { Link } from "react-router-dom";
import axiosClient from "../api/axios";
import { useState } from "react";
export default function Prods({prod}) {
  const [loading, setLoading] = useState(false);

  const addToCart = () => {
    setLoading(true);
    axiosClient.post('http://localhost:8000/api/wishlist/add', {
      id: prod.id,
    })
      .then(response => {
        console.log('Item added to cart:', response.data);
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
          <Link to={`/detail/${prod.id}`} >
              <img
                src={prod.image}
                className="w-100 bg-img blur-up lazyload"
                alt=""
              />
            </Link>
            <div className="circle-shape" />            
            <div className="cart-wrap">
              <ul>
                <li>
                  <Link to={`/detail/${prod.id}`} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  </Link>                 
                </li>
                <li>
                <a
            className="wishlist"
            onClick={addToCart}
            disabled={loading}
          >
          {loading ? 'Adding to Wishlist...' : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>   
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
                <div className="main-price">
                
            </div>
              </div>
              <Link to={`/detail/${prod.id}`} className="font-default">
                <h6>{prod.name}</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}