import React from "react";
import { ReactComponent as Rays } from "./assets/rays.svg";
import { ReactComponent as Stairs } from "./assets/stairs.svg";
import { ReactComponent as Cubes } from "./assets/cubes.svg";
import { ReactComponent as Cube } from "./assets/cube.svg";
import { ReactComponent as Pillar } from "./assets/pillar.svg";
import { ReactComponent as Phone } from "./assets/phone.svg";
import { ReactComponent as Arrow } from "./assets/arrow.svg";

import Header from "./components/Header";
import "./Hero.css";
import Footer from "./components/Footer";
const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <div className="hero-body">
        <Rays className="center" />
        <Stairs className="stairs" />
        <Pillar className="pillar" />
        <Cube className="cube" />
        <Cubes className="cubes" />
        <p id="cash">CASH</p>
        <Phone className="phone" />
        <p id="app">APP</p>
        <Arrow className="hero-arrow" />
      </div>
      <Footer />
    </div>
  );
};
export default Hero;
