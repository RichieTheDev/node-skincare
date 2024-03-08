import React from "react";
import pix1 from "../assets/pix1.jpg";
import pix2 from "../assets/pix2.jpg";

const BestSeller = () => {
  return (
    <div>
      <div className="mt-8">
        <h1 className="text-center text-4xl font-semibold pb-4">BESTSELLERS</h1>
        <div className="flex justify-center  gap-16">
          <img src={pix1} alt="" className="w-[45vw] h-[60vh] rounded" />
          <p className="flex items-center flex-col">
            <img src={pix2} alt="" className="w-[35vw] h-[45vh] rounded" />
            <p className=" font-medium pt-2">ORGANIC OIL GLOW RISE</p>
            <p className="pt-1 font-medium text-sm">
              Made from the fruit of rose plants, roseship oil contains both
            </p>
            <p className="pt-1 font-medium text-sm">vitamin C and vitamin A</p>
            <button className="mt-1 px-4 py-2 rounded-lg bg-red-800 text-red-50">
              ADD TO CART
            </button>
          </p>
        </div>
        <div className="flex justify-center mx-auto mb-12">
          <button className="mt-8 w-[20vw] px-4 py-2 rounded border border-black">
            SEE MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
