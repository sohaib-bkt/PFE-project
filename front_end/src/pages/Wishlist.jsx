import { useState, useEffect } from 'react';
import axiosClient from '../api/axios';
import { Link } from 'react-router-dom';

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    axiosClient.get('http://localhost:8000/api/wishlist')
      .then(response => {
        setWishlistItems(response.data.items);
        
      })
      .catch(error => console.error('Error fetching wishlist:', error));
}, []);


const removeFromWishlist = (rowId) => {
  axiosClient.delete('http://localhost:8000/api/wishlist/remove', {
    data: { rowId: String(rowId) } 
  })
    .then(() => {
      setWishlistItems(prevItems => {
        const itemsArray = Object.values(prevItems); 
        const updatedItems = itemsArray.filter(item => item.rowId !== rowId);
        const updatedItemsObject = updatedItems.reduce((acc, cur) => {
          acc[cur.rowId] = cur;
          return acc;
        }, {});
        return updatedItemsObject;
      });
    })
    .catch(error => console.error('Error removing item from wishlist:', error));
};


const clearWishlist = () => {
  axiosClient.delete('http://localhost:8000/api/wishlist/clear')
    .then(() => {
      setWishlistItems([]);
    })
    .catch(error => console.error('Error clearing wishlist:', error));
};


  return (
    
    <>
      <section className="wish-list-section section-b-space">
        <div className="container">
          {Object.keys(wishlistItems).length > 0 ? (
            <div className="row">
              <div className="col-sm-12">
                <table className="table cart-table wishlist-table">
                  <thead>
                    <tr className="table-head">
                      <th>image</th>
                      <th>product name</th>
                      <th>price</th>
                      <th>availability</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(wishlistItems).map(item => (
                      <tr key={item.rowId}>
                        <td>
                          <a href={item.productLink}>
                            <img src={item.img} className="blur-up lazyload" alt="" />
                          </a>
                        </td>
                        <td>
                          <a href={item.productLink} className="font-light">
                            {item.name}
                          </a>
                        </td>
                        <td>
                          <p className="fw-bold">${item.price}</p>
                        </td>
                        <td>
                          <p>{item.availability ? 'In Stock' : 'Out of Stock'}</p>
                        </td>
                        <td>
                          <a href="javascript:void(0)" className="icon" onClick={() => removeFromWishlist(item.rowId)}>
                            <i className="fas fa-times" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Your wishlist is empty!</h2>
                <h5 className="mt-3">Add items to it now.</h5>
                <Link to="/shop/clothes" className="btn btn-warning mt-5">
                  Shop Now
                </Link>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-md-12 text-end">
              <a href="javascript:void(0)" onClick={clearWishlist}>
                Clear All Items
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
