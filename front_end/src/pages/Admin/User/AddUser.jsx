import { useState } from 'react';
import AdminNav from '../AdminNav';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../../api/axios';

export default function AddUser() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        password: '',
        country: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleAddUser = async () => {
        const data = {
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            password: formData.password,
            country: formData.country,
        };
    
        try {
            axiosClient.post('http://localhost:8000/api/dashboard/addUser', data);
            navigate("/users");
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
                        <h1 className="h3 mb-0 text-gray-800"> &nbsp; Add User</h1>
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
                                            name="fullName"
                                            className="form-control"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Phone</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Address</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            name="address"
                                            className="form-control"
                                            value={formData.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">City</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            name="city"
                                            className="form-control"
                                            value={formData.city}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <hr />
                                
                            
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Country</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            name="country"
                                            className="form-control"
                                            value={formData.country}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Password</p>
                                </div>
                                <div className="col-sm-9">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            </div>
        
                            
                            <div className="card-footer text-muted d-flex justify-content-end" style={{ backgroundColor: '#f8f9fa' }}>
                                <button onClick={handleAddUser} style={{ backgroundColor: '#a01818', borderRadius: '5px', border: 'none', color: 'white', padding: '10px 20px' }}>
                                    Add User
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
