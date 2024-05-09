import  { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import AdminNav from "../AdminNav";
import { faEye, faTrash , faPlus } from '@fortawesome/free-solid-svg-icons';
import axiosClient from "../../../api/axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0 && !scriptsLoaded) {
      loadScriptsAndInitializeDataTables();
      setScriptsLoaded(true);
    }
  }, [products, scriptsLoaded]);

  const deleteProduct = async (id) => {
    try {
      await axiosClient.delete(`http://localhost:8000/api/dashboard/deleteProduct/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

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

  const fetchProducts = async () => {
    try {
      const response = await axiosClient.get('http://localhost:8000/api/dashboard/getProducts');
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteRejectedProducts = async () => {
    try {
      await axiosClient.delete('http://localhost:8000/api/dashboard/deleteRejectedProducts').then(() => {
        setProducts(products.filter(product => product.featured !== 'rejected'));
      })
      
        
      
    } catch (error) {
      console.error(error);
    }
  };

  const renderActionButtons = (state , id) => {
    switch (state) {
      case 'pending':
        return (
          <Link to={`/pending-product/${id} `} className="btn btn-primary btn-circle btn-sm">
            <FontAwesomeIcon icon={faEye} />
          </Link>
        );
      case 'accepted':
        return (
          <>
            <Link to={`/SingleProduct/${id}`} className="btn btn-primary btn-circle btn-sm">
              <FontAwesomeIcon icon={faEye} />
            </Link>&nbsp;&nbsp;
            <button onClick={() => deleteProduct(id)} className="btn btn-danger btn-circle btn-sm">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </>
        );
      case 'rejected':
        return (
          <button onClick={() => deleteProduct(id)} className="btn btn-danger btn-circle btn-sm">
            <FontAwesomeIcon icon={faTrash} />
          </button>
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
              <button onClick={handleDeleteRejectedProducts} className="btn btn-danger btn-icon-split">
                <span className= "icon text-white-50">
                  <FontAwesomeIcon icon={faTrash} />
                </span>
                <span className="text">Delete Rejected Products</span>
              </button>
            </div>
            <div className="card shadow mb-4">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
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
                          {/* <td><img src={`http://localhost:8000/api/images/products/${product.image}`} alt="Product" /></td> */}
                          <td>{product.name}</td>
                          <td>{product.categorie_product}</td>
                          <td>{product.description}</td>
                          <td>{product.regular_price}</td>
                          <td>
                            <div className={`card bg-${product.featured === 'pending' ? 'primary' : product.featured === 'accepted' ? 'success' : 'danger'} text-white shadow`} style={{ padding: '5px' , textAlign: "center"}}>
                              {product.featured}
                            </div>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            {renderActionButtons(product.featured , product.id)}
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
