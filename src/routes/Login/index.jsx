import "./style.css";
import liloAvatar from "../../utilities/images/lilo.png";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";

const userData = { username: "lilo", password: "1234", avatar: liloAvatar };

const Login = () => {
  const { login } = useContext(UserContext);
  const [isIncorrect, setIsIncorrect] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements["username"].value;
    const password = event.target.elements["password"].value;

    if (username === userData.username && password === userData.password) {
      login(userData);
      navigate("/games");
    } else {
      setIsIncorrect(true);
      event.target.reset();
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {isIncorrect && (
        <p className="invalid">Username or Password not correct! Try again.</p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="User name"
          autoFocus
        />
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
