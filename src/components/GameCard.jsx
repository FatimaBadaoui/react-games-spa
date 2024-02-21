import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext.jsx";

const GameCard = ({ to, image }) => {
  const { user } = useContext(UserContext);
  
  return (
    <Link to={user ? to : "/login"}>
      <div className="game-card">
        <div className="game-image">
          <img src={image} alt="game image" />
        </div>
        {/* <h2 className="game-name">{name}</h2> */}
      </div>
    </Link>
  );
};

export default GameCard;
