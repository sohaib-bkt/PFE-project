import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import axiosClient from "../../../api/axios";
import AdminNav from "../AdminNav";
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  
  useEffect(() => {
    fetchCategories();
  }, []);


  useEffect(() => {
    if (categories.length > 0 && !scriptsLoaded) {
      loadScriptsAndInitializeDataTables();
      setScriptsLoaded(true);
    }
  }, [categories, scriptsLoaded]);

  const fetchCategories = async () => {
    try {
      const response = await axiosClient.get('http://localhost:8000/api/dashboard/getCategories');
      setCategories(response.data.categories);
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

  const deleteCategory = async (id) => {
    try {
      await axiosClient.delete(`http://localhost:8000/api/dashboard/deleteCategory/${id}`);
      setCategories(categories.filter(category => category.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNav />
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Categories Table</h1>
              <Link to="/add-categorie" className="btn btn-success btn-icon-split"> 
                <span className= "icon text-white-50">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span className="text">Add Category</span>
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
                        <th>Name</th>
                        <th>Parent Category</th>
                        <th>Created At</th>                      
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map(category => (
                        <tr key={category.id}>
                          <td>{category.name}</td>
                          <td>{category.parent_category}</td>
                          <td>{new Date(category.created_at).toLocaleDateString()}</td>
                          <td style={{ textAlign: "center" }}>
                            <Link to={`/edit-category/${category.id}`} className="btn btn-warning btn-circle btn-sm">
                              <FontAwesomeIcon icon={faEdit} />
                            </Link>&nbsp;
                            <button className="btn btn-danger btn-circle btn-sm" onClick={() => deleteCategory(category.id)}>
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
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

export default Categories;
