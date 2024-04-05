import React from "react";
import ProjectItem from "./ProjectItem";
import Movie from "../assets/Movie.png";
import Notes from "../assets/Notes.png";
import Photo from "../assets/Photo.png";
import ECom from "../assets/E-Commerce.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1440px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8"></p>
      <div className="max-w-[70%] m-auto grid sm:grid-cols-2 gap-12">
        <ProjectItem img={Movie} title="Netflix-Clone" />
        <ProjectItem img={Notes} title="News-Api" />
        <ProjectItem img={Photo} title="Word-Counter" />
        <ProjectItem img={ECom} title="Flutter-Portfolio" />
      </div>
    </div>
  );
};

export default Projects;
