import React, { useState } from 'react';

export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'oldPassword') {
            setOldPassword(value);
        } else if (name === 'newPassword') {
            setNewPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!oldPassword || !newPassword || !confirmPassword) {
            setErrorMessage('All fields are required');
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        // Here you can add your logic to send the data to the server for password change
        console.log('Submitting password change:', { oldPassword, newPassword });

        setSuccessMessage('Password changed successfully');
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setErrorMessage('');
    };

    return (
        <div className="col-lg-12">
            <div className="card mb-4">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="oldPassword" className="form-label">Old Password</label>
                            <input
                                type="password"
                                name="oldPassword"
                                className="form-control"
                                value={oldPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">New Password</label>
                            <input
                                type="password"
                                name="newPassword"
                                className="form-control"
                                value={newPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                                value={confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                        {successMessage && <div className="alert alert-success">{successMessage}</div>}
                    </form>
                </div>
                <div className="card-footer text-muted d-flex justify-content-end" style={{ backgroundColor: '#f8f9fa' }}>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Change Password</button>
                </div>
            </div>
        </div>
    );
}
