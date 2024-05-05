import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import AdminNav from "../AdminNav";
import { faEye, faTrash , faPlus } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadScriptsAndInitializeDataTables();
    // Fetch products data
    fetchProducts();
  }, []);

  const loadScriptsAndInitializeDataTables = () => {
    // Load jQuery
    const jqueryScript = document.createElement('script');
    jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    jqueryScript.onload = () => {
      console.log("jQuery loaded successfully");
      // Load DataTables
      const dataTablesScript = document.createElement('script');
      dataTablesScript.src = "https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js";
      dataTablesScript.onload = () => {
        console.log("DataTables loaded successfully");
        // Load DataTables Bootstrap integration
        const dataTablesBootstrapScript = document.createElement('script');
        dataTablesBootstrapScript.src = "https://cdn.datatables.net/1.11.5/js/dataTables.bootstrap4.min.js";
        dataTablesBootstrapScript.onload = () => {
          console.log("DataTables Bootstrap integration loaded successfully");
          // Initialize DataTables
          $('#dataTable').DataTable();
        };
        document.body.appendChild(dataTablesBootstrapScript);
      };
      document.body.appendChild(dataTablesScript);
    };
    document.body.appendChild(jqueryScript);
  };

  const fetchProducts = () => {
    // Replace this with your API call to fetch products data
    const sampleProducts = [
      {
        id: 1,
        name: "Product 1",
        subcategory: "Subcategory 1",
        description: "Lorem ipsum dolor sit amet",
        price: "$100.00",
        state: "Pending"
      },
      {
        id: 2,
        name: "Product 2",
        subcategory: "Subcategory 2",
        description: "Lorem ipsum dolor sit amet",
        price: "$200.00",
        state: "Approved"
      },
      {
        id: 3,
        name: "Product 3",
        subcategory: "Subcategory 3",
        description: "Lorem ipsum dolor sit amet",
        price: "$300.00",
        state: "Rejected"
      }
    ];
    setProducts(sampleProducts);
  };

  const handleDeleteRejectedProducts = () => {
    // Filter out rejected products and delete them
    const filteredProducts = products.filter(product => product.state !== 'Rejected');
    setProducts(filteredProducts);
    // Here you can add your logic to actually delete the products from your backend
  };
  const renderActionButtons = (state) => {
    switch (state) {
      case 'Pending':
        return (
          <Link to="/pending-product" className="btn btn-primary btn-circle btn-sm">
            <FontAwesomeIcon icon={faEye} />
          </Link>
        );
      case 'Approved':
        return (
          <>
            <Link to="/SingleProduct" className="btn btn-primary btn-circle btn-sm">
              <FontAwesomeIcon icon={faEye} />
            </Link>&nbsp;&nbsp;
            <a href="#" className="btn btn-danger btn-circle btn-sm">
              <FontAwesomeIcon icon={faTrash} />
            </a>
          </>
        );
      case 'Rejected':
        return (
          <a href="#" className="btn btn-danger btn-circle btn-sm">
            <FontAwesomeIcon icon={faTrash} />
          </a>
        );
      default:
        return null;
    }
  };
  

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNav />
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Products Table</h1>
            </div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <Link to="/add-product" className="btn btn-success btn-icon-split"> 
                <span className= "icon text-white-50">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span className="text">Add Product</span>
              </Link>
              <Link onClick={handleDeleteRejectedProducts} className="btn btn-danger btn-icon-split">
                <span className= "icon text-white-50">
                  <FontAwesomeIcon icon={faTrash} />
                </span>
                <span className="text">Delete Rejected Products</span>
              </Link>
            </div>
            
            
            <div className="card shadow mb-4">
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Subcategory</th>
                        <th>Short Description</th>
                        <th>Price</th>
                        <th>State</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Render product rows */}
                      {products.map(product => (
                        <tr key={product.id}>
                          <td><img src="product_image_url" alt="Product" /></td>
                          <td>{product.name}</td>
                          <td>{product.subcategory}</td>
                          <td>{product.description}</td>
                          <td>{product.price}</td>
                          <td><div className={`card bg-${product.state === 'Pending' ? 'primary' : product.state === 'Approved' ? 'success' : 'danger'} text-white shadow`} style={{ padding: '5px' , textAlign: "center"}}>
                            {product.state}
                          </div></td>
                          <td style={{ textAlign: "center" }}>
                            {renderActionButtons(product.state)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products;
