import { createContext, useState } from "react";
import userJSON from "../utilities/users.json";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userObj) => {
    setUser(userObj);
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (userObj) => {
    console.log(user);
    setUser({ ...user, ...userObj });
    userJSON[user.id -1] = user;
    // console.log(userJSON);

  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
