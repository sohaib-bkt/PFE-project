import SectionStart from "@Components/SectionStart"
export default function Contact() {
    return (
        <>
            <SectionStart title="Contact Us" activeBreadcrumb="Contact Us"/>
      
  <section className="contact-section">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-7">
          <div className="materialContainer">
            <div className="material-details">
              <div className="title title1 title-effect mb-1 title-left">
                <h2>Contact Us</h2>
                <p className="ms-0 w-100">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
            </div>
            <form action="{{route('contact.store')}}" method="POST">
              <div className="row g-4 mt-md-1 mt-2">
                <div className="col-md-6">
                  <label htmlFor="first" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nom"
                    name="nom"
                    placeholder="Enter Your First Name"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="last" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="prenom"
                    name="prenom"
                    placeholder="Enter Your Last Name"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Enter Your Phone Number"
                    required=""
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="comment" className="form-label">
                    Comment
                  </label>
                  <textarea
                    className="form-control"
                    id="commentaire"
                    name="commentaire"
                    rows={5}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-solid-default">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="contact-details">
            <div>
              <h2>Let's get in touch</h2>
              <h5 className="font-light">
                We're open for any suggestion or just to have a chat
              </h5>
              <div className="contact-box">
                <div className="contact-icon">
                  <i data-feather="map-pin" />
                </div>
                <div className="contact-title">
                  <h4>Address :</h4>
                  <p>NIT, Faridabad, Haryana, India</p>
                </div>
              </div>
              <div className="contact-box">
                <div className="contact-icon">
                  <i data-feather="phone" />
                </div>
                <div className="contact-title">
                  <h4>Phone Number :</h4>
                  <p>+1 0000000000</p>
                </div>
              </div>
              <div className="contact-box">
                <div className="contact-icon">
                  <i data-feather="mail" />
                </div>
                <div className="contact-title">
                  <h4>Email Address :</h4>
                  <p>contact@surfsidemedia.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
      )
}
