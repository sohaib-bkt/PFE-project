import styles from '@Css/andrp.module.css';
import SelectCat from '@Components/Drawer.jsx';
import { useEffect, useState } from 'react';
import axiosClient from '../../api/axios';
import { useCategory } from '../../context/CategoryContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCircleInfo, faCheck } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';

export default function UpdateProduct() {
  const { slug } = useParams();
  const [user, setUser] = useState({});
  const { selectedCategoryy, name } = useCategory();
  const [loading, setLoading] = useState(true);
  const [inputGroups, setInputGroups] = useState([{ attribute: '', value: '' }]);
  const [product, setProduct] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = JSON.parse(window.localStorage.getItem("user"));
        setUser(storedUser);
        setLoading(false);
      } catch (error) {
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  useEffect(() => {
    if (user) {
      const authenticated = localStorage.getItem('authenticated') === 'true';
      if (!authenticated) {
        navigate('/login');
      }
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosClient.get(`http://localhost:8000/api/detail/${slug}`);
        setProduct(response.data);
        setInputGroups(response.data.specification ? JSON.parse(response.data.specification) : [{ attribute: '', value: '' }]);
      } catch (error) {
        console.error('Error fetching product:', error);
        navigate('/profile');
      }
    };

    fetchProduct();
  }, [slug, navigate]);

  if (loading || !product) {
    return (
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)',
        display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999
      }}>
        <HashLoader color="red" loading={loading} size={80} />
      </div>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('category_name', selectedCategoryy);
    formData.append('category', name);
    formData.append('id', product.id);

    const images = document.getElementById('images').files;
    for (let i = 0; i < images.length; i++) {
      formData.append('images[]', images[i]);
    }

    // Validate form fields
    const newErrors = {};
    if (!selectedCategoryy) newErrors.category_name = 'Category is required';
    if (!formData.get('name')) newErrors.name = 'Name is required';
    if (!formData.get('description')) newErrors.description = 'Description is required';
    if (!formData.get('regular_price')) newErrors.regular_price = 'Price is required';
    if (!formData.get('image').name) newErrors.image = 'Main image is required';
    if (!formData.get('images').name) newErrors.images = 'Additional images are required';

    const hasValidSpecification = inputGroups.some(group => group.attribute.trim() !== '' || group.value.trim() !== '');
    if (!hasValidSpecification) newErrors.specification = 'At least one specification is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      await axiosClient.post(`http://localhost:8000/api/product/update`, formData);
      Swal.fire({
        icon: 'success',
        title: 'Product updated successfully!',
        showConfirmButton: false,
        timer: 1500
      });

      navigate('/profile');

    } catch (error) {
      console.error('Error submitting form:', error);
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
          <div className={`card ${styles.hoverableCard}`} role="alert" style={{
            position: 'sticky', top: '90px', border: '1px solid #dee2e6',
            margin: 'auto', width: '90%', marginTop: '59px'
          }}>
            <div className="card-body">
              <h3 className="card-title">
                <FontAwesomeIcon icon={faLightbulb} style={{ color: "#a01818", }} />&nbsp;
                How to define my ad
              </h3>
              <div className="alert" role="alert" style={{
                color: "#000000", backgroundColor: '#f8f9fa', borderRadius: '17px'
              }}>
                <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#a01818", }} />&nbsp;
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
            <div className={`container ${styles.hoverableCard}`} style={{
              border: '1px solid #dee2e6', margin:
              'auto', width: '90%'
            }}>
              <form className="needs-validation" method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="hidden" name="user_id" defaultValue={user.id} />
                <div id="billingAddress" className="row g-4">
                  <h3 className="mb-3 theme-color"></h3>
                  <div className="col-md-6">
                    <label htmlFor="category_name" className="form-label">Categories</label>
                    <SelectCat />
                    {errors.category_name && <span className="text-danger mt-3">{errors.category_name}</span>}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control form-control3" id="name" name="name" defaultValue={product.name} placeholder="Enter Full Name" />
                    {errors.name && <span className="text-danger mt-3">{errors.name}</span>}
                  </div>
                  {inputGroups.map((inputGroup, index) => (
                    <div className="col-md-12" key={index}>
                      <div className="input-group" style={{ border: '1px solid #dee2e6' }}>
                        <input
                          type="text"
                          className="form-control form-control3"
                          name={`specification[${index}][attribute]`}
                          placeholder="Attribute"
                          defaultValue={inputGroup.attribute}
                          onChange={(event) => handleInputChange(index, event)}
                          style={{ border: 'none' }}
                        />
                        <input
                          type="text"
                          className="form-control form-control3"
                          name={`specification[${index}][value]`}
                          placeholder="Value"
                          defaultValue={inputGroup.value}
                          onChange={(event) => handleInputChange(index, event)}
                          style={{ border: 'none' }}
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
                  {errors.specification && <span className="text-danger mt-3">{errors.specification}</span>}
                  <div className="col-md-12">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control form-control3" id="description" name="description" defaultValue={product.description} />
                    {errors.description && <span className="text-danger mt-3">{errors.description}</span>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="image" className="form-label">Main Image</label>
                    <input type="file" className="form-control form-control3" id="image" name="image" placeholder="image" accept="image/png, image/jpeg" />
                    {errors.image && <span className="text-danger mt-3">{errors.image}</span>}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="images" className="form-label">Additional Images</label>
                    <input type="file" className="form-control form-control3" id="images" name="images" placeholder="images" accept="image/png, image/jpeg" multiple />
                    {errors.images && <span className="text-danger mt-3">{errors.images}</span>}
                  </div>

                  <div className="col-md-12">
                    <div className="col-md-6">
                      <label htmlFor="regular_price" className="form-label">Price</label>
                      <input type="number" className="form-control form-control3" id="regular_price" name="regular_price" placeholder="Regular Price" defaultValue={product.regular_price} />
                      {errors.regular_price && <span className="text-danger mt-3">{errors.regular_price}</span>}
                    </div>
                  </div>
                  <button className="btn mt-4" type="submit" style={{
                    fontSize: '14px', borderRadius: '5px', backgroundColor: '#a01818',
                    fontFamily: 'monospace', letterSpacing: '1px', color: '#ffffff',
                    width: '40%', margin: 'auto', marginBottom: '20px'
                  }}>Update Product</button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
