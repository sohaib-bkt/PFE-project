import 'feather-icons';
import Product from './product';
import svg4 from '@Public/assets/svg/list.svg'
import svg1 from '@Public/assets/svg/grid.svg'
import svg3 from '@Public/assets/svg/grid-3.svg'
import svg2 from '@Public/assets/svg/grid-2.svg'
import '@Public/assets/css/style.css';
import '@Public/assets/css/demo2.css';
import '@Public/assets/css/demo4.css';
import '@Public/assets/css/custom.css';
import $ from 'jquery';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Shopfilter() {
  const [gridClass, setGridClass] = useState('grid grid-cols-2 md:grid-cols-3 justify-items-center pt-3');
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed);
  };
  const [isCollapsed2, setIsCollapsed2] = useState(true);

  const toggleAccordion2 = () => {
    setIsCollapsed2(!isCollapsed2);
  };
    const handleTwoGridClick = () => {
        setGridClass("row g-sm-4 g-3 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section row-cols-2");
    };

    const handleThreeGridClick = () => {
        setGridClass("row g-sm-4 g-3 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section row-cols-md-3 row-cols-2");
    };

    const handleFourGridClick = () => {
        setGridClass("row g-sm-4 g-3 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section row-cols-lg-4 row-cols-md-3 row-cols-2");
    };

    const handleListGridClick = () => {
        setGridClass("row g-sm-4 g-3 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section row-cols-lg-4 row-cols-md-3 row-cols-2 list-style");
    };
  useEffect(() => {
    
    $(".grid-options .grid-btn").on("click", function (e) {
        e.preventDefault(); // Prevent default behavior
        $(".product-list-section").removeClass("list-style");
    });

    $(".grid-options .list-btn").on("click", function (e) {
        e.preventDefault(); // Prevent default behavior
        $(".product-list-section").addClass("list-style");
    });

    $('.two-grid').on('click', function (e) {
        e.preventDefault(); // Prevent default behavior
        $(".product-list-section").removeClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 list-style").addClass("row-cols-2");
    });

    $('.three-grid').on('click', function (e) {
        e.preventDefault(); // Prevent default behavior
        $(".product-list-section").removeClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 list-style").addClass("row-cols-md-3 row-cols-2");
    });

    $('.grid-btn').on('click', function (e) {
        e.preventDefault(); // Prevent default behavior
        $(".product-list-section").removeClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 list-style").addClass("row-cols-lg-4 row-cols-md-3 row-cols-2");
    });

    $('.five-grid').on('click', function (e) {
        e.preventDefault(); // Prevent default behavior
        $(".product-list-section").removeClass("list-style").addClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2");
    });

    $(".grid-options ul li").click(function (e) {
        e.preventDefault(); // Prevent default behavior
        $(".grid-options li.active").removeClass("active");
        $(this).addClass("active")
    });
    $(".two-grid").on("click", function (e) {
      e.preventDefault();
      $("").removeClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 list-style").addClass("row-cols-2");
  });
}, []);
    return (
        <>
         <section  className="section-b-space">
     <div className="container">
  <div className="row">
    <div className="col-lg-3 category-side col-md-4">
      <div className="category-option">
      <div className="button-close mb-3">
                        <button className="btn p-0"><i data-feather="arrow-left"></i> Close</button>
                    </div>
        <div className="accordion category-name" id="accordionExample">
        <div className="accordion-item category-rating">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className={`accordion-button ${isCollapsed ? 'collapsed' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded={!isCollapsed ? 'true' : 'false'}
            onClick={toggleAccordion}
          >
            Brand
          </button>
        </h2>
        <div
          id="collapseTwo"
          className={`accordion-collapse  ${isCollapsed ? 'collapse' : ''}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body category-scroll">
            <ul className="category-list">
              <li>
                <div className="form-check ps-0 custome-form-check">
                  <input
                    className="checkbox_animated check-it"
                    id="br1"
                    name="brands"
                    defaultChecked="checked"
                    type="checkbox"
                  />
                  <label className="form-check-label">brandname</label>
                  <p className="font-light">count</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
          <div className="accordion-item category-price">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="true"
              >
                Price
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse show"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="range-slider category-list">
                  <input
                    type="text"
                    className="js-range-slider"
                    id="js-range-price"
                    defaultValue=""
                  />
                </div>
              </div>
            </div>
          </div>

           <div className="accordion-item category-rating">
      <h2 className="accordion-header" id="headingOne">
        <button
          className={`accordion-button ${isCollapsed2 ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSix"
          aria-expanded={isCollapsed2 ? 'true' : 'false'}
          onClick={toggleAccordion2}
        >
          Category
        </button>
      </h2>
      <div
        id="collapseSix"
        className={`accordion-collapse ${isCollapsed2 ? 'collapse' : ''}`}
        aria-labelledby="headingOne"
      >
        <div className="accordion-body category-scroll">
          <ul className="category-list">
            <li>
              <div className="form-check ps-0 custome-form-check">
                <input
                  className="checkbox_animated check-it"
                  id="ct1"
                  name="categories"
                  type="checkbox"
                  defaultChecked="checked"
                  defaultValue={1}
                />
                <label className="form-check-label">catname</label>
                <p className="font-light">count</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
          
        </div>
        
      </div>
      
    </div>
    <div className="category-product col-lg-9 col-12 ratio_30">
  <div className="row g-4">
    {/* label and featured section */}
    <div className="col-md-12">
      <ul className="short-name"></ul>
    </div>
    <div className="col-12">
      <div className="filter-options">
        <div className="select-options">
          <div className="page-view-filter">
            <div className="dropdown select-featured">
              <select className="form-select" name="orderby" id="orderby">
                <option value={-1}>Default</option>
                <option value={1}>Date, New To Old</option>
                <option value={2}>Date, Old To New</option>
                <option value={3}>Price, Low To High</option>
                <option value={4}>Price, High To Low</option>
              </select>
            </div>
          </div>
          <div className="dropdown select-featured">
            <select className="form-select" name="size" id="pagesize">
              <option value={12}>12 Products Per Page</option>
              <option value={24}>24 Products Per Page</option>
              <option value={52}>52 Products Per Page</option>
              <option value={100}>100 Products Per Page</option>
            </select>
          </div>
        </div>
        <div className="grid-options d-sm-inline-block d-none">
                <ul className="d-flex">
                    <li className="two-grid" onClick={handleTwoGridClick}>
                        <a href="#">
                            <img src={svg2} className="img-fluid lazyload" alt="" />
                        </a>
                    </li>
                    <li className="three-grid d-md-inline-block d-none" onClick={handleThreeGridClick}>
                        <a href="#">
                            <img src={svg3} className="img-fluid lazyload" alt="" />
                        </a>
                    </li>
                    <li className="grid-btn active d-lg-inline-block d-none" onClick={handleFourGridClick}>
                        <a href="#">
                            <img src={svg1} className="img-fluid lazyload" alt="" />
                        </a>
                    </li>
                    <li className="list-btn" onClick={handleListGridClick}>
                        <a href="#">
                            <img src={svg4} className="img-fluid lazyload" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
      </div>
    </div>
  </div>

  <div className = {gridClass}>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
  </div>


</div>

  </div>
  
</div>

</section>
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