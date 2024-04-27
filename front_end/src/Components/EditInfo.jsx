import React, { useState } from 'react';

export default function EditInfo() {
    const [activeTab, setActiveTab] = useState('anonce'); // Default active tab is 'desc'

    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        fullName: 'Johnatan Smith',
        email: 'example@example.com',
        phone: '(097) 234-5678',
        mobile: '(098) 765-4321',
        address: 'Bay Area, San Francisco, CA',
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
        axios.put(`/api/users/${userId}`, formData)
            .then(response => {
                console.log(response.data.message);
                toggleEditMode();
            })
            .catch(error => {
                console.error('Error updating user:', error);
            });
    };
    return (
        <div className="col-lg-12">
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                        {editMode ? (
                            <input
                                type="text"
                                name="fullName"
                                className="form-control"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        ) : (
                            <p className="text-muted mb-0">{formData.fullName}</p>
                        )}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                        {editMode ? (
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        ) : (
                            <p className="text-muted mb-0">{formData.email}</p>
                        )}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                        {editMode ? (
                            <input
                                type="tel"
                                name="phone"
                                className="form-control"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        ) : (
                            <p className="text-muted mb-0">{formData.phone}</p>
                        )}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                        {editMode ? (
                            <input
                                type="tel"
                                name="mobile"
                                className="form-control"
                                value={formData.mobile}
                                onChange={handleChange}
                            />
                        ) : (
                            <p className="text-muted mb-0">{formData.mobile}</p>
                        )}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                        {editMode ? (
                            <input
                                type="text"
                                name="address"
                                className="form-control"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        ) : (
                            <p className="text-muted mb-0">{formData.address}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="card-footer text-muted d-flex justify-content-end" style={{ backgroundColor: '#f8f9fa' }}>
                {editMode ? (
                    <>
                        <button className="btn btn-primary" onClick={handleSave}>
                            Save
                        </button>
                        <button className="btn btn-light" onClick={toggleEditMode}>
                            Cancel
                        </button>
                    </>
                ) : (
                    <button className="btn btn-primary" onClick={toggleEditMode}>
                        Edit
                    </button>
                )}
            </div>
        </div>
    </div>
    )
}
