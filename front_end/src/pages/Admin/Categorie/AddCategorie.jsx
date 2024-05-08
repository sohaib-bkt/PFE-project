import { useState } from 'react';
import AdminNav from '../AdminNav';
import axiosClient from "../../../api/axios";
import { useNavigate } from 'react-router-dom';

export default function AddSubcategory() {
    
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubcategoryChange = (e) => {
        setName(e.target.value);
    };

    const handleAddSubcategory = async () => {
        try {
            await axiosClient.post('http://localhost:8000/api/dashboard/addCategory', { name });
            navigate("/categories");
        } catch (error) {
            console.error(error);
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
