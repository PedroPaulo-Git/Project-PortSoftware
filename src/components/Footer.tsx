import React from "react";
import SlideTecnologiasBottom from "./SlideTecnologiasBottom";

const Footer = () => {
  return (
    <div className="bg-black w-full pt-56 text-white">
        <div className="pb-80 flex">
       
          <div className="pl-40">
          <h1 className="text-gray-800 text-8xl">OLA MUNDO</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ab aut dolor fugiat quidem aliquid commodi reiciendis quisquam eaque
            blanditiis alias cupiditate fugit magni illum ipsum, eveniet natus
            provident necessitatibus?
          </p>
          </div>
          <div>

          </div>
        </div>
      <div className="relative bottom-0">
        

        <SlideTecnologiasBottom />
      </div>
    </div>
  );
};

export default Footer;
