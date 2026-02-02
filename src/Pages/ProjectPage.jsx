import React from "react";
import Project from "../components/Project";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProjectPage() {
  return (
    <>
      <Navbar />
      <Footer />
      <div className="pointer-events-none bg-[#000000] h-[5vh]"></div>
      <Project />
      <div className="w-min-[70vw] bg-[#000000]  text-center relative h-full  text-[72px] outfit text-[#9C9C9C] flex flex-col   items-center justify-center font-semibold ">
        <h4 className="text-[18px] font-light text-[#9C9C9C] outfit">
          <span>Need help in your software development?</span>{" "}
          <span className="font-bold pointer underline">
            <a href="">Let's talk</a>
          </span>
        </h4>
      </div>
      <div className="pointer-events-none bg-transparent h-[50vh]"></div>
    </>
  );
}
