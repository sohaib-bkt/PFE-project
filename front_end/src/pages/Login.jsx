import { useState , useEffect  } from 'react';
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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login, setAuthenticated , setUser} = useUserContext();

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
      const res = await UserApi.getUser(); 
    
      window.localStorage.setItem("user", JSON.stringify(res.data));
      // const storedUser = JSON.parse(window.localStorage.getItem("user"));

      setUser(res.data);     
      if (res.data.utype === "admin") {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    } catch (error) {
      setError(error.response.data.message);
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
              navigate('/login');
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
            <form method="POST" onSubmit={handleSubmit}>
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
                  onChange={(e) => setEmail(e.target.value)}
                  required=""
                  onFocus={handleFocusEmail}
                />
                <span className="text-danger mt-3"></span>
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
                  onChange={(e) => setPassword(e.target.value)}
                  required=""
                  onFocus={handleFocusPassword}
                />
                <span className="text-danger mt-3">{error}</span>
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
