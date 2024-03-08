import React from "react";
import pix3 from "../assets/pix3.jpg";

const About = () => {
  return (
    <div className="mx-24">
      <div className="float-left w-[50%]">
        <h4 className="pt-28 text-xl">ABOUT US</h4>
        <p className="pt-2 ">
          At 'Garna', we're passionate about the art and <br />
          science of skincare. Our mission is to empower <br />
          individuals on their journey to healthier, more <br /> radiant skin.
          With a team of skincare enthusiasts, <br />
          experts and commitment to quality. we curate <br />a selection of the
          finest skincare products,tips <br /> and resources to help you achieve
          your skincare <br />
          goals{" "}
        </p>
      </div>
      <img
        src={pix3}
        alt=""
        className="float-right w-[50%] h-[70vh] mb-8 object-cover"
      />
    </div>
  );
};

export default About;
