import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import AdminNav from "../AdminNav";
import Slider from "@Components/AdmSlider";
import axiosClient from "../../../api/axios";

const Pending = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosClient.get(`http://localhost:8000/api/dashboard/getPendingProducts`);
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const rejectProduct = async (productId, productName) => {
    try {
        const { value: rejectionReason } = await Swal.fire({
            title: `Reason for Rejection`,
            html: `
                <div>
                    <p>Please provide a reason for rejecting:</p>
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
            await axiosClient.get(`http://localhost:8000/api/dashboard/rejectProduct/${productId}`, { params: { reason: rejectionReason } });
            setProducts(products.filter((product) => product.id !== productId));

            // Display success message using SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Product Rejected Successfully',
                showConfirmButton: false,
                timer: 1500 // Close alert after 1.5 seconds
            });
        }
    } catch (error) {
        // Display error message using SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'An error occurred while rejecting the product!',
            confirmButtonColor: "#d33"
        });
    }
};

const approveProduct = async (productId) => {
    try {
        await axiosClient.get(`http://localhost:8000/api/dashboard/approveProduct/${productId}`);
        setProducts(products.filter((product) => product.id !== productId));

        // Display success message using SweetAlert
        Swal.fire({
            icon: 'success',
            title: 'Product Approved Successfully',
            showConfirmButton: false,
            timer: 1500 // Close alert after 1.5 seconds
        });
    } catch (error) {
        // Display error message using SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'An error occurred while approving the product!',
            confirmButtonColor: "#d33"
        });
    }
};


  return (
    <>
     
          <div className="container-fluid">
          <h1 className="h3 mb-2 text-gray-800">Pending Products</h1>
            {products.map((product) => (
              <div key={product.id} className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">{product.name}</h6>
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
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <tbody>
                              {JSON.parse(product.specification).map((item, index) => (
                                <tr key={index}>
                                    <td>{item.attribute}</td>
                                    <td>{item.value}</td>
                                </tr>
                                ))}
                              </tbody>
                            </table>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="position-absolute top-0 end-0 mt-2 mr-3">
                    <button className="btn btn-success mr-2" onClick={() => approveProduct(product.id)}>Approve</button>
                    <button className="btn btn-danger" onClick={() => rejectProduct(product.id, product.name)}>Reject</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
      
    </>
  );
}

export default Pending;
