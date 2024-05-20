import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../../../api/axios';
import UserApi from '../../../services/api/user/UserApi';
import AdminNav from '../AdminNav';
import Swal from 'sweetalert2';
import Select from 'react-select';

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    fontSize: '18px',
    color: '#aaa',
  }),
  menu: (provided) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    zIndex: 9999,
    fontSize: '18px',
    color: '#aaa',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#aaa',
    fontSize: '18px',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#aaa',
    fontSize: '18px',
  }),
};

const CountrySelect = ({ selectedCountry, setSelectedCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      'https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code'
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
      });
  }, []);

  return (
    <Select
      options={countries}
      value={selectedCountry}
      onChange={setSelectedCountry}
      styles={customStyles}
      placeholder="Country"
    />
  );
};

export default function EditUser() {
  const { id } = useParams();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    UserApi.getUserById(id).then((data) => {
      setFormData(data.data);
      setSelectedCountry({
        value: data.data.country,
        label: data.data.country,
      });
    });
  }, [id]);

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
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!selectedCountry) newErrors.country = 'Country is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const updatedData = {
      ...formData,
      country: selectedCountry ? selectedCountry.label : '',
    };

    axiosClient
      .put(`http://localhost:8000/api/update/${id}`, updatedData)
      .then((response) => {
        toggleEditMode();
        Swal.fire(
          'Saved!',
          'Your changes have been saved.',
          'success'
        );
      })
      .catch((error) => {
        console.error('Error updating user:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error Updating User',
          text: 'An error occurred while updating the user!',
          confirmButtonColor: "#d33"
        });
      });
  };

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800"> &nbsp; User Profile</h1>
      </div>
      <div className="col-lg-12">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Name</p>
              </div>
              <div className="col-sm-9">
                {editMode ? (
                  <>
                    <input
                      type="text"
                      name="name"
                      className={`form-control ${errors.name && 'is-invalid'}`}
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </>
                ) : (
                  <p className="text-muted mb-0">{formData.name}</p>
                )}
              </div>
            </div>
            <hr />
            {/* Repeat similar code blocks for other fields */}
                     {/* Repeat similar code blocks for other fields */}
                     <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                {editMode ? (
                  <>
                    <input
                      type="tel"
                      name="phone"
                      className={`form-control ${errors.phone && 'is-invalid'}`}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </>
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
                  <>
                    <input
                      type="text"
                      name="address"
                      className={`form-control ${errors.address && 'is-invalid'}`}
                      value={formData.address}
                      onChange={handleChange}
                    />
                    {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                  </>
                ) : (
                  <p className="text-muted mb-0">{formData.address}</p>
                )}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">City</p>
              </div>
              <div className="col-sm-9">
                {editMode ? (
                  <>
                    <input
                      type="text"
                      name="city"
                      className={`form-control ${errors.city && 'is-invalid'}`}
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                  </>
                ) : (
                  <p className="text-muted mb-0">{formData.city}</p>
                )}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Country</p>
              </div>
              <div className="col-sm-9">
                {editMode ? (
                  <>
                    <CountrySelect
                      selectedCountry={selectedCountry}
                      setSelectedCountry={setSelectedCountry}
                    />
                    {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                  </>
                ) : (
                  <p className="text-muted mb-0">{formData.country}</p>
                )}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">User Type</p>
              </div>
              <div className="col-sm-9">
                {editMode ? (
                  <>
                    <select
                      className={`form-control ${errors.utype && 'is-invalid'}`}
                      name="utype"
                      value={formData.utype}
                      onChange={handleChange}
                    >
                      <option value="USR">User</option>
                      <option value="admin">Admin</option>
                    </select>
                    {errors.utype && <div className="invalid-feedback">{errors.utype}</div>}
                  </>
                ) : (
                  <p className="text-muted mb-0">{formData.utype}</p>
                )}
              </div>
            </div>
            <hr />
          </div>
          <div
            className="card-footer text-muted d-flex justify-content-end"
            style={{ backgroundColor: '#f8f9fa' }}
          >
            {editMode ? (
              <>
                <button
                  onClick={handleSave}
                  style={{
                    backgroundColor: '#a01818',
                    borderRadius: '5px',
                    border: 'none',
                    color: 'white',
                    padding: '10px 20px',
                  }}
                >
                  Save
                </button>
                <button className="btn btn-light" onClick={toggleEditMode}>
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={toggleEditMode}
                style={{
                  backgroundColor: '#a01818',
                  borderRadius: '5px',
                  border: 'none',
                  color: 'white',
                  padding: '10px 20px',
                }}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
