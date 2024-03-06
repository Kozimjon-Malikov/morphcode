import React from "react";

const Footer = () => {
  return (
    <footer className="container flex flex-wrap md:flex-nowrap my-8">
      <div className="w-full sm:3/6 md:3/12">
        <h2 className="font-bold text-stone-700 text-xl">Academy</h2>
        <p>Start Learning</p>
        <p>Mapping Urban Data</p>
        <p>Getting started with Rabbit</p>
      </div>
      <div className="w-full sm:3/6 md:3/12">
        <h2 className="font-bold text-stone-700 text-xl">Works</h2>
        <p>Urban layers</p>
        <p>Rabbit</p>
        <p>The heritage of Sofia</p>
        <p>The pulse of Melbourne</p>
      </div>
      <div className="w-full sm:3/6 md:3/12">
        <h2 className="font-bold text-stone-700 text-xl">From the Blog</h2>
        <p>The use of color in maps</p>
        <p>Global trends of urbanization</p>
        <p>Small multiples</p>
        <p>Morphocode in the best american infographics</p>
        <p>Inspiration</p>
        <p>Featured stories</p>
      </div>
      <div className="w-full sm:3/6 md:3/12">
        <h2 className="font-bold text-stone-700 text-xl">Get to know us</h2>
        <p>About</p>
        <p>Contact us</p>
      </div>
    </footer>
  );
};

export default Footer;
