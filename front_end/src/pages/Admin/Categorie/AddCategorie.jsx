import { useState } from 'react';
import AdminNav from '../AdminNav';
import axiosClient from "../../../api/axios";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AddSubcategory() {
    
    const [name, setName] = useState('');
    const [parent_category, setParent_category] = useState(''); 
    const navigate = useNavigate();

    const handleSubcategoryChange = (e) => {
        setName(e.target.value);
    };

    const handleParentCategoryChange = (e) => {
        setParent_category(e.target.value);
    };


    const handleAddSubcategory = async () => {
        try {
            await axiosClient.post('http://localhost:8000/api/dashboard/addCategory', { name, parent_category });
    
            // Display success message using SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Category Added Successfully',
                showConfirmButton: false,
                timer: 1500 // Close alert after 1.5 seconds
            });
    
            navigate("/categories");
        } catch (error) {
            // Display error message using SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Error Adding Category',
                text: 'An error occurred while adding the category!',
                confirmButtonColor: "#d33"
            });
            console.error("Error adding category:", error);
        }
    };
    
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <AdminNav />
                <div className='container-fluid'>
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800"> &nbsp; Add A Category</h1>
                    </div>
                    <div className="col-lg-12">
                        <div className="card mb-4">
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={handleSubcategoryChange}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3"> 
                                    <div className="col-sm-3">
                                        <p className="mb-0">Parent Category</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-control"
                                            value={parent_category}
                                            onChange={handleParentCategoryChange}
                                        >
                                            <option value="">Select Parent Category</option>
                                            <option value="INF">Informatique</option>
                                            <option value="VET">Vetemant</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-muted d-flex justify-content-end" style={{ backgroundColor: '#f8f9fa' }}>
                                <button onClick={handleAddSubcategory} style={{ backgroundColor: '#a01818', borderRadius: '5px', border: 'none', color: 'white', padding: '10px 20px' }}>
                                    Add Subcategory
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
