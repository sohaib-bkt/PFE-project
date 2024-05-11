import ProdCard from "./ProdCard";
import '@Css/dropdown.css';
import { ProductContext } from "../context/ProductContext";
import { useContext, useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";



export default function Shopfilter() {
  const [prange , setPrange] = useState(0);
  const [category , setCategory] = useState(0);
  const [categories , setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [order , setOrder] = useState(0);
  const [loading , setLoading] = useState(true);
  const { products, setProducts , getProducts } = useContext(ProductContext);
  useEffect(() => {
    const fetchData = async () => {
      getProducts(prange,category,currentPage,searchTerm,order).then(response => {
        setProducts(response.data.products.data);
        setCategories(response.data.categories);
        setLoading(false);
        
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });}

    fetchData();
  }, [prange, category,currentPage, searchTerm ,order]);
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
    if (loading) {
      return     <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center' ,zIndex: 999 }}>
      <HashLoader color="red" loading={loading} size={80} />
    </div>
  }


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
              <a onClick={() => setPrange(0)}>
              <input
                type="radio"
                name="price"
                className="form-check-input"
                defaultChecked=""
                id="price-all"
              />
              <label className="custom-control-label" htmlFor="price-all"> &nbsp;
                All Price
              </label>
              </a>
              <span className="badge border font-weight-normal">{products.length}</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <a onClick={() => setPrange('0,5')}>
              <input
                type="radio"
                name="price"
                className="form-check-input"
                id="price-1"
              />
              <label className="custom-control-label" htmlFor="price-1"> &nbsp;
                $0 - $5
              </label>
              </a>
              
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <a onClick={() => setPrange('5,10')}>
              <input
                type="radio"
                name="price"
                className="form-check-input"
                id="price-2"
              />
              <label className="custom-control-label" htmlFor="price-2">  &nbsp;
                $15 - $10
              </label>
              </a>
              
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <a onClick={() => setPrange('10,20')}>
              <input
                type="radio"
                name="price"
                className="form-check-input"
                id="price-3"
              />
              <label className="custom-control-label" htmlFor="price-3">  &nbsp;
                $10 - $20
              </label>
              </a>
              
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <a onClick={() => setPrange('20,50')}>
              <input
                type="radio"
                name="price"
                className="form-check-input"
                id="price-4"
              />
              <label className="custom-control-label" htmlFor="price-4">  &nbsp;
                $20 - $50
              </label>
              </a>
              
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <a onClick={() => setPrange('50,100')}>
              <input
                type="radio"
                name="price"
                className="form-check-input"
                id="price-5"
              />
              <label className="custom-control-label" htmlFor="price-5">  &nbsp;
                $50 - $100
              </label>
              </a>
              
            </div>
          </form>
        </div>
        {/* Price End */}

        <div className="mb-5">
          <h5 className="font-weight-semi-bold mb-4">Filter by categories</h5>
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <a onClick={() => setCategory(0)}>
              <input
                type="radio"
                name="category"
                className="form-check-input"
                defaultChecked=""
                id="size-all"
              />
              <label className="custom-control-label" htmlFor="size-all">  &nbsp;
                All Categories
              </label>
              </a>
              
            </div>
            {categories.map((cat, index) => (
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3" key={index}>
                <a onClick={() => setCategory(cat.id)}>
                <input
                  type="radio"
                  name="category"
                  className="form-check-input"
                  id={`size-${cat.id}`}
                />
                <label className="custom-control-label" htmlFor={`size-${cat.id}`}>  &nbsp;
                  {cat.name}
                </label>
                </a>
                
              </div>
            ))}
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
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <button
                  className="input-group-text search-button"
                  id="basic-addon3"
                >
                  <i className="fas fa-search text-color" />
                </button>
              </div>
            </div>
            
            <div className="unique-dropdown">  <button className="unique-dropbtn" style={{paddingLeft:"22 px", paddingRight:"22px"}}>Sort By</button>
            <div className="unique-dropdown-content">
              <a onClick={() => setOrder(3)} style={{cursor:"pointer"}} >Price Low to High</a>
              <a onClick={() => setOrder(4)} style={{cursor:"pointer"}} >Price High to Low</a>
              <a onClick={() => setOrder(1)} style={{cursor:"pointer"}} >Date New to Old</a>
              <a onClick={() => setOrder(2)} style={{cursor:"pointer"}} >Date Old to New</a>
            </div>
          </div>
          </div>
          </div>
          {
            products.map((product) => <ProdCard key={product.id} product={product} />)

          }
          
        

          <div className="col-12 pb-1">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center mb-3" >
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <a
                        className="page-link"
                        href="#"
                        aria-label="Previous"
                        onClick={() => setCurrentPage(currentPage - 1)}
                      >
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        {currentPage}
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        onClick={() => setCurrentPage(currentPage + 1)}
                      >
                        {currentPage + 1}
                      </a>
                    </li>
                    {/* Add more page links as needed */}
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        aria-label="Next"
                        onClick={() => setCurrentPage(currentPage + 1)}
                      >
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
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