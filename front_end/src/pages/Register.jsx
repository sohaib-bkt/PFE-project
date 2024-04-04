import { useState } from 'react';
import '@Css/floatingLabel.css';
import axios from '../api/axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const [error, setError] = useState("");

  const handleFocusName = () => {
    setNameFocused(true);
  };

  const handleFocusEmail = () => {
    setEmailFocused(true);
  };

  const handleFocusPassword = () => {
    setPasswordFocused(true);
  };

  const handleFocusConfirmPassword = () => {
    setConfirmPasswordFocused(true);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('password_confirmation')
    };

    try {
      await axios.get('http://localhost:8000/sanctum/csrf-cookie');
      const response = await axios.post('http://localhost:8000/register', data);

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <div className="login-section">
        <div className="materialContainer">
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="login-title">
                <h2>Register</h2>
              </div>
              <div className="input">
                <label htmlFor="name" className={`floating-label ${nameFocused ? 'active' : ''}`}>Name</label>
                <input
                  type="text"
                  id="name"
                  className="block mt-1 w-full"
                  name="name"
                  required=""
                  onClick={handleFocusName}
                />
                <span className="text-danger mt-3">{error}</span>
              </div>
              <div className="input">
                <label htmlFor="email" className={`floating-label ${emailFocused ? 'active' : ''}`}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="block mt-1 w-full"
                  name="email"
                  required=""
                  onClick={handleFocusEmail}
                />
                <span className="text-danger mt-3">{error}</span>
              </div>
              <div className="input">
                <label htmlFor="password" className={`floating-label ${passwordFocused ? 'active' : ''}`}>Password</label>
                <input
                  type="password"
                  id="password"
                  className="block mt-1 w-full"
                  name="password"
                  required=""
                  onClick={handleFocusPassword}
                />
                <span className="text-danger mt-3">{error}</span>
              </div>
              <div className="input">
                <label htmlFor="password_confirmation" className={`floating-label ${confirmPasswordFocused ? 'active' : ''}`}>Confirm Password</label>
                <input
                  type="password"
                  id="password_confirmation"
                  className="block mt-1 w-full"
                  name="password_confirmation"
                  required=""
                  onClick={handleFocusConfirmPassword}
                />
                <span className="text-danger mt-3">{error}</span>
              </div>
              <div className="button login">
                <button type="submit">
                  <span>Sign Up</span>
                  <i className="fa fa-check" />
                </button>
              </div>
            </form>
          </div>
          <p>
            <Link to="/login" className="theme-color">
              Already have an account?
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
