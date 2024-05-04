import React, { useState } from 'react';
import AdminNav from '../AdminNav';

export default function AddSubcategory() {
    const [category, setCategory] = useState('');
    const [subcategoryName, setSubcategoryName] = useState('');

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubcategoryChange = (e) => {
        setSubcategoryName(e.target.value);
    };

    const handleAddSubcategory = () => {
        // Add logic to submit category and subcategoryName to the server
        console.log('Adding subcategory:', category, subcategoryName);
    };

    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <AdminNav />
                <div className='container-fluid'>
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800"> &nbsp; Add Subcategory</h1>
                    </div>
                    <div className="col-lg-12">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Category</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-control"
                                            value={category}
                                            onChange={handleCategoryChange}
                                        >
                                            <option value="">Select Category</option>
                                            <option value="electronics">Electronics</option>
                                            <option value="clothes">Clothes</option>
                                        </select>
                                    </div>
                                </div>
          
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Subcategory Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={subcategoryName}
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
