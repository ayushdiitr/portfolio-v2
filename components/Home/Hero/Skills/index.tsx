import React from "react";

const skills = [
  {
    category: "Programming Languages",
    items: ["Rust", "JavaScript", "C++", "TypeScript", "Python"],
  },
  {
    category: "Tools & Frameworks",
    items: [ "ReactJS", "Node.js", "Django", "Flutter", "Express", "PostgreSQL", "MongoDB", "Redux-toolkit", "ElectronJS", "AWS"],
  },
  {
    category: "Blockchain Technology & Web3",
    items: ["Cryptography", ""],
  },
  {
    category: "Tools",
    items: ["Git & GitHub", "Docker", "Postman"],
  },
];

const Skills = (): JSX.Element => {
  return (
    <div className="my-16 flex flex-col">
      <h2 className="mb-8 text-3xl font-bold">Skills</h2>
      <div className="flex flex-col space-y-8">
        {skills.map((skillCategory) => (
          <div key={skillCategory.category} className="flex flex-col space-y-4">
            {/* Skill Category Title */}
            <h3 className="text-lg font-semibold">{skillCategory.category}</h3>
            {/* Skill Items */}
            <div className="flex flex-wrap gap-3">
              {skillCategory.items.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-gray-200 shadow-md transition-transform duration-200 hover:scale-105 hover:bg-accent hover:text-tertiary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
