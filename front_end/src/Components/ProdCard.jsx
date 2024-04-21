export default function ProdCard(product) {


  return (
  <div className="col-lg-44 col-md-6 col-sm-12 pb-1">
  <div className="card product-item border-0 mb-4">
    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
      <img
        className="img-fluid w-100"
        src={'../'+product.product.image}
        alt=""
      />
    </div>
    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
      <h6 className="text-truncate mb-3">{product.product.name}</h6>
      <div className="d-flex justify-content-center">
        <h6>${product.product.regular_price} &nbsp;</h6>
        <h6 className="text-muted ml-2">
          <del>${product.product.regular_price}</del>
        </h6>
      </div>
    </div>
    <div className="card-footer d-flex justify-content-between bg-light border">
      <a href="" className="btn btn-sm text-dark p-0">
        <i className="fas fa-eye text-primary mr-1" />
        &nbsp;Detail
      </a>
      <a href="" className="btn btn-sm text-dark p-0">
        <i className="fas fa-shopping-cart text-primary mr-1" />
        &nbsp;Wish
      </a>
    </div>
  </div>
</div>
  );
}
