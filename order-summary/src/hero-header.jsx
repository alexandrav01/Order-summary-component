import { useState } from "react";
import hero from "./assets/hero.svg";
import "./hero-header.css";

function Hero() {
  return (
    <>
      <img src={hero} alt="hero" className='img'></img>
    </>
  );
}

export default Hero;
