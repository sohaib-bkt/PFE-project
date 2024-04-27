import React, { useEffect, useState } from 'react';
import axiosClient from '../api/axios';
import UserApi from '../services/api/user/UserApi';

export default function EditInfo() {
    const [activeTab, setActiveTab] = useState('anonce'); // Default active tab is 'desc'

    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
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
    useEffect(() => {
        UserApi.getUser().then((data) => {
            setFormData(data.data);

        });
    }, []);

    const handleSave = () => {
        axiosClient.put(`http://localhost:8000/api/update/${formData.id}`, formData)
            .then(response => {
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
                        <p className="mb-0">Name</p>
                    </div>
                    <div className="col-sm-9">
                        {editMode ? (
                            <input
                                type="text"
                                name="fullName"
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
