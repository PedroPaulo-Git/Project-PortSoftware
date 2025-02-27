"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Outfit } from "next/font/google";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const outfit = Outfit({ subsets: ["latin"] });
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className={`${outfit.className} bg-darkCustom  text-white overflow-x-hidden`}
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
                className="pl-2 sm:pl-20 lg:min-w-40"
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
            <a href="#" className="text-sm/6 font-semibold ">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src={img}
                  width={100}
                  alt=""
                  height={100}
                  className="pl-2 sm:pl-20 min-w-40"
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
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold  hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
<div className="px-4 sm:pb-10 sm:px-20">


      <div className="relative px-6 py-14 lg:px-8 md:flex sm:justify-between">
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
        <div className="max-w-2xl pt-32 sm:pt-40 lg:pt-48">
          <div className="hidden sm:flex ">
            <div className="relative text-Blue_Primary font-semibold rounded-full py-1 text-base ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              BEM-VINDO(A) À PORTSOFTWARE 👋
            </div>
          </div>
          <div className="">
            <h1 className="text-4xl lg:text-5xl font-normal tracking-tight text-balance  sm:text-7xl">
              Desenvolvimento personalizado para sua empresa crescer
            </h1>
            {/* <p className="mt-8 text-lg font-medium text-pretty  sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat.
            </p> */}
            <div className="mt-10 text-left">
              <a href="#" className="text-base text-grayCustom ">
                <span aria-hidden="true"> ↓ </span>Continuar Explorando
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center max-w-48 text-left mr-28 mb-28">
          <h1 className="text-xl mb-8 ">
            Fazemos a web diferente,todos os dias.
          </h1>
          <a
            href="#"
            className="neon-button font-semibold text-gray-900 bg-blue-600 p-4 w-full flex justify-center items-center gap-1"
          >
            Vamos começar <span aria-hidden="true"> → </span>
          </a>
        </div>
      </div>
      <div className="flex gap-10 justify-center">
       <Image
       className="w-72 opacity-70 h-full"
       alt=""
       src={Hero1}
       />
  <Image
       className="w-72 opacity-70 h-full"
       alt=""
       src={Hero2}
       />
  <Image
       className="w-72 opacity-70 h-full"
       alt=""
       src={Hero3}
       />
  <Image
       className="w-72 opacity-70 h-full"
       alt=""
       src={Hero4}
       /> 
       <Image
       className="w-72 opacity-70 h-full"
       alt=""
       src={Hero5}
       />

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
