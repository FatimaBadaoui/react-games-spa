import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";

const Games = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please log in first</div>;
  }

  return <Outlet />;
};

export default Games;
