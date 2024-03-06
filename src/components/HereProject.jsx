import React from "react";
import hero2 from "../images/hero-2.png";
const HereProject = () => {
  return (
    <>
      <section className="my-8 hero">
        <div className="flex items-center justify-center flex-wrap">
          <div className="hero__content w-full sm:w-1/2">
            <img src={hero2} alt="hero-2" />
          </div>
          <div className="hero__content w-full sm:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-6xl w-full sm:w-5/6 text-stone-700 my-10 font-bold">
              We research, design, and develop
            </h2>
            <p className="text-md sm:text-xl  w-full sm:w-5/6">
              Our portfolio ranges from interactive web maps and information
              graphics to custom software tools for data analysis and
              visualization.
            </p>
            <a href="#" className='text-blue-500 font-sm'>View Projects</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HereProject;
