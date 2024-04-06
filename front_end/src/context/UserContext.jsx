import { createContext, useContext, useState } from "react";
import UserApi from "../services/api/user/UserApi";

export const UserContext = createContext({
  user: {},
  authenticated: false,
  setAuthenticated: () => {},
  setUser: () => {},
  logout: () => {},
  login: () => {},
  getUser: () => {},
  register: () => {},
});

export default function UserContextProvider({ children }) {
  
  const [user, setUser] = useState({});
  const [authenticated, _setAuthenticated] = useState(Boolean(window.localStorage.getItem("authenticated")  ));

  const setAuthenticated = (value) => {
    _setAuthenticated(value);
    window.localStorage.setItem("authenticated", value);
  };

  const logout = () => {
    setUser({});
    setAuthenticated(false);
  };

  const register = async (data) => {
    await UserApi.getCsrf();
    return await UserApi.register(data);
  };

  const login = async (email, password) => {
    await UserApi.getCsrf();
    return await UserApi.login(email, password);
    
  };
  const getUser = () => {
    UserApi.getUser().then((data) => {
      console.log(data.data);
      setUser(data.data); // Mettre à jour l'état de l'utilisateur dans le bloc then
      console.log(user); // Cela va maintenant afficher les données de l'utilisateur récupérées
    });
  };
  

  return (
    <UserContext.Provider value={{ user, setUser, logout, login, authenticated, setAuthenticated, register , getUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
