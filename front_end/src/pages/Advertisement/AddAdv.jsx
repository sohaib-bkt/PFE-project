import styles from '@Css/andrp.module.css';
import SelectCat from '@Components/Drawer.jsx';
import { useEffect, useState } from 'react';
import UserApi from '../../services/api/user/UserApi';
import axiosClient from '../../api/axios';
import { useCategory } from '../../context/CategoryContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';


export default function AddAdv() {
  const [user, setUser] = useState({});
  const { selectedCategoryy , name} = useCategory();
  const [inputGroups, setInputGroups] = useState([{ attribute: '', value: '' }]);

  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await UserApi.getUser();
        setUser(userData.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
       
    fetchUser();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('category_name', selectedCategoryy);
    formData.append('category', name);
  
    const images = document.getElementById('images').files;
    for (let i = 0; i < images.length; i++) {
      formData.append('images[]', images[i]);
    }
  
    try {
      const response = await axiosClient.post('http://localhost:8000/api/user/StoreProduct', formData);
      console.log(response.data);
  
      // Show success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Product added successfully!',
        showConfirmButton: false,
        timer: 1500
      });
  
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again.',
      });
    }
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
    <div className='container-fluid-lg'>
    <div className="row">
        <div className="col-md-3 col-md-34">
        <div className={`card ${styles.hoverableCard}`} role="alert" style={{ position: 'sticky', top: '90px', border: '1px solid #dee2e6', margin: 'auto', width: '90%', marginTop: '59px' }}>
          <div className="card-body">
            <h3 className="card-title">
            <FontAwesomeIcon icon={faLightbulb} style={{color: "#a01818",}} />&nbsp;
              How to define my ad
            </h3>
            <div className="alert " role="alert" style={{color: "#000000", backgroundColor: '#f8f9fa',borderRadius: '17px'}}>
            <FontAwesomeIcon icon={faCircleInfo} style={{color: "#a01818",}} />&nbsp;
              &nbsp;&nbsp;Choosing the right category when placing an ad can help increase visibility, relevance and effectiveness, and avoid any potential opt-outs.<br /><br />
              It is important to include a clear and precise mailing address so that potential customers can easily find you.<br /><br />
              Be sure to include a phone number where potential customers can reach you
              Keep your contact details up to date.
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8">
  
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
            <input type="text" className="form-control form-control3" id="name" name="name" placeholder="Enter Full Name" />
        </div>
        {inputGroups.map((inputGroup, index) => (
            <div className="col-md-12" key={index}>
                <div className="input-group" style={{ border: '1px solid #dee2e6' }}>
                    <input
                        type="text"
                        className="form-control form-control3"
                        name={`specification[${index}][attribute]`}
                        placeholder="Attribute"
                        onChange={(event) => handleInputChange(index, event)}
                        style={{ border: 'none' }}
                    />
                    <input
                        type="text"
                        className="form-control form-control3"
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
            <textarea className="form-control form-control3" id="description" name="description" defaultValue={""} />
        </div>
      
        <div className="col-md-6">
            <label htmlFor="image" className="form-label">Main Image</label>
            <input type="file" className="form-control form-control3" id="image" name="image" placeholder="image" required="" accept="image/png, image/jpeg" />
        </div>
        <div className="col-md-6">
            <label htmlFor="images" className="form-label">Additional Images</label>
            <input type="file" className="form-control form-control3" id="images" name="images" placeholder="images" accept="image/png, image/jpeg" multiple />
        </div>
       
        <div className="col-md-12">
        <div className="col-md-6">
            <label htmlFor="regular_price" className="form-label">Price</label>
            <input type="number" className="form-control form-control3" id="regular_price" name="regular_price" placeholder="Regular Price" />
        </div>
        </div>
        <button className="btn mt-4" type="submit" style={{ fontSize: '14px', borderRadius: '5px', backgroundColor: '#a01818',fontFamily: 'monospace', letterSpacing: '1px', color: '#ffffff' ,width: '40%' ,margin: 'auto' , marginBottom: '20px'}}>Add Product</button>
        </div>
       </form>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}
