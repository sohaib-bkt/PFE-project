import React, { useState } from 'react';
import AdminNav from '../AdminNav';

export default function EditCategory() {
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: 'Category Name',
        parentCategory: 'Parent Category Name',
        active: true
    });

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

    const handleSave = () => {
        // Add logic to save changes to the category
        console.log('Saving changes:', formData);
    };

    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <AdminNav />
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
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Parent Category</p>
                                    </div>
                                    <div className="col-sm-9">
                                        {editMode ? (
                                           <select
                                           className="form-control"
                                           value={formData.parentCategory}
                                           onChange={handleChange}
                                       >
                                           <option value="">Select Category</option>
                                           <option value="electronics">Electronics</option>
                                           <option value="clothes">Clothes</option>
                                       </select>
                                        ) : (
                                            <p className="text-muted mb-0">{formData.parentCategory}</p>
                                        )}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Active</p>
                                    </div>
                                    <div className="col-sm-9">
                                        {editMode ? (
                                            <select
                                                name="active"
                                                className="form-control"
                                                value={formData.active}
                                                onChange={handleChange}
                                            >
                                                <option value={true}>Active</option>
                                                <option value={false}>Inactive</option>
                                            </select>
                                        ) : (
                                            <p className="text-muted mb-0">{formData.active ? 'Active' : 'Inactive'}</p>
                                        )}
                                    </div>
                                </div>
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
            </div>
        </div>
    )
}
