import { useState } from 'react';
import '@Css/floatingLabel.css';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export default function Register() {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const [error, setError] = useState("");
  const { register, setAuthenticated } = useUserContext();
  const navigate = useNavigate();

  const handleFocusName = () => {
    setNameFocused(true);
  };

  const handleFocusEmail = () => {
    setEmailFocused(true);
  };

  const handleFocusPhone = () => {
    setPhoneFocused(true);
  };

  const handleFocusPassword = () => {
    setPasswordFocused(true);
  };

  const handleFocusConfirmPassword = () => {
    setConfirmPasswordFocused(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      password: formData.get('password'),
      password_confirmation: formData.get('password_confirmation')
    };

    try {
      await register(data);
      setAuthenticated(true);
      navigate("/");

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
                  onFocus={handleFocusName}
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
                  onFocus={handleFocusEmail}
                />
                <span className="text-danger mt-3">{error}</span>
              </div>

              <div className="input">
                <label htmlFor="phone" className={`floating-label ${phoneFocused ? 'active' : ''}`}>Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="block mt-1 w-full"
                  name="phone"
                  required=""
                  onFocus={handleFocusPhone}
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
                  onFocus={handleFocusPassword}
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
                  onFocus={handleFocusConfirmPassword}
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
