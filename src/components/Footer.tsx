import React from "react";
import Image from "next/image";
import FooterImage from "../assets/FooterImage.png";
import SlideTecnologiasBottom from "./SlideTecnologiasBottom";

const Footer = () => {
  return (
    <div className="bg-black w-full pt-56 text-white relative">
      <div className=" pb-[20rem] flex flex-row max-w-[750px]">
        <div className="pl-40 -mt-40">
          <div className="-mt-[170px]">
            <h2 className="text-Blue_Primary font-bold pl-2">Sobre Nós</h2>
            <h1 className="text-gray-800 text-8xl font-semibold">
              PortSoftware
            </h1>
          </div>

          <p className="text-4xl mb-12">
            Transformamos ideias em soluções digitais inovadoras para o seu
            negócio.
          </p>

          <p className="text-lg text-[#969595]">
            A PortSoftware é especializada no desenvolvimento de aplicações
            modernas, escaláveis e seguras. Utilizamos tecnologias avançadas
            para criar sistemas eficientes, que otimizam processos e aumentam a
            produtividade da sua empresa.
          </p>
          
        </div>
          <div className="">
          <Image alt="" src={FooterImage} className="absolute -top-60 right-0 w-[1000px] "/>
   </div>
      </div>
    <div className=" bottom-0 bg-black ">
        <SlideTecnologiasBottom />
      </div>
     
    </div>
  );
};

export default Footer;
