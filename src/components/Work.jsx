import React from "react";
import Workitem from "./workitem";

const data = [
  {
    year: "08/2023  -  present",
    title: "RR ISPAT (A Unit Of GPIL)	",
    position: "Graduate Engineer Trainee: Flutter Developer",
    details: [
      "Collaborate with cross-functional teams to design, develop, and maintain web and mobile applications.",
      "Assisted in the development of new features and enhancements for existing mobile apps.",
      "Delivered presentations to workers to explain the application and updates on projects.",
      "Collaborated with development teams, internal customers, and product line management to verify delivery of desired quality requirements to distributors.",
      "Worked closely with engineers on projects.",
    ],
  },
  {
    year: "02/2023 - 08/2023",
    title: "Nava Raipur Atal Nagar Smart City Corporaation Ltd",
    position: "IT Intern",
    details: [
      "Helped in designing and developing the Nava Raipur Atal Nagar website.",
      "Worked as a Support engineer in IT-related functions like ICCC and other	digital platforms",
      "Performed such other duties as the supervisor may deem necessary from time to time.",
      "Coordinated in organizing technical and other events like Yoga Day and Smart City anniversary.",
    ],
  },

  {
    year: "07/2022 - 08/2022",
    title: "Twowaits Technologies Pvt. Ltd",
    position: "Web Development Scholar Intern",
    details: [
      "Developed user interfaces and user experiences for web applications",
      "Collaborated with teammates and updated application versions using Git",
      "Used best practices in HTML and CSS to develop a static site based on a static image of a website design",
      "Created custom web-based applications utilizing HTML, CSS, JavaScript, and other technologies",
      "Developed cross-browser/platform HTML5, CSS, and JavaScript to match design specs for complex page layouts while adhering to code standards",
    ],
  },
];

const Work = () => {
  return (
    <div id="work" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] ">
        Work
        {data.map((item, idx) => (
          <Workitem
            key={idx}
            year={item.year}
            title={item.title}
            position={item.position}
            details={item.details}
          />
        ))}
      </h1>
    </div>
  );
};

export default Work;
