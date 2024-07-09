import React from "react";
import SpanText from "../helpers/SpanText";
import { motion } from "framer-motion";
const PortFolioDetail = () => {
  return (
    <>
      <motion.h1 className="dark:text-richblack-100 pb-10 font-semibold text-4xl  lg:text-[52px]">
        My Creative{" "}
        <SpanText
          dark={"dark:text-richblack-400"}
          text={"Portfolio Section"}
        />
      </motion.h1>
      <p className=" text-left md:text-center text-richblack-400 my-5 w-[95%] md:w-7/12">
        This is my portfolio section where I showcase my full-stack projects,
        mini projects, and various UI/UX designs. Each piece represents my
        passion for crafting engaging and innovative solutions across the
        digital landscape. Explore my work to witness the fusion of creativity
        and technical expertise.
      </p>
    </>
  );
};

export default PortFolioDetail;
