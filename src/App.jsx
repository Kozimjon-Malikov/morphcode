import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HereProject from "./components/HereProject";
import HeroMorph from "./components/HeroMorph";
import Blogs from "./components/Blogs";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import './App.css'
const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <HereProject />
        <HeroMorph />
        <Blogs />
      </div>
      <Subscribe />
      <Footer/>
    </>
  );
};

export default App;
