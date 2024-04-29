import styles from '@Css/andrp.module.css';
import SelectCat from '@Components/Drawer.jsx';
import { useEffect, useState } from 'react';
import UserApi from '../../services/api/user/UserApi';
import axiosClient from '../../api/axios';
import { useCategory } from '../../context/CategoryContext';


export default function AddAdv() {
  const [user, setUser] = useState({});
  const { selectedCategoryy , name} = useCategory();
  
  
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

  return (
    <div className="row">
      <div className="col-md-8">
        <section className="section-b-space">
          <div className={`container ${styles.hoverableCard}`} style={{ border: '1px solid #dee2e6', margin: 'auto', width: '90%' }}>
            <form className="needs-validation" method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
              <input type="hidden" name="user_id" defaultValue={user.id} />
              <div id="billingAddress" className="row g-4">
                <h3 className="mb-3 theme-color">Billing address</h3>
                <div className="col-md-6">
                  <label htmlFor="category_name" className="form-label">Categories</label>
                  <SelectCat />
                </div>              
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control" id="name" name="name" placeholder="Enter Full Name" />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="description" className="form-label">Description</label>
                      <textarea className="form-control" id="description" name="description" defaultValue={""} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="regular_price" className="form-label">Regular Price</label>
                      <input type="number" className="form-control" id="regular_price" name="regular_price" placeholder="Regular Price" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="sale_price" className="form-label">Sale Price</label>
                      <input type="number" className="form-control" id="sale_price" name="sale_price" placeholder="Sale Price" />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="image" className="form-label">Photo</label>
                      <input type="file" className="form-control" id="image" name="image" placeholder="image" required="" accept="image/png, image/jpeg" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="slug" className="form-label">Slug</label>
                      <input type="text" className="form-control" id="slug" name="slug" placeholder="Enter Phone Number" />
                    </div>
                <button className="btn btn-solid-default mt-4" type="submit">Ajouter Produit</button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <div className="col-md-3">
        <div className={`card ${styles.hoverableCard}`} role="alert" style={{ position: 'sticky', top: '90px', border: '1px solid #dee2e6', margin: 'auto', width: '90%', marginTop: '59px' }}>
          <div className="card-body">
            <h3 className="card-title">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="25px" width="35px" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve">
                {/* SVG content */}
              </svg>
              How to define my ad
            </h3>
            <div className="alert alert-info" role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="40px" viewBox="0 0 1024 1024" className="icon" version="1.1">
                {/* SVG content */}
              </svg>
              &nbsp;&nbsp;Choosing the right category when placing an ad can help increase visibility, relevance and effectiveness, and avoid any potential opt-outs.<br /><br />
              It is important to include a clear and precise mailing address so that potential customers can easily find you.<br /><br />
              Be sure to include a phone number where potential customers can reach you
              Keep your contact details up to date.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
