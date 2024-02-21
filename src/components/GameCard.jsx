import { Link } from "react-router-dom";

const GameCard = ({ to, image }) => {
  return (
    <Link to={to}>
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
