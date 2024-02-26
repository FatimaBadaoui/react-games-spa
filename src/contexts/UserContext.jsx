import { createContext, useEffect, useState } from "react";
import userJSON from "../utilities/users.json";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
  }, []);

  const login = (userObj) => {
    setUser(userObj);
    localStorage.setItem("user", JSON.stringify(userObj));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const updateUser = (userObj) => {
    // console.log(user);
    setUser({ ...user, ...userObj });
    userJSON[user.id - 1] = user;
    // console.log(userJSON);
    localStorage.setItem("user", JSON.stringify({ ...user, ...userObj }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
