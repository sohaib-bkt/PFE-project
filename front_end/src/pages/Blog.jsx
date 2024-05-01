
import SectionStart from "@Components/SectionStart";
import Card from "@Components/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Blog() {
    return (
        <>
       
  <section
    id="portfolio"className="left-sidebar-section masonary-blog-section section-b-space">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-3 col-md-5 ">
          <div className="left-side">
            <div className="popular-post">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />
                  <h5 className="my-3">John Smith</h5>
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div className="d-flex justify-content-center mb-2">
                  </div>
                </div>
                  
                <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                  
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <FontAwesomeIcon icon={faPhone} />
                      <p className="mb-0">063233651</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-google fa-lg" style={{ color: "#dd4b39" }} />
                      <p className="mb-0">072423512</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }} />
                      <a href="https://www.facebook.com" target="_blank"><p className="mb-0">name.com</p></a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-7 order-md-1 ratio3_2">
          <div className="row g-4">
            <Card/>
            <Card/>
     
            <Card/>
            <nav aria-label="Page navigation" >
            <ul className="pagination justify-content-center" style={{ position: "absolute", bottom: "0" ,width: "70%"}}>
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1}>
                  &lt;&lt;
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  &gt;&gt;
                </a>
              </li>
            </ul>
          </nav>

          </div>
        </div>
      </div>
    </div>
  </section>


        </>
    )
}
