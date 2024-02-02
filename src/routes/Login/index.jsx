import { useNavigate } from "react-router-dom";
import "./style.css";
import { useState } from "react";

const Login = ({ isLogged, setIsLogged }) => {
  const userData = { username: "lilo", password: "1234" };

  const [isIncorrect, setIsIncorrect] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements["username"].value;
    const password = event.target.elements["password"].value;

    if (username === userData.username && password === userData.password) {
      navigate("/games");
      setIsLogged(true);
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
