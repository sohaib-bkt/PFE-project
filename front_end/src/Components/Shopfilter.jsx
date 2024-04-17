import ProdCard from "./ProdCard";
import '@Css/dropdown.css';
export default function Shopfilter() {

    return (
        <>
         
  {/* Shop Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5">
      {/* Shop Sidebar Start */}
      <div className="col-lg-3 col-md-12">
        {/* Price Start */}
        <div className="border-bottom mb-4 pb-4">
          <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
                id="price-all"
              />
              <label className="custom-control-label" htmlFor="price-all">
                All Price
              </label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-1"
              />
              <label className="custom-control-label" htmlFor="price-1">
                $0 - $100
              </label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-2"
              />
              <label className="custom-control-label" htmlFor="price-2">
                $100 - $200
              </label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-3"
              />
              <label className="custom-control-label" htmlFor="price-3">
                $200 - $300
              </label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-4"
              />
              <label className="custom-control-label" htmlFor="price-4">
                $300 - $400
              </label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-5"
              />
              <label className="custom-control-label" htmlFor="price-5">
                $400 - $500
              </label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Price End */}
        {/* Color Start */}
        <div className="border-bottom mb-4 pb-4">
          <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
                id="color-all"
              />
              <label className="custom-control-label" htmlFor="price-all">
                All Color
              </label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-1"
              />
              <label className="custom-control-label" htmlFor="color-1">
                Black
              </label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-2"
              />
              <label className="custom-control-label" htmlFor="color-2">
                White
              </label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-3"
              />
              <label className="custom-control-label" htmlFor="color-3">
                Red
              </label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-4"
              />
              <label className="custom-control-label" htmlFor="color-4">
                Blue
              </label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-5"
              />
              <label className="custom-control-label" htmlFor="color-5">
                Green
              </label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Color End */}
        {/* Size Start */}
        <div className="mb-5">
          <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
                id="size-all"
              />
              <label className="custom-control-label" htmlFor="size-all">
                All Size
              </label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-1"
              />
              <label className="custom-control-label" htmlFor="size-1">
                XS
              </label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-2"
              />
              <label className="custom-control-label" htmlFor="size-2">
                S
              </label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-3"
              />
              <label className="custom-control-label" htmlFor="size-3">
                M
              </label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-4"
              />
              <label className="custom-control-label" htmlFor="size-4">
                L
              </label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-5"
              />
              <label className="custom-control-label" htmlFor="size-5">
                XL
              </label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Size End */}
      </div>
      {/* Shop Sidebar End */}
      {/* Shop Product Start */}
      <div className="col-lg-9 col-md-12">
        <div className="row pb-3">
          <div className="col-12 pb-1">
            <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="search-section">
              <div className="input-group search-bar">
                <input
                  type="search"
                  className="form-control search-input"
                  placeholder="Search"
                />
                <button
                  className="input-group-text search-button"
                  id="basic-addon3"
                >
                  <i className="fas fa-search text-color" />
                </button>
              </div>
            </div>
            
            <div class="unique-dropdown">  <button class="unique-dropbtn">&nbsp;&nbsp;&nbsp;&nbsp;Sort By&nbsp;&nbsp;&nbsp;&nbsp;</button>
            <div class="unique-dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          </div>
          </div>
         <ProdCard/>
         <ProdCard/>
         <ProdCard/>
         <ProdCard/>
         <ProdCard/>
         <ProdCard/>
         <ProdCard/>
         <ProdCard/>
         <ProdCard/>
         <ProdCard/>
         <div class="col-12 pb-1">
                        <nav aria-label="Page navigation">
                          <ul class="pagination justify-content-center mb-3">
                            <li class="page-item disabled">
                              <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                              </a>
                            </li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                              <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                    </div>
        </div>
      </div>
      {/* Shop Product End */}
    </div>
  </div>

 
<section className="subscribe-section section-b-space">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-6">
        <div className="subscribe-details">
          <h2 className="mb-3">Subscribe Our News</h2>
          <h6 className="font-light">
            Subscribe and receive our newsletters to follow the news about our
            fresh and fantastic Products.
          </h6>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
        <div className="subsribe-input">
          <div className="input-group">
            <input
              type="text"
              className="form-control subscribe-input"
              placeholder="Your Email Address"
            />
            <button className="btn btn-solid-default" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</>
        )
}