/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import "./styles.css";

const ProjectCard = ({ project }) => {
  const { title, type, link, image, description, color, year } = project;

  const [colorToShow, setColorToShow] = React.useState({
    first: `${color}88`,
    second: `#88888888`,
  });

  return (
    <div className="project-card-main-container">
      <div
        className="project-card-container"
        onMouseEnter={() =>
          setColorToShow({
            first: `${color}aa`,
            second: `#888888aa`,
          })
        }
        onMouseLeave={() =>
          setColorToShow({
            first: `${color}88`,
            second: `#88888888`,
          })
        }
        style={{
          cursor: link ? "pointer" : "auto",
          background: `linear-gradient(${colorToShow.first}, 66%, ${colorToShow.second})`,
        }}
        onClick={() => link && window.open(link, "_blank")}
      >
        <div className="project-card-image-container">
          <img src={image.src} alt={image.alt} />
        </div>
        <div className="project-card-content">
          <div className="project-card-title-container">
            <h1>{title}</h1>
            <h1>{type}</h1>
          </div>
          <p className="project-card-description">{description.text1}</p>
          <p className="project-card-description">{description.text2}</p>
          <p className="project-card-description">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
