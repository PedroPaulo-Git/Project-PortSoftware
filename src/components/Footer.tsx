import React from "react";
import Image from "next/image";
import FooterImage from "../assets/FooterImage.png";
import SlideTecnologiasBottom from "./SlideTecnologiasBottom";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="TRABALHE"
      className="bg-black w-full sm:pt-56 pt-36 text-white relative"
    >
      <div className=" pb-[20rem] flex flex-row max-w-[750px]">
        <div className="sm:pl-40 lg:pl-10 xl:pl-20 pl-6 -mt-40">
          <div className="sm:-mt-[170px] -mt-[50px]">
            <h2 className="text-Blue_Primary font-bold sm:pl-2 pl-1">
              Sobre Nós
            </h2>
            <h1 className="text-gray-800 text-5xl sm:text-8xl font-semibold">
              PortSoftware
            </h1>
          </div>

          <div className="max-w-80 sm:max-w-none">
            <p className="sm:text-4xl text-2xl sm:mb-12 mb-6">
              Transformamos ideias em soluções digitais inovadoras para o seu
              negócio.
            </p>

            <p className="sm:text-lg text-base text-[#969595]">
              A PortSoftware é especializada no desenvolvimento de aplicações
              modernas, escaláveis e seguras. Utilizamos tecnologias avançadas
              para criar sistemas eficientes, que otimizam processos e aumentam
              a produtividade da sua empresa.
            </p>
          </div>
          <div className="flex space-x-6 mt-10">
            <a
              href="https://www.instagram.com/portsoftware"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                className="text-gray-500 hover:text-Blue_Primary "
              />
            </a>
            <a
              href="https://wa.me/558182123705?text=Olá,%20já%20decidi!%20Quero%20contratar%20seus%20serviços.%20Podemos%20conversar? "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                size={30}
                className="text-gray-500 hover:text-Blue_Primary"
              />
            </a>

            <a
              href="mailto:portsoftware@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope
                size={30}
                className="text-gray-500 hover:text-Blue_Primary "
              />
            </a>
          </div>
        </div>
        <div className="">
          <Image
            alt=""
            draggable="false"
            src={FooterImage}
            className="absolute select-none -top-72 xl:-top-60 lg:-top-48 right-0 sm:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[1000px] "
          />
        </div>
      </div>
      <div className=" bottom-0 bg-black ">
        <SlideTecnologiasBottom />
      </div>
    </div>
  );
};

export default Footer;
