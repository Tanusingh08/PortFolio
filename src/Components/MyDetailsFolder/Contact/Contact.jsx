import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div className="contactSection" id="Contact">
      <div className="UserInformation">
        <div className="Info">
          <h1>Contact Me</h1>
          <div className="email area">
            <a href="">
              <FontAwesomeIcon icon={faPaperPlane} />
            </a>
            <p>singhtanu8923@gmail.com</p>
          </div>
          <div className="phoneNo area">
            <a href="">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <p>7982308104</p>
          </div>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/tanu-singh-a9455922b/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Tanusingh08">
              <FaGithub />
            </a>
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaWhatsapp />
            </a>
          </div>
          <button class="download-btn">Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
