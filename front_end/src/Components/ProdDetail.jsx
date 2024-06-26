import img from "@Assets/images/newletter-icon.png";

export default function ProdCard() {


  return (
  <div className="col-lg-45 col-md-6 col-sm-12 pb-1">
  <div className="card product-item border-0 mb-4">
    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
      <img
        className="img-fluid w-100"
        src={img}
        alt=""
      />
    </div>
    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
      <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
      <div className="d-flex justify-content-center">
        <h6>$123.00&nbsp;&nbsp;</h6>
        <h6 className="text-muted ml-2">
          <del>$123.00</del>
        </h6>
      </div>
    </div>
    <div className="card-footer d-flex justify-content-between bg-light border">
      <a href="" className="btn btn-sm text-dark p-0">
        <i className="fas fa-eye text-primary mr-1" />
        &nbsp; Detail
      </a>
      <a href="" className="btn btn-sm text-dark p-0">
        <i className="fas fa-shopping-cart text-primary mr-1" />
        &nbsp; Wish
      </a>
    </div>
  </div>
</div>
  );
}
