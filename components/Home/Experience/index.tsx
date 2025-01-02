import React from "react";

const experiences = [
  {
    id: 1,
    company: "Ezaix Inc",
    role: "Software Engineer Intern",
    duration: "October 2023 - Present",
    description:
      "Created the Copilot License Accelerator, a cross-platform (Windows/macOS) license management tool with Electron.js and Node.js, streamlining license management for over 2500+ users and improving efficiency by 30%. Refactored the frontend code and enhanced lifecycle practices in ReactJS.",
  },
  {
    id: 2,
    company: "Carboledger Inc",
    role: "Software Developer - Part Time",
    duration: "Jan 2024 - Febr 2024",
    description:
      "Optimized Next.js code, improving desktop load time by 20%, and implemented AMP pages for 30% faster mobile performance. Minimized JavaScript/CSS and eliminated redundant code, decreasing payload size by 40% and improving website efficiency.",
  },
  {
    id: 3,
    company: "SalarySe",
    role: "Frontend Developer",
    duration: "July 2023 - Sept 2023",
    description:
      "Developed and deployed a feature-rich Loan Origination Software (LOS) Dashboard using Next.js, improving user experience and operational efficiency. Integrated Google OAuth 2.0 for secure user authentication, enabling seamless access for over 1,000 users.",
  },
  {
    id: 3,
    company: "Skillium Labs",
    role: "Frontend Developer",
    duration: "April 2023 - June 2023",
    description:
      "Developed from scratch the UI of the website, integrating all the features and worked on the MVP.",
  },
];

const Experience = (): JSX.Element => {
  return (
    <div className="my-16 flex flex-col">
      <h2 className="mb-8 text-3xl font-bold">Experience</h2>
      <div className="relative border-l border-tertiary">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="mb-8 ml-4 flex items-start space-x-4 last:mb-0"
          >
            {/* Timeline Icon */}
            <div className="relative flex-shrink-0">
              <div className="h-4 w-4 rounded-full border-2 border-accent bg-secondary"></div>
              <div
                className={`absolute top-4 left-[6px] h-full w-[2px] bg-gray-500 ${
                  index === experiences.length - 1 ? "hidden" : ""
                }`}
              />
            </div>

            {/* Experience Content */}
            <div>
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <span className="text-sm text-gray-400">{exp.company}</span>
              <p className="text-sm text-gray-400">{exp.duration}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
