import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClickLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="user-container">
      <div
        className="user-img"
        onClick={() => setIsClicked((prevIsClicked) => !prevIsClicked)}
      >
        <img src={user.avatar} alt="profile picture" />
      </div>
      {isClicked && (
        <div className="user-dropdown">
          <p>
            <strong>Username: </strong>
            {user.username}
          </p>
          <p>
            <strong>E-Mail: </strong>
            {user.email}
          </p>
          <button
            className="profile-btn"
            onClick={() => navigate("/userprofile")}
          >
            Update Profile
          </button>
          <button className="logout-btn" onClick={handleClickLogout}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
