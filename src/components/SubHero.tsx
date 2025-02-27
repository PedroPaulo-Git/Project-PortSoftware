import { useState,useEffect } from "react";
import Image from "next/image";
//import mySubHeroGif from "../assets/gifsubhero-unscreen.gif";
import mySubHeroPng from "../assets/Subhero.png";
import img from "../assets/Logo.png";
const SubHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [divs, setDivs] = useState<number[]>([]);

  const handleClick = (index: any) => {
    setActiveIndex(index);
    setDivs((prev) => [...prev, index]);
    console.log( index)
  };
  useEffect(()=>{
    console.log(activeIndex.valueOf.length)
  },[])
  return (
    <div className=" flex px-8 py-14">
      <div className="lg:w-[12%] border-r-[2px] border-grayCustom border-opacity-20 py-14">
        <Image src={img} width={100} alt="" height={100} className="" />
        <div className="list-none space-y-16 mt-20">
          {[
            "Serviços",
            "E-commerce",
            "Aplicativo",
            "Aplicativo",
            "Aplicativo",
          ].map((item, index) => (
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
    
      {activeIndex === 0 && (

      <div className="w-2/3 flex py-14 ml-16 ">
      <div className="max-w-[50%]">
        <h1 className="text-6xl mb-28">Veja como podemos te ajudar</h1>
        <h2 className="text-2xl mb-8">
          Lorem exercitationem corrupti labore incidunt tempore obcaecati
          enim.{" "}
        </h2>
        <p className="mb-8">
          Enim quibusdam debitis pariatur veritatis deleniti maxime sint ipsa
          nostrum eligendi molestiae!ipsum dolor sit amet consectetur
          adipisicing elit. Molestias assumenda dolores
        </p>
        <p className="mb-8">
          Enim quibusdam debitis pariatur veritatis deleniti maxime sint ipsa
          nostrum eligendi molestiae!ipsum dolor sit amet consectetur
          adipisicing elit. Molestias assumenda dolores
        </p>
        <a className="text-Blue_Primary" href="">
          Veja como funciona →
        </a>
      </div>
      <div>
        <Image
          src={mySubHeroPng}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </div>


      )}
      {activeIndex === 1 && (
       <div className="w-2/3 flex py-14 ml-16 ">
       <div className="max-w-[50%]">
         <h1 className="text-6xl mb-28">Veja como podemos te ajudar</h1>
         <h2 className="text-2xl mb-8">
           Lorem exercitationem corrupti labore incidunt tempore obcaecati
           enim.{" "}
         </h2>
         <p className="mb-8">
           Enim quibusdam debitis pariatur veritatis deleniti maxime sint ipsa
           nostrum eligendi molestiae!ipsum dolor sit amet consectetur
           adipisicing elit. Molestias assumenda dolores
         </p>
         <p className="mb-8">
           Enim quibusdam debitis pariatur veritatis deleniti maxime sint ipsa
           nostrum eligendi molestiae!ipsum dolor sit amet consectetur
           adipisicing elit. Molestias assumenda dolores
         </p>
         <a className="text-Blue_Primary" href="">
           Veja como funciona →
         </a>
       </div>
       <div>
         <Image
           src={mySubHeroPng}
           alt=""
           className="w-full h-full object-contain"
         />
       </div>
     </div>
 
      )}
      {activeIndex === 2 && (
        <div className="w-2/3 flex py-14 ml-16 ">
        <div className="max-w-[50%]">
          <h1 className="text-6xl mb-28">Veja como podemos te ajudar</h1>
          <h2 className="text-2xl mb-8">
            Lorem exercitationem corrupti labore incidunt tempore obcaecati
            enim.{" "}
          </h2>
          <p className="mb-8">
            Enim quibusdam debitis pariatur veritatis deleniti maxime sint ipsa
            nostrum eligendi molestiae!ipsum dolor sit amet consectetur
            adipisicing elit. Molestias assumenda dolores
          </p>
          <p className="mb-8">
            Enim quibusdam debitis pariatur veritatis deleniti maxime sint ipsa
            nostrum eligendi molestiae!ipsum dolor sit amet consectetur
            adipisicing elit. Molestias assumenda dolores
          </p>
          <a className="text-Blue_Primary" href="">
            Veja como funciona →
          </a>
        </div>
        <div>
          <Image
            src={mySubHeroPng}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
  
      )}
      {activeIndex === 3 && (
        <div className="w-2/3 flex py-14 ml-16 ">
        <div className="max-w-[50%]">
          <h1 className="text-6xl mb-28">Veja como podemos te ajudar</h1>
          <h2 className="text-2xl mb-8">
            Lorem exercitationem corrupti labore incidunt tempore obcaecati
            enim.{" "}
          </h2>
          <p className="mb-8">
            Enim quibusdam debitis pariatur veritatis deleniti maxime sint ipsa
            nostrum eligendi molestiae!ipsum dolor sit amet consectetur
            adipisicing elit. Molestias assumenda dolores
          </p>
          <p className="mb-8">
            Enim quibusdam debitis pariatur veritatis deleniti maxime sint ipsa
            nostrum eligendi molestiae!ipsum dolor sit amet consectetur
            adipisicing elit. Molestias assumenda dolores
          </p>
          <a className="text-Blue_Primary" href="">
            Veja como funciona →
          </a>
        </div>
        <div>
          <Image
            src={mySubHeroPng}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
  
      )}
      {activeIndex === 4 && (
        <div className="w-2/3 flex py-14 ml-16 ">
        <div className="max-w-[50%]">
          <h1 className="text-6xl mb-28">Veja como podemos te ajudar</h1>
          <h2 className="text-2xl mb-8">
            Lorem exercitationem corrupti labore incidunt tempore obcaecati
            enim.{" "}
          </h2>
          <p className="mb-8">
            Enim quibusdam debitis pariatur veritatis deleniti maxime sint ipsa
            nostrum eligendi molestiae!ipsum dolor sit amet consectetur
            adipisicing elit. Molestias assumenda dolores
          </p>
          <p className="mb-8">
            Enim quibusdam debitis pariatur veritatis deleniti maxime sint ipsa
            nostrum eligendi molestiae!ipsum dolor sit amet consectetur
            adipisicing elit. Molestias assumenda dolores
          </p>
          <a className="text-Blue_Primary" href="">
            Veja como funciona →
          </a>
        </div>
        <div>
          <Image
            src={mySubHeroPng}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
  
      )}
      {/* {activeIndex === 0 ? (
         <div className="w-2/3 flex py-14 mx-auto">
         <div className="max-w-[50%]">
           <h1 className="text-6xl mb-28">Veja como podemos te ajudar</h1>
           <h2 className="text-2xl mb-8">
             Lorem exercitationem corrupti labore incidunt tempore obcaecati
             enim.{" "}
           </h2>
           <p className="mb-8">
             Enim quibusdam debitis pariatur veritatis deleniti maxime sint ipsa
             nostrum eligendi molestiae!ipsum dolor sit amet consectetur
             adipisicing elit. Molestias assumenda dolores
           </p>
           <p className="mb-8">
             Enim quibusdam debitis pariatur veritatis deleniti maxime sint ipsa
             nostrum eligendi molestiae!ipsum dolor sit amet consectetur
             adipisicing elit. Molestias assumenda dolores
           </p>
           <a className="text-Blue_Primary" href="">
             Veja como funciona →
           </a>
         </div>
         <div>
           <Image
             src={mySubHeroPng}
             alt=""
             className="w-full h-full object-contain"
           />
         </div>
       </div>
        ):( 
          <div>

          </div>
        )} */}
    
    </div>
  );
};

export default SubHero;
