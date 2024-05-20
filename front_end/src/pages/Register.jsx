import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import UserApi from '../services/api/user/UserApi';
import HashLoader from 'react-spinners/HashLoader';
import Select from "react-select";

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

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    fontSize: '16px',  // Increase font size
    color: '#747474',     // Light grey color
  }),
  menu: (provided) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    zIndex: 9999,
    fontSize: '16px',  // Increase font size
    color: '#747474',     // Light grey color
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#747474',
    fontSize: '16px',  // Increase font size
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#747474',
    fontSize: '16px',  // Increase font size
  }),
};

const CountrySelect = ({ selectedCountry, setSelectedCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
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
      placeholder="Country"  // Add placeholder text here
    />
  );
};

export default function Register() {
  loadScripts();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { register, setAuthenticated } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    }
    if (!phone.trim()) {
      errors.phone = 'Phone is required';
    }
    if (!address.trim()) {
      errors.address = 'Address is required';
    }
    if (!city.trim()) {
      errors.city = 'City is required';
    }
    if (!selectedCountry) {
      errors.country = 'Country is required';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    }
    if (!passwordConfirmation.trim()) {
      errors.passwordConfirmation = 'Confirm Password is required';
    }
    if (password !== passwordConfirmation) {
      errors.passwordMatch = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // If all validations pass, proceed with registration

    try {
      setLoading(true);
      await register({
        name,
        email,
        phone,
        password,
        password_confirmation: passwordConfirmation,
        address,
        city,
        country: selectedCountry.label
      });
      await UserApi.getUser();

      setAuthenticated(true);
      navigate("/");
    } catch (error) {
      setErrors({ general: error.response.data.message });
    } finally {
      setLoading(false);
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
            {errors.general && 
                  <div class="alert alert-danger" role="alert">
                      {errors.general}
                </div>
              }
              <div className="login-title">
                <h2>Register</h2>
              </div>
              <div className="input">
                <label htmlFor="name" className="floating-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="block mt-1 w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <span className="text-danger mt-3">{errors.name}</span>}
              </div>
              <div className="input">
                <label htmlFor="email" className="floating-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="block mt-1 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className="text-danger mt-3">{errors.email}</span>}
              </div>
              <div className="input">
                <label htmlFor="phone" className="floating-label">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="block mt-1 w-full"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <span className="text-danger mt-3">{errors.phone}</span>}
              </div>
              <div className="input">
                <label htmlFor="address" className="floating-label">Address</label>
                <input
                  type="text"
                  id="address"
                  className="block mt-1 w-full"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                {errors.address && <span className="text-danger mt-3">{errors.address}</span>}
              </div>
              <div className="input">
                <label htmlFor="city" className="floating-label">City</label>
                <input
                  type="text"
                  id="city"
                  className="block mt-1 w-full"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                {errors.city && <span className="text-danger mt-3">{errors.city}</span>}
              </div>
              <div className="input">
                <CountrySelect 
                  selectedCountry={selectedCountry}
                  setSelectedCountry={setSelectedCountry}
                />
                {errors.country && <span className="text-danger mt-3">{errors.country}</span>}
              </div>
              <div className="input">
                <label htmlFor="password" className="floating-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="block mt-1 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <span className="text-danger mt-3">{errors.password}</span>}
              </div>
              <div className="input">
                <label htmlFor="password_confirmation" className="floating-label">Confirm Password</label>
                <input
                  type="password"
                  id="password_confirmation"
                  className="block mt-1 w-full"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                {errors.passwordConfirmation && <span className="text-danger mt-3">{errors.passwordConfirmation}</span>}
              </div>
              {errors.passwordMatch && <span className="text-danger mt-3">{errors.passwordMatch}</span>}
              <div className="button login" style={{ marginTop: '40px' }}>
                <button type="submit" disabled={loading}>
                  <span>{loading ? 'Signing Up...' : 'Sign Up'}</span>
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
