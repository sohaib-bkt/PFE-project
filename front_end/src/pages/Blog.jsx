
import SectionStart from "@Components/SectionStart";
import Card from "@Components/Card";
export default function Blog() {
    return (
        <>
        <SectionStart title="Blog" activeBreadcrumb="Blog"/>
       
  <section
    id="portfolio"className="left-sidebar-section masonary-blog-section section-b-space">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-9 col-md-7 order-md-1 ratio3_2">
          <div className="row g-4">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
        <div className="col-lg-3 col-md-5">
          <div className="left-side">
            {/* Search Bar Start */}
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
            {/* Search Bar End */}
            {/* Popular Post Start */}
            <div className="popular-post mt-4">
              <div className="popular-title">
                <h3>Popular Posts</h3>
              </div>
              <div className="popular-image">
                <div className="popular-number">
                  <h4 className="theme-color">01</h4>
                </div>
                <div className="popular-contain">
                  <h3>Lorem Ipsum is simply dummy text of the printing.</h3>
                  <p className="font-light mb-1">
                    <span>King Monster</span> in <span>News</span>
                  </p>
                  <div className="review-box">
                    <span className="font-light clock-time">
                      <i data-feather="clock" />
                      15m ago
                    </span>
                    <span className="font-light eye-icon">
                      <i data-feather="eye" />
                      8641
                    </span>
                  </div>
                </div>
              </div>
              <div className="popular-image">
                <div className="popular-number">
                  <h4 className="theme-color">02</h4>
                </div>
                <div className="popular-contain">
                  <h3>Lorem Ipsum is simply dummy text of the printing.</h3>
                  <p className="font-light mb-1">
                    <span>King Monster</span> in <span>News</span>
                  </p>
                  <div className="review-box">
                    <span className="font-light clock-time">
                      <i data-feather="clock" />
                      15m ago
                    </span>
                    <span className="font-light eye-icon">
                      <i data-feather="eye" />
                      8641
                    </span>
                  </div>
                </div>
              </div>
              <div className="popular-image">
                <div className="popular-number">
                  <h4 className="theme-color">03</h4>
                </div>
                <div className="popular-contain">
                  <h3>Lorem Ipsum is simply dummy text of the printing.</h3>
                  <p className="font-light mb-1">
                    <span>King Monster</span> in <span>News</span>
                  </p>
                  <div className="review-box">
                    <span className="font-light clock-time">
                      <i data-feather="clock" />
                      15m ago
                    </span>
                    <span className="font-light eye-icon">
                      <i data-feather="eye" />
                      8641
                    </span>
                  </div>
                </div>
              </div>
              <div className="popular-image">
                <div className="popular-number">
                  <h4 className="theme-color">04</h4>
                </div>
                <div className="popular-contain">
                  <h3>Lorem Ipsum is simply dummy text of the printing.</h3>
                  <p className="font-light mb-1">
                    <span>King Monster</span> in <span>News</span>
                  </p>
                  <div className="review-box">
                    <span className="font-light clock-time">
                      <i data-feather="clock" />
                      15m ago
                    </span>
                    <span className="font-light eye-icon">
                      <i data-feather="eye" />
                      8641
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Popular Post End */}
            {/* Category section Start */}
            <div className="category-section popular-post mt-4">
              <div className="popular-title">
                <h3>Category</h3>
              </div>
              <ul>
                <li className="category-box">
                  <a href="blog-left-sidebar.html">
                    <div className="category-product">
                      <div className="cate-shape">
                        <i className="fas fa-globe text-color" />
                      </div>
                      <div className="cate-contain">
                        <h5 className="text-color">Global</h5>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-box">
                  <a href="blog-left-sidebar.html">
                    <div className="category-product">
                      <div className="cate-shape">
                        <i className="fas fa-building text-color" />
                      </div>
                      <div className="cate-contain">
                        <h5 className="text-color">Business</h5>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-box">
                  <a href="blog-left-sidebar.html">
                    <div className="category-product">
                      <div className="cate-shape">
                        <i className="fas fa-play text-color" />
                      </div>
                      <div className="cate-contain">
                        <h5 className="text-color">Entertainmant</h5>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-box">
                  <a href="blog-left-sidebar.html">
                    <div className="category-product">
                      <div className="cate-shape">
                        <i className="fas fa-tshirt text-color" />
                      </div>
                      <div className="cate-contain">
                        <h5 className="text-color">Sports</h5>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-box">
                  <a href="blog-left-sidebar.html">
                    <div className="category-product">
                      <div className="cate-shape">
                        <i className="fas fa-dumbbell text-color" />
                      </div>
                      <div className="cate-contain">
                        <h5 className="text-color">Health</h5>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/* Category section End */}
          </div>
        </div>
      </div>
    </div>
  </section>


        </>
    )
}
