import { useState, useEffect } from 'react';
import axiosClient from '../api/axios';
import { Link } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import SectionStart from "@Components/SectionStart"
import { useProductContext } from '../context/ProductContext';


export default function Wishlist() {
  const {countWishList , setCountWishList} = useProductContext();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosClient.get('http://localhost:8000/api/wishlist')
      .then(response => {
        setWishlistItems(response.data.items);
        setLoading(false);
        
      })
      .catch(error => console.error('Error fetching wishlist:', error));
}, []);


const removeFromWishlist = (rowId) => {
  axiosClient.delete('http://localhost:8000/api/wishlist/remove', {
    data: { rowId: String(rowId) } 
  })
    .then(() => {
      setCountWishList(countWishList - 1);
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
      setCountWishList(0);
    })
    .catch(error => console.error('Error clearing wishlist:', error));
};
if (loading) {
  return     <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center' ,zIndex: 999 }}>
  <HashLoader color="red" loading={loading} size={80} />
</div>
}


  return (
    
    <>
       <SectionStart title="Wishlist" activeBreadcrumb="Wishlist"/>
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
                      
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(wishlistItems).map(item => (
                      <tr key={item.rowId}>
                        <td>
               
                          <Link to={`/detail/${item.model.slug}`} >
                            <img src={`http://localhost:8000/api/images/products/${item.model.image}`} className=" lazyload" alt="" height={'100px'} width={'100px'} style={{objectFit:'cover' }} />
                          </Link>
                        </td>
                        <td>
                          <Link to={`/detail/${item.model.slug}`} className="font-light">
                            {item.name}
                          </Link>
                        </td>
                        <td>
                          <p className="fw-bold">${item.price}</p>
                        </td>
                        <td>
                          <a className="icon" onClick={() => removeFromWishlist(item.rowId)}>
                            <i className="fas fa-times" />
                          </a>
                        </td>``
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
              <div className="col-md-12 text-end">
              <Link href='' onClick={clearWishlist}>
                Clear All Items
              </Link>
            </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-12 text-center" >
                <h2>Your wishlist is empty!</h2>
                <h5 className="mt-3">Add items to it now.</h5>
                <Link to="/" className="btn btn-warning mt-3" style={{ borderRadius: '6px' }}>
                  Shop Now
                </Link>
              </div>
            </div>
          )}
         
        </div>
      </section>
    </>
  );
}
