import React from "react";
import skills from "utils/skills";

import "./styles.css";

const SkillsList = ({ setOpenSkill, setHoveredSkill }) => (
  <div className="skills-list-container">
    {skills.map((skill) => (
      <div
        key={skill.key}
        className="skills-list-item"
        onClick={() => setOpenSkill(skill.key)}
        onMouseEnter={() => setHoveredSkill?.(skill.key)}
        onMouseLeave={() => setHoveredSkill?.(null)}
      >
        <span className="skills-list-name">{skill.name}</span>
      </div>
    ))}
  </div>
);

export default SkillsList;
