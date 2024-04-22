import React, { useState } from 'react';

export default function Profile() {
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
        // Handle save logic here, like sending data to server
        console.log('Saving data:', formData);
        toggleEditMode();
    };

    return (
        <>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-body text-center" style={{ backgroundColor: '#f8f9fa' }}>
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                alt="avatar"
                                className="rounded-circle img-fluid"
                                style={{ width: 150 }}
                            />
                            <h5 className="my-3">John Smith</h5>
                            <p className="text-muted mb-1">Full Stack Developer</p>
                            <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
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
            </div>
        </>
    );
}
