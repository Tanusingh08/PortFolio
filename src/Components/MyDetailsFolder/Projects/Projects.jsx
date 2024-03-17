import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";
import { ProjectData } from "./data.js";

function Project() {
  return (
    <div className="topPart" id="Projects">
      <h1 className="work-title">My Work</h1>
      <div className="work-list">
        {ProjectData.map((data) => (
          <ul key={data.title}>
            <div className="work">
              <img src={data.src} alt={data.title} />
              <div className="layer">
                <h3>{data.title}</h3>
                <p>{data.para}</p>
                <a href={data.path}>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          </ul>
        ))}
      </div>
      <a href="https://github.com/Tanusingh08" className="btn">
        See More
      </a>
    </div>
  );
}

export default Project;
