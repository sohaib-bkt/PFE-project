import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import AdminNav from "../AdminNav";
import Slider from "@Components/AdmSlider";
import axiosClient from "../../../api/axios";

const PendingProducts = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({ });
  const [user , setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosClient.get(`http://localhost:8000/api/dashboard/getProductById/${id}`);
        setProduct(response.data.product);
        setUser(response.data.user);

      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  const rejectProduct = async (product) => {
    const { value: rejectionReason } = await Swal.fire({
      title: "Reason for Rejection",
      html: `
        <div>
          <p>Please provide a reason for rejecting ${product.name}:</p>
          <input type="text" id="rejectionReason" class="swal2-input" placeholder="Enter reason here..." autofocus>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Submit",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      preConfirm: () => {
        return document.getElementById("rejectionReason").value;
      }
    });

    if (rejectionReason) {
      await axiosClient.get(`http://localhost:8000/api/dashboard/rejectProduct/${product.id}`, { params: { reason: rejectionReason } });
      navigate("/products");
    }
  };

  const approveProduct = async (productId) => {
    await axiosClient.get(`http://localhost:8000/api/dashboard/approveProduct/${productId}`);
    navigate("/products");
  };

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNav />
          <div className="container-fluid">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">{user.name}</h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <tbody>
                    <tr>
                        <th>Images:</th>
                        <td style={{textAlign: "center"}}>
                          <div style={{display: "inline-block"}}><Slider images={product.images} image={product.image}/></div>
                        </td>
                      </tr>
                      <tr>
                        <th>Name:</th>
                        <td>{product.name}</td>
                      </tr>
                      <tr>
                        <th>Price:</th>
                        <td>{product.regular_price}</td>
                      </tr>
                      <tr>
                        <th>Description:</th>
                        <td>{product.description}</td>
                      </tr>
                      <tr>
                          <th>Specifications:</th>
                          <td>
                            <table className="table table-bordered">
                              <tbody>
                              {product.specification && JSON.parse(product.specification).map((item, index) => (
                                <tr key={index}>
                                  <td>{item.attribute}</td>
                                  <td>{item.value}</td>
                                </tr>
                              ))}



                              </tbody>
                            </table>
                          </td>
                        </tr>
                    </tbody>
                  </table>
                </div>
                <div className="position-absolute top-0 end-0 mt-2 mr-3">
                  <button className="btn btn-success mr-2" onClick={() => approveProduct(product.id)}>Approve</button>
                  <button className="btn btn-danger" onClick={() => rejectProduct(product)}>Reject</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PendingProducts;
