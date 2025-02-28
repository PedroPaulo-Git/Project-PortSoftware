import React from "react";
import { motion } from "framer-motion";
// import Git from "../../assets/git.png";
// import PostgreSQL from "../../assets/postgres.png";
// import Typescript from "../../assets/ts.png";
// import Node from "../../assets/node.png";
// import Tailwind from "../../assets/tailwind.png";
// import ReactLogo from "../../assets/react.png";
// import Vercel from "../../assets/Vercel.png";
// import Javascript from "../../assets/js.png";
// import VueJs from "../../assets/vue.png";

const Marquee: React.FC = () => {
    const marquee: string[] = [
        "Automatize processos e ganhe tempo",
        "Aprimore a experiência do usuário",
        "Tecnologia de ponta para crescer online"
      ];
      
  return (
    <div className="bg-[#f0efeb]  border-2 border-grayCustom flex text-2xl h-[8rem] items-center  overflow-x-hidden saturate-0">
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex items-center gap-10 sm:gap-20 flex-shrink-0 sm:pr-20 text-grayCustom"
    >
      {marquee.map((item, index) => (
        <span key={index} className="whitespace-nowrap">{item} <span className="ml-10 sm:ml-20 font-bold"> / </span></span>
      ))}
    </motion.div>
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex items-center gap-10 sm:gap-20 flex-shrink-0 sm:pr-20 text-grayCustom"
    >
      {marquee.map((item, index) => (
        <span key={index} className="whitespace-nowrap">{item} <span className="ml-10 sm:ml-20 font-bold"> / </span></span>
      ))}
    </motion.div>
  </div>
  
  );
};

export default Marquee;
