import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <div className="user-container">
      <div className="user-img">
        <img src={user.avatar} alt="profile picture" />
      </div>
      <div className="user-dropdown">
        <p><strong>Username: </strong>{user.username}</p>
        <button className="logout-btn" onClick={handleClickLogout} >Log Out</button>
      </div>
    </div>
  );
};

export default User;
