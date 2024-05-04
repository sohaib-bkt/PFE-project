import AdminNav from "../AdminNav";
import React, { useEffect } from "react";
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const Users = () => {
  useEffect(() => {
    loadScriptsAndInitializeDataTables();
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

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNav />
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Users Table</h1>
              <Link to="/add-user" className="btn btn-success btn-icon-split"> 
                <span className= "icon text-white-50">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span className="text">Add User</span>
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
                        <th>Email</th>
                        <th>City</th>
                        <th>Utype</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>bourhan</td>
                        <td>bourhan@gmail.com</td>
                        <td>kenitra</td>
                        <td>Admin</td>
                        <td style={{ textAlign: "center" }}>
                          <Link to="/edit-user" className="btn btn-warning btn-circle btn-sm">
                            <FontAwesomeIcon icon={faEdit} />
                          </Link>&nbsp;
                          <a href="#" className="btn btn-danger btn-circle btn-sm">
                            <i className="fas fa-trash"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>youssef</td>
                        <td>youssef@gmail.com</td>
                        <td>mechraa bel ksiri</td>
                        <td>User</td>
                        <td style={{ textAlign: "center" }}>
                          <Link to="/edit-user" className="btn btn-warning btn-circle btn-sm">
                            <FontAwesomeIcon icon={faEdit} />
                          </Link>&nbsp;
                          <a href="#" className="btn btn-danger btn-circle btn-sm">
                            <i className="fas fa-trash"></i>
                          </a>
                        </td>
                      </tr>
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

export default Users;
