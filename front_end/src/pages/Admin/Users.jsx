import AdminNav from "./AdminNav";
import React, { useEffect } from "react";
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
const loadScripts = () => {
    const scripts = [
        "./public/assets/js/datatables-demo.js",
        "./public/assets/js/jquery.dataTables.min.js",
        "./public/assets/js/dataTables.bootstrap4.min.js",
    ];

    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      document.body.appendChild(script);
    });
  };


export default function Users(){

  useEffect(() => {
    loadScripts();
  }, []);
    return(
        <>
              
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <AdminNav/>
              <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Users Table</h1>
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
                      <Link to="/edit-user" class="btn btn-warning btn-circle btn-sm">
                      <FontAwesomeIcon icon={faEdit} />                
                      </Link>&nbsp;               
                      <a href="#" class="btn btn-danger btn-circle btn-sm">
                     <i class="fas fa-trash"></i>
                     </a>                  
                    </td> 
                   </tr>
                    <tr>
                      <td>youssef</td>
                      <td>youssef@gmail.com</td>
                      <td>mechraa bel ksiri</td>
                      <td>User</td>
                      <td style={{ textAlign: "center" }}>
                      <Link to="/edit-user" class="btn btn-warning btn-circle btn-sm">
                      <FontAwesomeIcon icon={faEdit} />                
                      </Link>&nbsp;               
                      <a href="#" class="btn btn-danger btn-circle btn-sm">
                     <i class="fas fa-trash"></i>
                     </a>                  
                    </td>                     </tr>
                 
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