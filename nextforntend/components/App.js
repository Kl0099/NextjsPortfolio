// components/App.js

"use client";
import NavBar from "./NavBar";
import Hero from "./Hero";
import FirstSection from "./FirstSection";
import PortfolioSection from "./PortfolioSection";
import SkillsAndExperience from "./SkillsAndExperience";
import ContactUs from "./ContactUs";
import MYProject from "./MYProject";

function App({ projects, categories }) {
  return (
    <div className="w-full dark:bg-richblack-900 relative text-black">
      <div className="border-black border-2">
        <div className="dark:bg-richblack-900 bg-lightgrey">
          <NavBar />
        </div>
        <div className="max-w-maxContent sm:w-11/12 mx-auto">
          <Hero />
        </div>
        <div className="max-w-maxContent sm:w-11/12 mx-auto">
          <FirstSection />
        </div>
        <div className="max-w-maxContent sm:w-11/12 mx-auto">
          <MYProject
            projects={projects}
            categories={categories}
          />
        </div>
        <div className="w-full dark:bg-gradient-to-t from-richblack-900 via-blue-600 to-cyan-400">
          <div className="sm:w-11/12 max-w-maxContent mx-auto">
            <SkillsAndExperience />
          </div>
        </div>
        <div className="max-w-maxContent sm:w-11/12 mx-auto">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default App;
