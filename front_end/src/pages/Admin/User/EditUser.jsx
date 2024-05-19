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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, save it!'
    }).then((result) => {
      if (result.isConfirmed) {
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
          });
      }
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
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">City</p>
              </div>
              <div className="col-sm-9">
                {editMode ? (
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    value={formData.city}
                    onChange={handleChange}
                  />
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
                  <CountrySelect
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                  />
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
                  <select
                    className="form-control"
                    name="utype"
                    value={formData.utype}
                    onChange={handleChange}
                  >
                    <option value="USR">User</option>
                    <option value="admin">Admin</option>
                  </select>
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
