// components/PortfolioSection.js

import React, { useState, useEffect } from "react";
import PortFolioDetail from "./PortFolioDetail";
import { RxGithubLogo, RxPencil1 } from "react-icons/rx";

const MYProject = ({ projects, categories }) => {
  const [currentLink, setCurrentLink] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (currentLink === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.projectCategory === currentLink)
      );
    }
  }, [currentLink, projects]);

  return (
    <div
      id="work"
      className="mt-20 items-center flex flex-col"
    >
      <div className="h-[0px] sm:h-[10vh]"></div>
      <div className="mx-auto items-center flex flex-col">
        <PortFolioDetail />
        <div className="flex-wrap items-center justify-center flex gap-7 my-10">
          {categories.map((link, index) => (
            <div
              key={index}
              className={`px-3 ${
                link === currentLink
                  ? "bg-secondary text-white"
                  : "dark:bg-richblack-300 dark:text-richblue-900 text-richblack-900 bg-white"
              } p-2 rounded-xl cursor-pointer hover:scale-95 hover:shadow-lg`}
              onClick={() => setCurrentLink(link)}
            >
              {link}
            </div>
          ))}
        </div>
        <div className="justify-center gap-5 items-start xl:gap-10 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:max-w-maxContent md:w-11/12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="dark:bg-richblue-900 group relative flex flex-col items-center p-3 gap-4 w-[280px] sm:w-[320px] h-[450px] bg-white rounded-lg"
            >
              <a
                href={project.livelink}
                className="cursor-pointer"
              >
                <img
                  alt={project.name}
                  src={project.thumbnail}
                  className="hover:opacity-20 opacity-80 cursor-pointer shadow-xl object-cover w-[270px] sm:w-[300px] h-[270px] rounded-2xl"
                  loading="lazy"
                />
              </a>
              <p className="dark:bg-richblue-900 dark:shadow-none dark:text-lightgrey z-10 -mt-9 bg-white text-richblue-300 p-2 shadow-lg rounded-lg">
                {project.projectCategory}
              </p>
              <div className="py-5 flex items-center flex-col justify-between">
                <h1 className="dark:text-white text-xl font-semibold text-richblue-400">
                  {project.name}
                </h1>
                <p className="dark:text-richblack-500 text-center text-richblack-400">
                  {project.description}
                </p>
              </div>
              <div className="px-5 absolute top-10 pb-2 w-full justify-between flex">
                <a href={project.livelink}>
                  <RxPencil1
                    className="cursor-pointer hover:scale-110"
                    fontSize={24}
                  />
                </a>
                <a href={project.githublink}>
                  <RxGithubLogo
                    className="cursor-pointer hover:scale-110"
                    fontSize={24}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MYProject;
