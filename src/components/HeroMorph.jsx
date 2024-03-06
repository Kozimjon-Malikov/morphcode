import React from "react";
import hero3 from "../images/hero-3.png"
const HeroMorph = () => {
  return (
    <>
      <section className="my-8 hero">
        <div className="flex items-center flex-wrap">
          <div className="hero__content w-full sm:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-6xl w-full sm:w-5/6 text-stone-700 my-10 font-bold">
            Learn with Morphocode
            </h2>
            <p className="text-md sm:text-xl  w-full sm:w-5/6">
            Morphocode Academy is an online school that covers topics in data visualization, creative coding, and urban informatics.
            </p>
            <a href="#" className="text-blue-500 font-sm">
              Start Learning
            </a>
          </div>
          <div className="hero__img w-full sm:w-1/2">
            <img src={hero3} alt="hero-3" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroMorph;
