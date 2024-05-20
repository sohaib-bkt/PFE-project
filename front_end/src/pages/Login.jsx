import { useState, useEffect } from 'react';
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

export default function Login() {
  loadScripts();

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [falseinfo, setFalseinfo] = useState(false);
  const navigate = useNavigate();
  const { login, setAuthenticated, setUser } = useUserContext();

  const handleFocusEmail = () => {
    setEmailFocused(true);
  };

  const handleFocusPassword = () => {
    setPasswordFocused(true);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    let hasError = false; 
    if (!email.trim()) {
      setEmailError('Email is required');
      hasError = true;
    } else {
      setEmailError(''); 
    }
    if (!password.trim()) {
      setPasswordError('Password is required');
      hasError = true; 
    } else {
      setPasswordError('');
    }
    if (hasError) return;
    setLoading(true);
    try {
      await login(email, password);
      setAuthenticated(true);
      const res = await UserApi.getUser();
  
      window.localStorage.setItem('user', JSON.stringify(res.data));
      setUser(res.data);
      if (res.data.utype === 'admin') {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    } catch (error) {
      setFalseinfo(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  



  return (
    <>
      <div className="login-section">
        <div className="materialContainer">
          <div className="box">
            <form method="POST" onSubmit={handleSubmit}>
            {falseinfo && (
              <div className="alert alert-danger" role="alert">
                {falseinfo}
              </div>
            )}
                    
            
              <div className="login-title">
                <h2>Login</h2>
              </div>
              <div className="input">
                <label
                  htmlFor="email"
                  className={`floating-label ${emailFocused ? 'active' : ''}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }}
                  
                  onFocus={handleFocusEmail}
                />
                <span className="text-danger mt-3">{emailError}</span>
              </div>

              <div className="input">
                <label
                  htmlFor="password"
                  className={`floating-label ${passwordFocused ? 'active' : ''}`}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="block mt-1 w-full"
                  name="password"
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                    setPasswordError('');
                  }}
                  
                  onFocus={handleFocusPassword}
                />
                <span className="text-danger mt-3">{passwordError}</span>
              </div>

              <Link to="/forgot-pass" className="pass-forgot">
                Forgot your password?
              </Link>

              <div className="button login flex justify-center items-center">
                <button type="submit" disabled={loading}>
                  <span>{loading ? 'Log In...' : 'Log In'}</span>
                  <i className="fa fa-check"></i>
                </button>
              </div>
              <p>
                Not a member?{' '}
                <Link to="/register" className="theme-color">
                  Sign up now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
