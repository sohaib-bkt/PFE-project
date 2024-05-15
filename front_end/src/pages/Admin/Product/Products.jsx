import  { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import AdminNav from "../AdminNav";
import { faEye, faTrash , faPlus } from '@fortawesome/free-solid-svg-icons';
import axiosClient from "../../../api/axios";
import Swal from 'sweetalert2';

const Products = () => {
  const styles = {
    tableCell: {
      textAlign: "center",
      alignContent: "center",
    }
  };
  
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



  const loadScriptsAndInitializeDataTables = () => {
    // Load jQuery
    const jqueryScript = document.createElement('script');
    jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    jqueryScript.onload = () => {
      const dataTablesScript = document.createElement('script');
      dataTablesScript.src = "https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js";
      dataTablesScript.onload = () => {
        const dataTablesBootstrapScript = document.createElement('script');
        dataTablesBootstrapScript.src = "https://cdn.datatables.net/1.11.5/js/dataTables.bootstrap4.min.js";
        dataTablesBootstrapScript.onload = () => {
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
  const deleteProduct = async (id, state) => {
    if (state === 'accepted') {
      // Show confirmation dialog using SweetAlert
      Swal.fire({
        title: 'Are you sure?',
        text: 'You are about to delete a product with state "accepted". This action cannot be undone!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axiosClient.delete(`http://localhost:8000/api/dashboard/deleteProduct/${id}`);
            setProducts(products.filter(product => product.id !== id));
            Swal.fire({
              icon: 'success',
              title: 'Product Deleted Successfully',
              showConfirmButton: false,
              timer: 1500 // Close alert after 1.5 seconds
            });
          } catch (error) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'An error occurred while deleting this product!',
              confirmButtonColor: "#d33"
            });
            console.error(error);
          }
        }
      });
    } else {
      try {
        await axiosClient.delete(`http://localhost:8000/api/dashboard/deleteProduct/${id}`);
        setProducts(products.filter(product => product.id !== id));
        Swal.fire({
          icon: 'success',
          title: 'Product Deleted Successfully',
          showConfirmButton: false,
          timer: 1500 // Close alert after 1.5 seconds
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error occurred while deleting this product!',
          confirmButtonColor: "#d33"
        });
        console.error(error);
      }
    }
  };
  const handleDeleteRejectedProducts = async () => {
    try {
            await axiosClient.delete('http://localhost:8000/api/dashboard/deleteRejectedProducts');
            setProducts(products.filter(product => product.featured !== 'rejected'));

            // Display success message using SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Rejected Products Deleted Successfully',
                showConfirmButton: false,
                timer: 1500 // Close alert after 1.5 seconds
            });
    } catch (error) {
        // Display error message using SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'An error occurred while deleting rejected products!',
            confirmButtonColor: "#d33"
        });
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
            <button onClick={() => deleteProduct(id,'accepted')} className="btn btn-danger btn-circle btn-sm">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </>
        );
      case 'rejected':
        return (
          <button onClick={() => deleteProduct(id,'rejected')} className="btn btn-danger btn-circle btn-sm">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <>
     
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Products Table</h1>
            </div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <Link to="/add-product" className="btn btn-success btn-icon-split" style={{marginTop: "10px"}}> 
                <span className= "icon text-white-50">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span className="text">Add Product</span>
              </Link>
              <button onClick={handleDeleteRejectedProducts} className="btn btn-danger btn-icon-split" style={{marginTop: "10px"}}>
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
                        <th style={styles.tableCell} >Image</th>
                        <th style={styles.tableCell} >Name</th>
                        <th style={styles.tableCell} >Category</th>
                        <th style={styles.tableCell} >Short Description</th>
                        <th style={styles.tableCell} >Price</th>
                        <th style={styles.tableCell} >State</th>
                        <th style={styles.tableCell} >Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Render product rows */}
                      {products.map(product => (
                        <tr key={product.id}>
                        <td style={styles.tableCell}><img src={`http://localhost:8000/api/images/products/${product.image}`} alt="Product" style={{ width: "70px" , height: "70px" , objectFit: "cover" }} /></td>
                          <td style={styles.tableCell}>{product.name}</td>
                          <td style={styles.tableCell}>{product.categorie_product}</td>
                          <td style={styles.tableCell}>{product.description}</td>
                          <td style={styles.tableCell}>{product.regular_price}</td>
                          <td style={styles.tableCell}>
                          <div className={`card bg-${product.featured === 'pending' ? 'primary' : product.featured === 'accepted' ? 'success' : 'danger'} text-white shadow`} style={{ padding: '5px' , textAlign: "center" }}>
                              {product.featured}
                            </div>
                          </td>
                          <td style={styles.tableCell}>
                            {renderActionButtons(product.featured, product.id)}
                          </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
      
    </>
  )
}

export default Products;
