import { useState } from 'react';
import '@Css/floatingLabel.css';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export default function Login() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login, setAuthenticated } = useUserContext();

  const handleFocusEmail = () => {
    setEmailFocused(true);
  };

  const handleFocusPassword = () => {
    setPasswordFocused(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      setAuthenticated(true);
      navigate('/');
    } catch (error) {
      setError(error.response.data.message);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="login-section">
        <div className="materialContainer">
          <div className="box">
            <form method="POST" onSubmit={handleSubmit}>
              <div className="login-title">
                <h2>Login</h2>
              </div>
              <div className="input">
                <label
                  htmlFor="name"
                  className={`floating-label ${emailFocused ? 'active' : ''}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="name"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required=""
                  onFocus={handleFocusEmail}
                />
                <span className="text-danger mt-3"></span>
              </div>

              <div className="input">
                <label
                  htmlFor="pass"
                  className={`floating-label ${passwordFocused ? 'active' : ''}`}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="pass"
                  className="block mt-1 w-full"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required=""
                  onFocus={handleFocusPassword}
                />
                <span className="text-danger mt-3">{error}</span>
              </div>

              <a href="#" className="pass-forgot">
                Forgot your password?
              </a>

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
