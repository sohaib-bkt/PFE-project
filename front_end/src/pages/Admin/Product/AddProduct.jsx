import styles from '@Css/andrp.module.css';
import SelectCat from '@Components/Drawer.jsx';
import { useEffect, useState } from 'react';
import axiosClient from '@/api/axios.js';
import { useCategory } from '@Context/CategoryContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import AdminNav from '../AdminNav';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function AddAdv() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { selectedCategoryy, name } = useCategory();
  const [inputGroups, setInputGroups] = useState([{ attribute: '', value: '' }]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = JSON.parse(window.localStorage.getItem("user"));
        setUser(userData.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);


  const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      formData.append('category_name', selectedCategoryy);
      formData.append('category', name);
      const images = document.getElementById('images').files;
      for (let i = 0; i < images.length; i++) {
          formData.append('images[]', images[i]);
      }
      axiosClient.post('http://localhost:8000/api/dashboard/addProduct', formData)
        .then((response) => {
          // Display success message using SweetAlert
          Swal.fire({
              icon: 'success',
              title: 'Product Added Successfully',
              showConfirmButton: false,
              timer: 1500 // Close alert after 1.5 seconds
          });
          navigate('/products');

        })
        .catch((error) => {
          // Display error message if product addition fails
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Failed to add product!',
              showConfirmButton: false,
              timer: 1500 // Close alert after 1.5 seconds
          });
          console.error('Error submitting form:', error);
        });
  };
  

  const handleAddInputGroup = () => {
    setInputGroups([...inputGroups, { attribute: '', value: '' }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedInputGroups = [...inputGroups];
    updatedInputGroups[index][name] = value;
    setInputGroups(updatedInputGroups);
  };
  return (
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">

      <AdminNav />

  
        <section className="section-b-space">
        
          <div className={`container ${styles.hoverableCard}`} style={{ border: '1px solid #dee2e6', margin: 'auto', width: '90%' }}>
            
          <form className="needs-validation" method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
    <input type="hidden" name="user_id" defaultValue={user.id} />
    <div id="billingAddress" className="row g-4">
        <h3 className="mb-3 theme-color"></h3>
        <div className="col-md-6">
            <label htmlFor="category_name" className="form-label">Categories</label>
            <SelectCat />
        </div>              
        <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control " id="name" name="name" placeholder="Enter Full Name" />
        </div>
        {inputGroups.map((inputGroup, index) => (
            <div className="col-md-12" key={index}>
                <div className="input-group" style={{ border: '1px solid #dee2e6' }}>
                    <input
                        type="text"
                        className="form-control "
                        name={`specification[${index}][attribute]`}
                        placeholder="Attribute"
                        onChange={(event) => handleInputChange(index, event)}
                        style={{ border: 'none' }}
                    />
                    <input
                        type="text"
                        className="form-control "
                        name={`specification[${index}][value]`}
                        placeholder="Value"
                        onChange={(event) => handleInputChange(index, event)}
                        style={{ border: 'none'}}
                    />
                    {index === inputGroups.length - 1 && (
                        <button
                            style={{ border: 'none', backgroundColor: 'transparent' }}
                            onClick={handleAddInputGroup}
                        >
                            <FontAwesomeIcon icon={faCheck} style={{ color: '#a01818', width: '20px', height: '20px' }} />
                        </button>
                    )}
                </div>
            </div>
        ))}
        <div className="col-md-12">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control " id="description" name="description" defaultValue={""} />
        </div>
      
        <div className="col-md-6">
            <label htmlFor="image" className="form-label">Main Image</label>
            <input type="file" className="form-control " id="image" name="image" placeholder="image" required="" accept="image/png, image/jpeg" />
        </div>
        <div className="col-md-6">
            <label htmlFor="images" className="form-label">Additional Images</label>
            <input type="file" className="form-control " id="images" name="images" placeholder="images" accept="image/png, image/jpeg" multiple />
        </div>
       
        <div className="col-md-12">
        <div className="col-md-6">
            <label htmlFor="regular_price" className="form-label">Price</label>
            <input type="number" className="form-control " id="regular_price" name="regular_price" placeholder="Regular Price" />
        </div>
        </div>
        <div className="card-footer text-muted d-flex justify-content-end" style={{ backgroundColor: '#f8f9fa' }}>
           <button style={{ backgroundColor: '#a01818', borderRadius: '5px', border: 'none', color: 'white', padding: '10px 20px' }}>
             Add Product
          </button>
        </div>          
        </div>
       </form>
          </div>
        </section>
    </div>
    </div>
  );
}
