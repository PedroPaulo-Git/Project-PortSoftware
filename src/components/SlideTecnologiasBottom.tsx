import React from "react";
import { motion } from "framer-motion";


const Marquee: React.FC = () => {
    const marquee: string[] = [
        "Automatize processos e ganhe tempo",
        "Aprimore a experiência do usuário",
        "Tecnologia de ponta para crescer online"
      ];
      
  return (
    <div className="absolute bottom-0 border-2 border-grayCustom flex text-2xl h-[8rem] items-center -mt-20 overflow-x-hidden saturate-0">
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex items-center gap-20 flex-shrink-0 pr-20 text-grayCustom"
    >
      {marquee.map((item, index) => (
        <span key={index} className="whitespace-nowrap">{item} <span className=" ml-20 font-bold"> / </span></span>
      ))}
    </motion.div>
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex items-center gap-20 flex-shrink-0 pr-20 text-grayCustom"
    >
      {marquee.map((item, index) => (
        <span key={index} className="whitespace-nowrap">{item} <span className="ml-20 font-bold"> / </span></span>
      ))}
    </motion.div>
  </div>
  
  );
};

export default Marquee;
