import ProdCard from '@Components/ProdCard.jsx';
import Slider from '@Components/Slider.jsx';
import '@Public/assets/css/style.css';
import '@Public/assets/css/demo4.css';
import '@Public/assets/css/demo2.css';
import '@Public/assets/css/custom.css';

import img from '@Public/assets/images/blog/sample.jpg';
import SectionStart from "@Components/SectionStart.jsx";
export default function Detail() {

    return (
        <>
        <SectionStart/>
        <section>
  <div className="container">
    <div className="row gx-4 gy-5">
      <div className="col-lg-12 col-12">
        <div className="details-items">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="row">
                <div className="col-lg-2">
                  <div className="details-image-vertical black-slide rounded">
                    <div>
                      <img
                        src={img}
                        className="img-fluid lazyload"
                        alt="{{$product->name}}"
                      />
                    </div>
                
                    <div>
                      <img
                        src= {img}
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-10">
                  <div className="details-image-1 ratio_asos">
                    <div>
                      <img
                        src={img}
                        className="img-fluid w-100 image_zoom_cls-0  lazyload"
                        alt="{{$product->name}}"
                      />
                    </div>
                   
                    <div>
                      <img
                        src=" {{ asset('storage/'.$product->image) }}"
                        className="img-fluid w-100 image_zoom_cls-1  lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cloth-details-size">
                <div className="product-count">
                  <ul>
                    <li>
                      <img
                        src="../assets/images/gif/fire.gif"
                        className="img-fluid  lazyload"
                        alt="image"
                      />
                      <span className="p-counter">37</span>
                      <span className="lang">orders in last 24 hours</span>
                    </li>
                    <li>
                      <img
                        src="../assets/images/gif/person.gif"
                        className="img-fluid user_img  lazyload"
                        alt="image"
                      />
                      <span className="p-counter">44</span>
                      <span className="lang">active view this</span>
                    </li>
                  </ul>
                </div>
                <div className="details-image-concept">
                  <h2>
                   <b>prod Name</b>
                  </h2>
                </div>
                <div className="label-section">
                  <span className="badge badge-grey-color">#1 Best seller</span>
                  <span className="label-text">in fashion</span>
                </div>
                <h3 className="price-detail">
                $70.00
                <del> $90.00</del>
                <span>71 % off</span>
                </h3>
                {/* Votre bouton Commande */}
                <div className="product-buttons">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-solid"
                    id="triggerModal"
                  >
                    <i className="fa fa-bookmark fz-16 me-2" />
                    <span>Commande</span>
                  </a>
                </div>
                <ul className="product-count shipping-order">
                  <li>
                    <img
                      src="../assets/images/gif/truck.png"
                      className="img-fluid  lazyload"
                      alt="image"
                    />
                    <span className="lang">
                      Free shipping for orders above $500 USD
                    </span>
                  </li>
                </ul>
                <div className="mt-2 mt-md-3 border-product">
                  <h6 className="product-title hurry-title d-block">
                    in stock OR out of stock
                  </h6>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "78%" }}
                    />
                  </div>
                  <div className="font-light timer-5">
                    <h5>Order in the next to get</h5>
                    <ul className="timer1">
                      <li className="counter">
                        <h5 id="days">␣</h5> Days :
                      </li>
                      <li className="counter">
                        <h5 id="hours">␣</h5> Hour :
                      </li>
                      <li className="counter">
                        <h5 id="minutes">␣</h5> Min :
                      </li>
                      <li className="counter">
                        <h5 id="seconds">␣</h5> Sec
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-product">
                  <h6 className="product-title d-block">share it</h6>
                  <div className="product-icon">
                    <ul className="product-social">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com/">
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li className="pe-0">
                        <a href="https://www.google.com/">
                          <i className="fas fa-rss" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="cloth-review">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#desc"
                type="button"
              >
                Description
              </button>
              <button
                className="nav-link"
                id="nav-speci-tab"
                data-bs-toggle="tab"
                data-bs-target="#speci"
                type="button"
              >
                Specifications
              </button>
              <button
                className="nav-link"
                id="nav-size-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-guide"
                type="button"
              >
                Sizing Guide
              </button>
              <button
                className="nav-link"
                id="nav-question-tab"
                data-bs-toggle="tab"
                data-bs-target="#question"
                type="button"
              >
                Q &amp; A
              </button>
              <button
                className="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#review"
                type="button"
              >
                Review
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="desc">
              <div className="shipping-chart">
                product description
              </div>
            </div>
            <div className="tab-pane fade" id="speci">
              <div className="pro mb-4">
                <p className="font-light">
                  The Model is wearing a white blouse from our stylist's
                  collection, see the image for a mock-up of what the actual
                  blouse would look like.it has text written on it in a black
                  cursive language which looks great on a white color.
                </p>
                <div className="table-responsive">
                  <table className="table table-part">
                    <tbody>
                      <tr>
                        <th>Product Dimensions</th>
                        <td>15 x 15 x 3 cm; 250 Grams</td>
                      </tr>
                      <tr>
                        <th>Date First Available</th>
                        <td>5 April 2021</td>
                      </tr>
                      <tr>
                        <th>Manufacturer</th>
                        <td>Aditya Birla Fashion and Retail Limited</td>
                      </tr>
                      <tr>
                        <th>ASIN</th>
                        <td>B06Y28LCDN</td>
                      </tr>
                      <tr>
                        <th>Item model number</th>
                        <td>AMKP317G04244</td>
                      </tr>
                      <tr>
                        <th>Department</th>
                        <td>Men</td>
                      </tr>
                      <tr>
                        <th>Item Weight</th>
                        <td>250 G</td>
                      </tr>
                      <tr>
                        <th>Item Dimensions LxWxH</th>
                        <td>15 x 15 x 3 Centimeters</td>
                      </tr>
                      <tr>
                        <th>Net Quantity</th>
                        <td>1 U</td>
                      </tr>
                      <tr>
                        <th>Included Components</th>
                        <td>1-T-shirt</td>
                      </tr>
                      <tr>
                        <th>Generic Name</th>
                        <td>T-shirt</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="tab-pane fade overflow-auto" id="nav-guide">
              <div className="table-responsive">
                <table className="table table-pane mb-0">
                  <tbody>
                    <tr className="bg-color">
                      <th className="my-2">US Sizes</th>
                      <td>6</td>
                      <td>6.5</td>
                      <td>7</td>
                      <td>8</td>
                      <td>8.5</td>
                      <td>9</td>
                      <td>9.5</td>
                      <td>10</td>
                      <td>10.5</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <th>Euro Sizes</th>
                      <td>39</td>
                      <td>39</td>
                      <td>40</td>
                      <td>40-41</td>
                      <td>41</td>
                      <td>41-42</td>
                      <td>42</td>
                      <td>42-43</td>
                      <td>43</td>
                      <td>43-44</td>
                    </tr>
                    <tr className="bg-color">
                      <th>UK Sizes</th>
                      <td>5.5</td>
                      <td>6</td>
                      <td>6.5</td>
                      <td>7</td>
                      <td>7.5</td>
                      <td>8</td>
                      <td>8.5</td>
                      <td>9</td>
                      <td>10.5</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <th>Inches</th>
                      <td>9.25"</td>
                      <td>9.5"</td>
                      <td>9.625"</td>
                      <td>9.75"</td>
                      <td>9.9735"</td>
                      <td>10.125"</td>
                      <td>10.25"</td>
                      <td>10.5"</td>
                      <td>10.765"</td>
                      <td>10.85</td>
                    </tr>
                    <tr className="bg-color">
                      <th>CM</th>
                      <td>23.5</td>
                      <td>24.1</td>
                      <td>24.4</td>
                      <td>25.4</td>
                      <td>25.7</td>
                      <td>26</td>
                      <td>26.7</td>
                      <td>27</td>
                      <td>27.3</td>
                      <td>27.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tab-pane fade" id="question">
              <div className="question-answer">
                <ul>
                  <li>
                    <div className="que">
                      <i className="fas fa-question" />
                      <div className="que-details">
                        <h6>Is it compatible with all WordPress themes?</h6>
                        <p className="font-light">
                          If you want to see a demonstration version of the
                          premium plugin, you can see that in this page. If you
                          want to see a demonstration version of the premium
                          plugin, you can see that in this page. If you want to
                          see a demonstration version of the premium plugin, you
                          can see that in this page.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="que">
                      <i className="fas fa-question" />
                      <div className="que-details">
                        <h6>How can I try the full-featured plugin? </h6>
                        <p className="font-light">
                          Compatibility with all themes is impossible, because
                          they are too many, but generally if themes are
                          developed according to WordPress and WooCommerce
                          guidelines, YITH plugins are compatible with them.
                          Compatibility with all themes is impossible, because
                          they are too many, but generally if themes are
                          developed according to WordPress and WooCommerce
                          guidelines, YITH plugins are compatible with them.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="que">
                      <i className="fas fa-question" />
                      <div className="que-details">
                        <h6>Is it compatible with all WordPress themes?</h6>
                        <p className="font-light">
                          If you want to see a demonstration version of the
                          premium plugin, you can see that in this page. If you
                          want to see a demonstration version of the premium
                          plugin, you can see that in this page. If you want to
                          see a demonstration version of the premium plugin, you
                          can see that in this page.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-pane fade" id="review">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  <section className="ratio_asos section-b-space overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-lg-4 mb-3">Customers Also Bought These</h2>
          <div className="product-wrapper product-style-2 slide-4 p-0 light-arrow bottom-space ">
          <Slider/>
          </div>
          </div>
          </div>
          </div>
  </section>
  <div id="qvmodal"></div>

  


        </>
    )
}