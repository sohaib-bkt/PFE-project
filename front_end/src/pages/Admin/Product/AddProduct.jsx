import styles from '@Css/andrp.module.css';
import SelectCat from '@Components/Drawer.jsx';
import { useEffect, useState } from 'react';
import UserApi from '@Services/UserApi';
import axiosClient from '@/api/axios.js';
import { useCategory } from '@Context/CategoryContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import AdminNav from '../AdminNav';


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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('category_name', selectedCategoryy);
    formData.append('category', name);
    axiosClient.post('http://localhost:8000/api/user/StoreProduct', formData)
      .then((response) => {      
        console.log(response.data);
      })
      .catch((error) => {
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
                      <input type="text" className="form-control form-control3" id="name" name="name" placeholder="Enter Full Name" />
                    </div>
                    <div className="col-md-12">
                      <span className='col-md-6'>               
                         <label htmlFor="split_input" className="form-label">Specification</label>
                        </span>

                
               
                {inputGroups.map((inputGroup, index) => (
                    <div className="col-md-12" key={index}>
                      <div className="input-group" style={{ border: '1px solid #dee2e6' }}>
                        <input
                          type="text"
                          className="form-control form-control3"
                          name={`split_input_${index}_1`}
                          placeholder="Attribute"
                          onChange={(event) => handleInputChange(index, event)}
                          style={{ border: 'none' }}
                        />
                         <input
                          type="text"
                          className="form-control form-control3"
                          name={`split_input_${index}_2`}
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
                   </div>
                    <div className="col-md-12">
                      <label htmlFor="description" className="form-label">Description</label>
                      <textarea className="form-control form-control3" id="description" name="description" defaultValue={""} />
                    </div>
              
                    <div className="col-md-6">
                    <label htmlFor="image" className="form-label">Main Image</label>
                    <input type="file" className="form-control" id="image" name="image" placeholder="image" required="" accept="image/png, image/jpeg" multiple />
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="image" className="form-label">Additional Images</label>
                    <input type="file" className="form-control" id="image" name="image" placeholder="image" required="" accept="image/png, image/jpeg" multiple />
                  </div>
              
                  <div className="col-md-12">
                  <div className="col-md-6">
                    <label htmlFor="regular_price" className="form-label">Price</label>
                    <input type="number" className="form-control form-control3" id="regular_price" name="regular_price" placeholder="Regular Price" />
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
