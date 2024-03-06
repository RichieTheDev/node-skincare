import React, { useEffect, useState } from "react";
import Hero1 from "../assets/Hero1.jpg";
import axios from "axios";

const Hero = () => {
  const [ducks, setDucks] = useState([]);
  useEffect(() => {
   const fetchData= async ()=>{
    try {
      const res = await axios.get('jk').setDucks(res.duck)
    } catch (error) {
      console.log(error)
    }
   }
   fetchData()
  }, []);
  return (
    <div className="">
      <img
        src={Hero1}
        alt=""
        className="bg-cover bg-center w-screen h-[75vh] object-cover relative "
      />
      <p className="absolute top-40 text-8xl left-40 text-white">
        PURE CARE <br />
        <span className="text-6xl">
          Elevate your beauty <br /> with nature's touch
        </span>
      </p>

      <div>
        {ducks?.map((duck) => (
          <div key={duck.id}>
            <img src={duck.title} alt="" width={400} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
