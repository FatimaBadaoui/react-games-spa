import "./style.css";

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import Hero from "../../components/Hero.jsx";

import userJSON from "../../utilities/users.json";

const Login = () => {
  const { login } = useContext(UserContext);
  const [isIncorrect, setIsIncorrect] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements["username"].value;
    const password = event.target.elements["password"].value;

    const userData = userJSON.find(user => user.username === username && user.password === password)
    if (userData) {
      login(userData);
      navigate("/games");
    } else {
      setIsIncorrect(true);
      event.target.reset();
    }
  };

  return (
    <div className="login">
      <Hero
        imageUrl="https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg"
        title="Login"
      />
      {isIncorrect && (
        <p className="invalid">Username or Password not correct! Try again.</p>
      )}
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="User name"
          autoFocus
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
