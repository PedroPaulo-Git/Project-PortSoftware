"use client";

import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Outfit } from "next/font/google";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaBoltLightning } from "react-icons/fa6";
import Image from "next/image";
import img from "../assets/Logo.png";
import Hero1 from "../assets/heroimage1.png";
import Hero2 from "../assets/heroimage2.png";
import Hero3 from "../assets/heroimage3.png";
import Hero4 from "../assets/heroimage4.png";
import Hero5 from "../assets/heroimage5.png";
import SubHero from "@/components/SubHero";
import Tecnologias from "@/components/Tecnologias";
import SlideTecnologias from "@/components/SlideTecnologias";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";


const navigation = [
  { name: "INICIO", href: "#INICIO" },
  
  { name: "SOBRE NÓS", href: "#SOBRE" },
  { name: "TECNOLOGIAS", href: "#TECNOLOGIAS" },
  { name: "PROJETOS", href: "#PROJETOS" },
  { name: "TRABALHE CONOSCO", href: "#TRABALHE" },
];

const outfit = Outfit({ subsets: ["latin"] });
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const images = [Hero1, Hero2, Hero3, Hero4, Hero5];
  const extendedImages = [...images, ...images]; 
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 3000); // 3 seconds interval

  //   return () => clearInterval(interval);
  // }, [images.length]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Defina o valor inicial no cliente

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`${outfit.className} scroll-smooth bg-darkCustom  text-white overflow-x-hidden`}
    >
      <header className="absolute inset-x-0 top-0 z-50 border-b-[1px] border-[#1d1c1f] text-[#87858b] sm:px-20 ">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src={img}
                width={100}
                alt=""
                height={100}
                className="pl-2 2xl:pl-0 2xl:w-20 w-16"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold "
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https://wa.me/558182123705?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" className="text-sm/6 font-semibold flex gap-4 items-center  ">
            <FaBoltLightning className="text-Blue_Primary" /> QUERO UM ORÇAMENTO 
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-darkCustom  text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#INICIO" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src={img}
                  width={100}
                  alt=""
                  height={100}
                  className="pl-2 sm:pl-20 max-w-16"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 "
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:bg-Blue_Primary"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
<div className="px-4 sm:pb-10 sm:px-20">


      <div className="relative px-6 py-14 lg:px-8 md:flex sm:justify-between items-end lg:pb-36">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="max-w-2xl pt-24 sm:pt-40 lg:pt-48">
          <div className="hidden sm:flex ">
            <div className="relative text-Blue_Primary font-semibold rounded-full py-1 text-base ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              BEM-VINDO(A) À PORTSOFTWARE 👋
            </div>
          </div>
          <div className="">
            <h1 className="text-[40px] lg:text-5xl font-normal tracking-tight text-balance  sm:text-7xl">
              Desenvolvimento personalizado para sua empresa crescer
            </h1>
            {/* <p className="mt-8 text-lg font-medium text-pretty  sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat.
            </p> */}
            <div className="mt-10 text-left">
              <a href="https://wa.me/558182123705?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" target="_blank" className="text-base text-grayCustom ">
                <span aria-hidden="true"> ↓ </span>Continuar Explorando
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center max-w-48 text-left lg:mr-32 sm:mr-10 mr-0 ">
          <h1 className="text-xl mb-8 ">
            Fazemos a web diferente,todos os dias.
          </h1>
          <a
            href="https://wa.me/558182123705?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!"
            className="neon-button font-semibold text-gray-900 bg-blue-600 p-4 w-full flex justify-center items-center gap-1"
          >
            Vamos começar <span aria-hidden="true"> → </span>
          </a>
        </div>
      </div>

      <div className="flex justify-center w-full overflow-hidden">
      {isMobile ? (
        <motion.div
          className="flex gap-10"
          animate={{
            x: ["0%", "-100%", "-200%", "-300%", "-400%", "-500%", "-600%"], // Move as imagens até o final e reinicia
          }}
          transition={{
            duration: 30, // A duração do loop
            ease: "linear",
            repeat: Infinity, // Loop infinito
          }}
        >
          {extendedImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-72 opacity-70 h-full object-contain"
            />
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="flex gap-10"
          animate={{
            x: ["0%", "-100%", "-200%", "-300%", "-400%", "-500%", "-600%"], // Move as imagens até o final e reinicia
          }}
          transition={{
            duration: 200, // A duração do loop
            ease: "linear",
            repeat: Infinity, // Loop infinito
          }}
        >
          {extendedImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-72 opacity-70 h-full object-contain"
            />
          ))}
        </motion.div>
      )}
    </div>
      </div>

      <SubHero/>
      <Tecnologias/>
      <SlideTecnologias/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}
