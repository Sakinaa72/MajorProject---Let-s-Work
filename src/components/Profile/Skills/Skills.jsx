import "./Skills.css";

function Skills() {
  const skillData = [
    {
      id: 1,
      Skill: "HTML",
    },
    {
      id: 2,
      Skill: "CSS",
    },
    {
      id: 3,
      Skill: "JavaScript",
    },
    {
      id: 4,
      Skill: "React.js",
    },
    {
      id: 5,
      Skill: "Node.js",
    },
    {
      id: 6,
      Skill: "Express",
    },
    {
      id: 7,
      Skill: "MongoDB",
    },
    {
      id: 8,
      Skill: "MySql",
    },
    {
      id: 9,
      Skill: "Web development",
    },
    {
      id: 10,
      Skill: "Communication",
    },
    {
      id: 11,
      Skill: "Leadership",
    },
  ];

  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skill">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React.js</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>Web Development</span>
        <span>Communication</span>
        <span>Leadership</span>
      </div>
    </div>
  );
}

export default Skills;
