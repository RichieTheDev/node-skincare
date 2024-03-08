import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Catalogs from "../Catalogs";
import pix4 from "../assets/pix4.jpg";
import pix5 from "../assets/pix5.jpg";
import pix6 from "../assets/pix6.jpg";
import pix7 from "../assets/pix7.jpg";
const Category = () => {
  return (
    <div className="clear-both mt-6 px-6">
      <div>
        <h1 className="pt-4 text-center text-5xl pb-4">CATALOG</h1>
        <Splide
          options={{
            pagination: false,
            perPage: 4,
            gap: "1.5rem",
            rewind: false,
            autoplay: true,
            arrows: true,
            type: "loop",
            drag: "free",
            breakpoints: {
              640: {
                perPage: 2,
                arrows: false,
              },
              768: {
                perPage: 2,
                arrows: false,
              },
            },
          }}
          className=" "
        >
          {Catalogs.map((catalog) => (
            <SplideSlide key={catalog.id}>
              <div className="flex flex-col mx-auto items-center ">
                <img
                  src={catalog.image}
                  alt=""
                  className="size-80 rounded-lg"
                />

                <button className="mt-2 w-[14vw] px-4 py-2 rounded border border-black uppercase">
                  BUY {catalog.Catalog}
                </button>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="flex justify-around pt-14">
        <img src={pix4} alt="" className="object-cover w-[45vw] h-[70vh]" />
        <p className=" W-[50%] text-xl font-semibold pt-36 text-center">
          GET A DISCOUNT <br />
          <span>Subscribe and get 20% off for the next order</span> <br />
          <span>
            {" "}
            <button className="mt-2 w-[20vw] px-4 py-2 rounded border border-black uppercase">
              SUBSCRIBE
            </button>
          </span>
        </p>
      </div>
      <div>
        <h1 className="mt-12 text-5xl font-semibold text-center">
          FOLLOW US ON INSTAGRAM
        </h1>
        <p className="pt-4 flex justify-center mx-14 gap-8">
          <img
            src={pix5}
            alt=""
            className="rounded object-cover w-[25vw] h-[50vh]"
          />
          <img
            src={pix7}
            alt=""
            className="rounded object-cover w-[25vw] h-[50vh]"
          />
          <img
            src={pix6}
            alt=""
            className="rounded object-cover w-[25vw] h-[50vh]"
          />
        </p>
        <button className="flex justify-center mx-auto mt-8 w-[30vw] text-lg px-4 py-2 rounded border border-black uppercase">
          FOLLOW
        </button>
      </div>
      <div className="border-b-2 border-black mt-20"></div>
    </div>
  );
};

export default Category;
