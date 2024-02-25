import { useContext, useState } from "react";
import "./style.css";
import { UserContext } from "../../contexts/UserContext.jsx";
import Hero from "../../components/Hero.jsx";

const UserProfile = () => {
  const { user, updateUser } = useContext(UserContext);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState({ imgUrl: "" });

  //   console.log(avatar);

  const handleAvatarChange = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (e) => {
      const img = e.target.result;
      setAvatar({ imgUrl: img });
    };
  };

  return (
    <div className="profile-container">
      <Hero
        imageUrl="https://cdn.pixabay.com/photo/2021/05/04/08/29/digital-6228020_1280.jpg"
        title="Update Profile"
      />
      <form
        className="profile-form"
        onSubmit={(e) => {
          e.preventDefault();
          updateUser({ username, email, avatar: avatar.imgUrl });
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="avatar">Profile Picture</label>
        <input
          type="file"
          name="avatar"
          id="avatar"
          onChange={handleAvatarChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserProfile;
