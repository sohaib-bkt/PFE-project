
import { useEffect, useState } from 'react';
import AdminNav from './AdminNav';
import img from '@Assets/images/user.svg.png';

export default function AdminProfile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(window.localStorage.getItem("user"));
    setUser(storedUser);
  }, [])


  return (
 
                <section>
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img
              src={img}
              alt="avatar"
              className="rounded-circle img-fluid"
              style={{ width: 150 }}
            />
            <h5 className="my-3">{user.name}</h5>
            <p className="text-muted mb-1">Full Stack Developer</p>
            <p className="text-muted mb-4">{user.address}</p>
         
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.name}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.email}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.phone}</p>
              </div>
            </div>
            <hr />
            
            
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.country + ", " + user.city + ", " + user.address}</p>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</section>
   
  );
}
