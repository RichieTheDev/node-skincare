import React, { useEffect, useState } from "react";
import Hero1 from "../assets/Hero1.jpg";
import axios from "axios";

const Hero = () => {
  return (
    <div className="">
      <img
        src={Hero1}
        alt=""
        className="bg-cover bg-center w-screen h-[75vh] object-cover relative "
      />
      <p className="absolute lg:top-40 sm:text-8xl lg:left-40 sm:top-24  sm:left-20 top-32 text-4xl left-10 text-white">
        PURE CARE <br />
        <span className="text-5xl sm:text-6xl">
          Elevate your beauty <br /> with nature's touch
        </span>
      </p>
    </div>
  );
};

export default Hero;
