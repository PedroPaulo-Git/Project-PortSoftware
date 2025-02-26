
import { useState } from "react";
import Image from "next/image";
import img from "../assets/Logo.png";
const SubHero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index:any) => {
    setActiveIndex(index);
  };
  return (
    <div className=" flex px-8 py-14">
      <div className="lg:w-[12%] border-r-[2px] border-grayCustom border-opacity-20 py-14">
        <Image
          src={img}
          width={100}
          alt=""
          height={100}
          className=""
        />
        <div className="list-none space-y-16 mt-20">
      {["Serviços", "E-commerce", "Aplicativo", "Aplicativo", "Aplicativo"].map((item, index) => (
        <li
          key={index}
          onClick={() => handleClick(index)}
          className={`cursor-pointer h-6 ${
            activeIndex === index ? " border-blue-500 border-r-2" : ""
          }`}
        >
          {item}
        </li>
      ))}
    </div>
      </div>

      <div className="w-2/3 flex py-14 mx-auto">
      <div className="max-w-[50%]">
        <h1 className="text-6xl mb-28">Veja como podemos te ajudar</h1>
        <h2 className="text-2xl mb-8">Lorem  exercitationem corrupti labore incidunt tempore obcaecati enim. </h2>
        <p className="mb-8">Enim quibusdam debitis pariatur veritatis deleniti maxime sint ipsa nostrum eligendi molestiae!ipsum dolor sit amet consectetur adipisicing elit. Molestias assumenda dolores</p>
        <p className="mb-8">Enim quibusdam debitis pariatur veritatis deleniti maxime sint ipsa nostrum eligendi molestiae!ipsum dolor sit amet consectetur adipisicing elit. Molestias assumenda dolores</p>
        <a className="text-Blue_Primary" href="">Veja como funciona →</a>
      </div>
        <div>
          <Image
            src={img}
            width={100}
            alt=""
            height={100}
            className="pl-2 sm:pl-20 min-w-40"
          />
       
        </div>
      </div>
    </div>
  );
};

export default SubHero;
