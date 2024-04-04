export default function Card() {
    return (
        <div className="col-lg-4 col-md-6 col-grid-box">
              <div className="card blog-categority">
                <a href="blog/details.html" className="blog-img">
                  <img
                    src="assets/images/blog/sample.jpg"
                    alt=""
                    className="card-img-top blur-up lazyload bg-img"
                  />
                </a>
                <div className="card-body">
                  <h5>Product Update</h5>
                  <a href="blog/details.html">
                    <h2 className="card-title">
                      How to make the perfect morning coffee, according to the
                      science
                    </h2>
                  </a>
                  <div className="blog-profile">
                    <div className="image-name">
                      <h3>John wike</h3>
                      <h6>15 Aug 2023</h6>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    )
}