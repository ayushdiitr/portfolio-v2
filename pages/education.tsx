import React from "react";

const educationDetails = [
  {
    id: 1,
    institution: "Indian Institute of Technology, Roorkee",
    degree: "B.Tech in Metallurgical & Materials Engineering",
    duration: "2021 - 2025",
    description:
      "Focused on materials science, with coursework in data analysis, research, and industrial applications. Achieved a CGPA of 7.49.",
  },
  {
    id: 2,
    institution: "Siddhant World School, Lucknow",
    degree: "Intermediate",
    duration: "2019 - 2020",
    description:
      "Intermediate in Physics, Chemistry, and Mathematics.",
  },
  {
    id: 3,
    institution: "Siddhant World School, Lucknow",
    degree: "Matriculate",
    duration: "2017 - 2018",
    description:
      "Achieved 93% in High School CBSE Board.",
  },
];

const Education = (): JSX.Element => {
  return (
    <div className="my-16 flex flex-col">
      <h2 className="mb-8 text-3xl font-bold">Education</h2>
      <div className="relative border-l border-tertiary">
        {educationDetails.map((edu, index) => (
          <div
            key={edu.id}
            className="mb-8 ml-4 flex items-start space-x-4 last:mb-0"
          >
            {/* Timeline Icon */}
            <div className="relative flex-shrink-0">
              <div className="h-4 w-4 rounded-full border-2 border-accent bg-secondary"></div>
              <div
                className={`absolute top-4 left-[6px] h-full w-[2px] bg-gray-500 ${
                  index === educationDetails.length - 1 ? "hidden" : ""
                }`}
              />
            </div>

            {/* Education Content */}
            <div>
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <span className="text-sm text-gray-400">{edu.institution}</span>
              <p className="text-sm text-gray-400">{edu.duration}</p>
              <p className="mt-2 text-gray-300">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
