import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import UserApi from '../services/api/user/UserApi';
import HashLoader from 'react-spinners/HashLoader';
  const loadScripts = () => {
    const scripts = [
      'https://code.jquery.com/jquery-3.6.0.min.js',
      './assets/js/bootstrap/bootstrap.bundle.min.js',
      './assets/js/script.js',
    ];
  
    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });
  };
export default function Register() {
  loadScripts();

  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [addressFocused, setAddressFocused] = useState(false);
  const [cityFocused, setCityFocused] = useState(false);
  const [countryFocused, setCountryFocused] = useState(false);

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
    
  const handleFocusAddress = () => {
    setAddressFocused(true);
  };

  const handleFocusCity = () => {
    setCityFocused(true);
  };

  const handleFocusCountry = () => {
    setCountryFocused(true);
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
      password_confirmation: formData.get('password_confirmation'),
      address: formData.get('address'),
      city: formData.get('city'),
      country: formData.get('country')
    };

    try {
      await register(data);
      await UserApi.getUser();
      setAuthenticated(true);
      navigate("/");

    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const [client, setClient] = useState(null); // Changed initial state to null
    
  const [loadingg, setLoadingg] = useState(true); 

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const data = await UserApi.getUser();
            setClient(data.data);
            setLoadingg(false);
        } catch (error) {
            navigate('/register');
            setLoadingg(false);
        }
    };

    fetchUser();
}, [navigate, setClient, setLoadingg]);

useEffect(() => {
    if (client) {
        const authenticated = localStorage.getItem('authenticated') === 'true';

        if (authenticated) {
            navigate('/');
            setLoadingg(false);
        }
        else {
          setLoadingg(false);
      }
    } 
}, [client, navigate]);

if (loadingg) {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
            <HashLoader color="red" loading={loadingg} size={80} />
        </div>
    );
}

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
                <label htmlFor="address" className={`floating-label ${addressFocused ? 'active' : ''}`}>Address</label>
                <input
                  type="text"
                  id="address"
                  className="block mt-1 w-full"
                  name="address"
                  required=""
                  onFocus={handleFocusAddress}
                />
                <span className="text-danger mt-3">{error}</span>
              </div>

              <div className="input">
                <label htmlFor="city" className={`floating-label ${cityFocused ? 'active' : ''}`}>City</label>
                <input
                  type="text"
                  id="city"
                  className="block mt-1 w-full"
                  name="city"
                  required=""
                  onFocus={handleFocusCity}
                />
                <span className="text-danger mt-3">{error}</span>
              </div>

              <div className="input">
                <label htmlFor="country" className={`floating-label ${countryFocused ? 'active' : ''}`}>Country</label>
                <input
                  type="text"
                  id="country"
                  className="block mt-1 w-full"
                  name="country"
                  required=""
                  onFocus={handleFocusCountry}
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
