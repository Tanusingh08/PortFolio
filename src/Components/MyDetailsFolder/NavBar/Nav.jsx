import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";
import { Link } from "react-scroll";

function Nav() {
  const [prevState, setCurrState] = useState(true);
  function clickHandler() {
    setCurrState(!prevState);
  }

  return (
    <>
      {prevState && (
        <div className="topNav">
          <div className="innerNav">
            <h2>PortFolio</h2>
            <FontAwesomeIcon
              icon={faBars}
              className="icons"
              onClick={clickHandler}
            />
          </div>
        </div>
      )}

      {!prevState && (
        <div className="topNav">
          <div className="innerNav2">
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="Home"
                  // spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  class="links"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  activeClass="active"
                  to="About"
                  // spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  class="links"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="Skills"
                  // spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  class="links"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="Projects"
                  // spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  class="links"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  activeClass="active"
                  to="Contact"
                  // spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  class="links"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <FontAwesomeIcon
              icon={faBars}
              className="icons"
              onClick={clickHandler}
            />
          </div>
        </div>
      )}
    </>
  );
}
export default Nav;
