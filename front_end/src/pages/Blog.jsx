
import Card from "@Components/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../api/axios";
import SectionStart from "@Components/SectionStart"
import profile from "@Assets/images/user.svg.png";

export default function Blog() {
  const [data, setData] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axiosClient.get(`http://localhost:8000/api/user/${id}/products`).then((response) => {
      setData(response.data);
    });
  }, []);
    return (
        <>
                   <SectionStart title="Profile" activeBreadcrumb="Profile"/>

  <section
    id="portfolio" className="left-sidebar-section masonary-blog-section section-b-space">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-3 col-md-5 ">
          <div className="left-side">
            <div className="popular-post">
                <div className="card-body text-center">
                  <img
                    src={profile}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />
                  <h5 className="my-3">{data.user?.name}</h5>
                  <p className="text-muted mb-1">{data.user?.country} , {data.user?.city}</p>
                  <p className="text-muted mb-4">{data.user?.address}</p>
                  <div className="d-flex justify-content-center mb-2">
                  </div>
                </div>
                  
                <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                  
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <FontAwesomeIcon icon={faPhone} />
                      <p className="mb-0">{data.user?.phone}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-google fa-lg" style={{ color: "#dd4b39" }} />
                      <p className="mb-0">{data.user?.email}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }} />
                      <a href="https://www.facebook.com" target="_blank"><p className="mb-0">{data.user?.name}.com</p></a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-7 order-md-1 ratio3_2">
          <div className="row g-4">
            {data.products?.map((product) => (
              <Card product={product} key={product.id} />
            ))}
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
