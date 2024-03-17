import { FaHeart } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerSection">
      <p>
        Built it with <FaHeart className="heart" /> by a beautiful person in the
        beautiful city of Greater Noida.
      </p>
    </div>
  );
}

export default Footer;
