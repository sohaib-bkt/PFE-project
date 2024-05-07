
import { useState } from 'react';
import axiosClient from '../api/axios';
import { Link } from 'react-router-dom';

export default function ProdCard( product ) {
  const [loading, setLoading] = useState(false);

  const addToCart = () => {
    setLoading(true);
    axiosClient.post('http://localhost:8000/api/wishlist/add', {
      id: product.product.id,
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
    <div className="col-lg-3 col-md-3 col-sm-4 pb-1">
      <div className="card product-item border-0 mb-4">
      <Link to={`/detail/${product.product.slug}`}>
          <img
            className="img-fluid w-100 "
            src={`http://localhost:8000/api/images/products/${product.product.image}`}
            alt=""
          />
      </Link>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">{product.product.name}</h6>
          <div className="d-flex justify-content-center">
            <h6>${product.product.regular_price} &nbsp;</h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <Link to={`/detail/${product.product.slug}`} className="btn btn-sm text-dark p-0">
            <i className="fas fa-eye text-primary mr-1" />
            &nbsp;Detail
          </Link>
          <button
            className="btn btn-sm text-dark p-0"
            onClick={addToCart}
            disabled={loading}
          >
            {loading ? 'Adding to Wishlist...' : (
              <>
                <i className="fas fa-heart text-primary mr-1" />
                &nbsp;Add to Wishlist
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
