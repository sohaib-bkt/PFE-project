import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminNav from '../AdminNav';
import axiosClient from "../../../api/axios";
import Swal from 'sweetalert2';

export default function EditCategory() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        parent_category: '', // Champ pour la catégorie parent
    });

    useEffect(() => {
        fetchCategory();
    }, []);

    const fetchCategory = async () => {
        try {
            const response = await axiosClient.get(`http://localhost:8000/api/dashboard/getCategory/${id}`);
            setFormData({
                name: response.data.category.name,
                parent_category: response.data.category.parent_category, 
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleSave = async () => {
        try {
            await axiosClient.put(`http://localhost:8000/api/dashboard/updateCategory/${id}`, formData);
            
            // Display success message using SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Category Updated Successfully',
                showConfirmButton: false,
                timer: 1500 // Close alert after 1.5 seconds
            });
    
            navigate('/categories');
        } catch (error) {
            // Display error message using SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while updating the category!',
                confirmButtonColor: "#d33"
            });
            console.error(error);
        }
    };
    

    return (
     
                <div className='container-fluid'>
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Edit Category</h1>
                    </div>
                    <div className="col-lg-12">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Category Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        {editMode ? (
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            <p className="text-muted mb-0">{formData.name}</p>
                                        )}
                                    </div>
                                </div>
                                <hr />
                                <div className="row mt-3">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Parent Category</p>
                                    </div>
                                    <div className="col-sm-9">
                                        {editMode ? (
                                            <select
                                                className="form-control"
                                                name="parent_category" 
                                                value={formData.parent_category}
                                                onChange={handleChange}
                                            >
                                                <option value="VET">Vetemant</option>
                                                <option value="INF">Informatique</option>
                                            </select>
                                        ) : (
                                            <p className="text-muted mb-0">{formData.parent_category}</p>
                                        )}
                                    </div>
                                </div>
                                <hr />

                            </div>
                            <div className="card-footer text-muted d-flex justify-content-end" style={{ backgroundColor: '#f8f9fa' }}>
                                {editMode ? (
                                    <>
                                        <button onClick={handleSave} style={{ backgroundColor: '#a01818', borderRadius: '5px', border: 'none', color: 'white', padding: '10px 20px' }}>
                                            Save
                                        </button>
                                        <button className="btn btn-light" onClick={toggleEditMode}>
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <button onClick={toggleEditMode} style={{ backgroundColor: '#a01818', borderRadius: '5px', border: 'none', color: 'white', padding: '10px 20px' }}>
                                        Edit
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
         
    )
}
