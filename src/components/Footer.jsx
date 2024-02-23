import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-links">
          <a href="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className="socialMedia-color" /> Facebook
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="socialMedia-color" /> Linkedin
           
          </a>

          <a href="https://www.instagram.com/" target="_blank">
            {" "}
            <FontAwesomeIcon icon={faInstagram} className="socialMedia-color" /> Instagram
          </a>
         
        </div>
        <div className="copyright">
          <p>&copy; 2024 React Games. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
