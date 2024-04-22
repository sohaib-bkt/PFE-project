import img from "@Assets/images/fashion/instagram/4.jpg";

export default function Wishlist() {
  const productLink = "{{route('shop.product.details',['slug'=>$item->model->slug])}}";

  return (
    <>
      <section className="wish-list-section section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 table-responsive">
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
                  <tr>
                    <td>
                      <a href={productLink}>
                        <img src={img} className="blur-up lazyload" alt="" />
                      </a>
                    </td>
                    <td>
                      <a href={productLink} className="font-light">
                        Prod Name
                      </a>
                    </td>
                    <td>
                      <p className="fw-bold">$700.99</p>
                    </td>
                    <td>
                      <p>In Stock</p>
                      <p>Out of Stock</p>
                    </td>
                    <td>
                      <a href="javascript:void(0)" className="icon" onClick={() => removeFromWishlist('{{$item->rowId}}')}>
                        <i className="fas fa-times" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-end">
              <a href="javascript:void(0)" onClick={() => clearWishlist()}>
                Clear All Items
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Your wishlist is empty!</h2>
              <h5 className="mt-3">Add items to it now.</h5>
              <a href="{{route('shop.index')}}" className="btn btn-warning mt-5">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
