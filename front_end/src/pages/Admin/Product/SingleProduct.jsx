import React, { useEffect, useState } from "react";
import AdminNav from "../AdminNav";
import Slider from "@Components/AdmSlider";
import Swal from 'sweetalert2'; // Import SweetAlert library

const PendingProducts = () => {
  // Sample data for pending products
  const [pendingProducts, setPendingProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: "$100",
      shortDescription: "Short description for Product 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lacus eget mi vestibulum tincidunt.",
      specifications: [
        { attribute: "Color", value: "Red" },
        { attribute: "Size", value: "Medium" },
        { attribute: "Weight", value: "10 lbs" }
      ],
      image: "image_url_1"
    },
  ]);

  // Function to handle approval action
  const approveProduct = (productId) => {
    // Filter out the product with the given id and update the state
    const updatedProducts = pendingProducts.filter(product => product.id !== productId);
    setPendingProducts(updatedProducts);
    // Perform further actions if needed, such as sending data to the server
  };

  // Function to handle rejection action
  const rejectProduct = (product) => {
    Swal.fire({
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
    }).then((result) => {
      if (result.isConfirmed) {
        const reason = result.value;
        // Handle rejection with reason here
        console.log("Product Rejected with Reason:", reason);
        // Remove the rejected product from the list
        const updatedProducts = pendingProducts.filter(p => p.id !== product.id);
        setPendingProducts(updatedProducts);
        // You can perform further actions here, such as submitting the rejection reason to the server
      }
    });
  };

  return (
    <>
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <AdminNav />
        <div className="container-fluid">
  <div className="card shadow mb-4">
    <div className="card-header py-3">
      <h6 className="m-0 font-weight-bold text-primary">User name </h6>
    </div>
    <div className="card-body">
      <div className="text-center" >
      <Slider/>
      </div>
    
  {pendingProducts.map(product => (
              
                <>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <tbody>
                    
                      <tr>
                        <th>Name:</th>
                        <td>{product.name}</td>
                      </tr>
                      <tr>
                        <th>Price:</th>
                        <td>{product.price}</td>
                      </tr>
                      <tr>
                        <th>Short Description:</th>
                        <td>{product.shortDescription}</td>
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
                                {product.specifications.map(spec => (
                                  <tr key={`${spec.attribute}-${spec.value}`}>
                                    <th>{spec.attribute}</th>
                                    <td>{spec.value}</td>
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
                  <button className="btn btn-danger" onClick={() => rejectProduct(product)}>Delete</button>
                </div>
                </>
          ))}
</div>
</div>
  </div>

      </div>
    </div>
 
    </>
  );
}

export default PendingProducts;
