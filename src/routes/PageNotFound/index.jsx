import { Link } from "react-router-dom";
import "./style.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="error-message">
        <h1>OPPS...</h1>
        <h2>Sorry. this page is not found.</h2>
        <img
          src="https://bonx-vue.pages.dev/images/others/404.webp"
          alt="error 404"
        />
        <Link to="/">GO BACK HOME</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
