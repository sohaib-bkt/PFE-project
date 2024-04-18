
export default function DetailReview(props) {
    return (
      <div className={"tab-pane fade " + props.clicked} id="desc">
      <div className="row g-4">
                <div className="col-lg-4">
                  <div className="customer-rating">
                    <h2>Customer reviews</h2>
                    <ul className="rating my-2 d-inline-block">
                      <li>
                        <i className="fas fa-star theme-color" />
                      </li>
                      <li>
                        <i className="fas fa-star theme-color" />
                      </li>
                      <li>
                        <i className="fas fa-star theme-color" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                    <div className="global-rating">
                      <h5 className="font-light">82 Ratings</h5>
                    </div>
                    <ul className="rating-progess">
                      <li>
                        <h5 className="me-3">5 Star</h5>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "78%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                        <h5 className="ms-3">78%</h5>
                      </li>
                      <li>
                        <h5 className="me-3">4 Star</h5>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "62%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                        <h5 className="ms-3">62%</h5>
                      </li>
                      <li>
                        <h5 className="me-3">3 Star</h5>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "44%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                        <h5 className="ms-3">44%</h5>
                      </li>
                      <li>
                        <h5 className="me-3">2 Star</h5>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "30%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                        <h5 className="ms-3">30%</h5>
                      </li>
                      <li>
                        <h5 className="me-3">1 Star</h5>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "18%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                        <h5 className="ms-3">18%</h5>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8">
                  <p className="d-inline-block me-2">Rating</p>
                  <ul className="rating mb-3 d-inline-block">
                    <li>
                      <i className="fas fa-star theme-color" />
                    </li>
                    <li>
                      <i className="fas fa-star theme-color" />
                    </li>
                    <li>
                      <i className="fas fa-star theme-color" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <div className="review-box">
                    <form className="row g-4">
                      <div className="col-12 col-md-6">
                        <label className="mb-1" htmlFor="name">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter your name"
                          required=""
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="mb-1" htmlFor="id">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="id"
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                      <div className="col-12">
                        <label className="mb-1" htmlFor="comments">
                          Comments
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="comments"
                          style={{ height: 100 }}
                          required=""
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn default-light-theme default-theme default-theme-2"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <div className="customer-review-box">
                    <h4>Customer Reviews</h4>
                    <div className="customer-section">
                      <div className="customer-profile">
                        <img
                          src="../assets/images/inner-page/review-image/1.jpg"
                          className="img-fluid  lazyload"
                          alt=""
                        />
                      </div>
                      <div className="customer-details">
                        <h5>Mike K</h5>
                        <ul className="rating my-2 d-inline-block">
                          <li>
                            <i className="fas fa-star theme-color" />
                          </li>
                          <li>
                            <i className="fas fa-star theme-color" />
                          </li>
                          <li>
                            <i className="fas fa-star theme-color" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                        <p className="font-light">
                          I purchased my Tab S2 at Best Buy but I wanted to
                          share my thoughts on Amazon. I'm not going to go over
                          specs and such since you can read those in a hundred
                          other places. Though I will say that the "new" version
                          is preloaded with Marshmallow and now uses a Qualcomm
                          octacore processor in place of the Exynos that shipped
                          with the first gen.
                        </p>
                        <p className="date-custo font-light">- Sep 08, 2021</p>
                      </div>
                    </div>
                    <div className="customer-section">
                      <div className="customer-profile">
                        <img
                          src="../assets/images/inner-page/review-image/2.jpg"
                          className="img-fluid  lazyload"
                          alt=""
                        />
                      </div>
                      <div className="customer-details">
                        <h5>Norwalker</h5>
                        <ul className="rating my-2 d-inline-block">
                          <li>
                            <i className="fas fa-star theme-color" />
                          </li>
                          <li>
                            <i className="fas fa-star theme-color" />
                          </li>
                          <li>
                            <i className="fas fa-star theme-color" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                        <p className="font-light">
                          Pros: Nice large(9.7") screen. Bright colors. Easy to
                          setup and get started. Arrived on time. Cons: a bit
                          slow on response, but expected as tablet is 2
                          generations old. But works fine and good value for the
                          money.
                        </p>
                        <p className="date-custo font-light">- Sep 08, 2021</p>
                      </div>
                    </div>
                    <div className="customer-section">
                      <div className="customer-profile">
                        <img
                          src="../assets/images/inner-page/review-image/3.jpg"
                          className="img-fluid  lazyload"
                          alt=""
                        />
                      </div>
                      <div className="customer-details">
                        <h5>B. Perdue</h5>
                        <ul className="rating my-2 d-inline-block">
                          <li>
                            <i className="fas fa-star theme-color" />
                          </li>
                          <li>
                            <i className="fas fa-star theme-color" />
                          </li>
                          <li>
                            <i className="fas fa-star theme-color" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                        <p className="font-light">
                          Love the processor speed and the sensitivity of the
                          touch screen.
                        </p>
                        <p className="date-custo font-light">- Sep 08, 2021</p>
                      </div>
                    </div>
                    <div className="customer-section">
                      <div className="customer-profile">
                        <img
                          src="../assets/images/inner-page/review-image/4.jpg"
                          className="img-fluid  lazyload"
                          alt=""
                        />
                      </div>
                      <div className="customer-details">
                        <h5>MSL</h5>
                        <ul className="rating my-2 d-inline-block">
                          <li>
                            <i className="fas fa-star theme-color" />
                          </li>
                          <li>
                            <i className="fas fa-star theme-color" />
                          </li>
                          <li>
                            <i className="fas fa-star theme-color" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                        <p className="font-light">
                          I purchased the Tablet May 2017 and now April 2019 I
                          have to charge it everyday. I don't watch movies on
                          it..just play a game or two while on lunch. I guess
                          now I need to power it down for future use.
                        </p>
                        <p className="date-custo font-light">- Sep 08, 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}