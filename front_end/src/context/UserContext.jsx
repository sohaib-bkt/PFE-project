import { createContext, useContext, useState } from "react";
import UserApi from "../services/api/user/UserApi";

export const UserContext = createContext({
  user: {},
  authenticated: false,
  setAuthenticated: () => {},
  setUser: () => {},
  logout: () => {},
  login: () => {},
});

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);

  const logout = () => {
    setUser({});
    setAuthenticated(false);
  };

  const login = async (email, password) => {
    await UserApi.getCsrf();
    return await UserApi.login(email, password);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, login, authenticated, setAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
