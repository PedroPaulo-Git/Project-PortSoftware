"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Outfit } from "next/font/google";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaArrowRight } from "react-icons/fa";
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
import WhatsappButton from "@/components/WhatsappButton";

import FormModal from "@/components/mod/FormModal";

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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const images = [Hero1, Hero2, Hero3, Hero4, Hero5];
  const extendedImages = [...images, ...images];


  const handleForm = (()=>{
    setIsOpenModal(true)
  })
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
      <WhatsappButton handleForm={handleForm} />
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
                className="text-sm/6 font-semibold  hover:text-white "
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <span
              onClick={handleForm}
              className="text-sm/6 font-semibold flex gap-4 items-center cursor-pointer hover:text-white"
            >
              <FaBoltLightning className="text-Blue_Primary" /> SOLICITAR
              ORÇAMENTO
            </span>
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
                  draggable="false"
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
                <div className="space-y-6 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
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
      <div className="px-1 sm:pb-10 sm:px-20">
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
            {isOpenModal  && (
              <FormModal open={isOpenModal} onClose={() => setIsOpenModal(false)}/>
            )}
          <div className="max-w-2xl pt-24 sm:pt-40 lg:pt-48">
            <div className="sm:flex ">
              <div className="relative text-Blue_Primary font-semibold rounded-full py-1 text-xs sm:text-base ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                BEM-VINDO(A) À PORTSOFTWARE 👋
              </div>
            </div>
            <div className="">
              <h1 className=" text-[42px] leading-none tracking-tight  lg:text-5xl font-normal text-balance  sm:text-7xl">
                Desenvolvimento personalizado{" "}
                <span className="sm:text-7xl  lg:text-5xl ">
                  para sua empresa crescer
                </span>
              </h1>
              {/* <p className="mt-8 text-lg font-medium text-pretty  sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat.
            </p> */}

              <div className="hidden sm:flex mt-10 text-left ">
                <a
                  href="#SOBRE"
                  className="text-xs sm:text-base text-grayCustom  hover:text-white cursor-pointer"
                >
                  <span aria-hidden="true"> ↓ </span>Continuar Explorando
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0 justify-center items-center max-w-48 text-left lg:mr-32 sm:mr-10 mr-0 ">
            <h1 className="text-sm sm:text-xl mb-4 sm:mb-8 ">
              Fazemos a web diferente,todos os dias.
            </h1>
            <span
            onClick={handleForm}
              className="cursor-pointer hover:scale-105 neon-button font-semibold text-gray-900 bg-blue-600 p-4 w-full flex justify-center items-center text-center gap-1"
            >
              Vamos começar{" "}
              <span aria-hidden="true">
                {" "}
                <FaArrowRight className="mt-0.5" />
              </span>
            </span>
          </div>

          <div className="flex sm:hidden mt-10 text-left ">
            <a href="#SOBRE" className="text-xs sm:text-base text-grayCustom ">
              <span aria-hidden="true"> ↓ </span>Continuar Explorando
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
                  draggable="false"
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
                  draggable="false"
                  alt={`Hero ${index + 1}`}
                  className="w-72 opacity-70 h-full object-contain"
                />
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <SubHero handleForm={handleForm} />
      <span
            onClick={handleForm}
              className="cursor-pointer hover:scale-105 neon-button font-semibold text-gray-900 bg-blue-600 p-4 w-full flex justify-center items-center text-center gap-1"
            >
              Pronto para inovar? Vamos começar! {" "}
              <span aria-hidden="true">
                {" "}
                <FaArrowRight className="mt-0" />
              </span>
            </span>
      <Tecnologias />
      
      <SlideTecnologias />
      
      <Portfolio />
      
      <Footer handleForm={handleForm}  />
    </div>
  );
}
