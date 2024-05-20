import { useState, useEffect } from "react";
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import axiosClient from "../../../api/axios";
import AdminNav from "../AdminNav";
import HashLoader from "react-spinners/HashLoader";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
    
  }, []);


  useEffect(() => {
    if (users.length > 0 && !scriptsLoaded) {
      loadScriptsAndInitializeDataTables();
      setScriptsLoaded(true);
    }
  }, [users, scriptsLoaded]);

  const fetchUsers = async () => {
    try {
      const response = await axiosClient.get('http://localhost:8000/api/dashboard/getUsers');
      setUsers(response.data.users);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteUser = async (id) => {
    try {
      // Show confirmation dialog using SweetAlert
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });
  
      // If user confirms deletion
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        // Remove user from the local state
        setUsers(users.filter(user => user.id !== id));
  
        // Make API call to delete user
        await axiosClient.delete(`http://localhost:8000/api/dashboard/deleteUser/${id}`);
  
        // Show success message using SweetAlert
      
      }
    } catch (error) {
      console.error(error);
      // Handle error if needed
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
  if (loading) {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
        <HashLoader color="red" loading={loading} size={80} />
      </div>
    );
  }
  if (loading) {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
        <HashLoader color="red" loading={loading} size={80} />
      </div>
    );
  }

  return (
    <>
    
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Users Table</h1>
              <Link to="/add-user" className="btn btn-success btn-icon-split"> 
                <span className="icon text-white-50">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span className="text">Add User</span>
              </Link>
            </div>
            
            <div className="card shadow mb-4">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Utype</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map(user => (
                        <tr key={user.id}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.utype}</td>
                          <td style={{ textAlign: "center" }}>
                            <Link to={`/edit-user/${user.id}`} className="btn btn-warning btn-circle btn-sm">
                              <FontAwesomeIcon icon={faEdit} />
                            </Link>&nbsp;
                            <button className="btn btn-danger btn-circle btn-sm" onClick={() => deleteUser(user.id)}>
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
   
    </>
  );
}

export default Users;
