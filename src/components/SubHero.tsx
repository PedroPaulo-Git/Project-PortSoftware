import { useState, useEffect } from "react";
import Image from "next/image";
import mySubHeroPng from "../assets/Subhero.png";
import mySubHeroPng2 from "../assets/Subhero2.png";
import mySubHeroPng3 from "../assets/Subhero3.png";
import img from "../assets/IconCoffee.png";
import { motion, AnimatePresence } from "framer-motion"; // Importe o AnimatePresence

const SubHero = ({ handleForm }: { handleForm: () => void }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);

  // Função para rolar suavemente até uma seção
  // const scrollToSection = (index: number) => {
  //   const sectionHeight = window.innerHeight - 100; // Altura da seção
  //   const targetY = index * sectionHeight; // Posição Y alvo
  //   window.scrollTo({
  //     top: targetY,
  //     behavior: "smooth", // Scroll suave
  //   });
  // };

  // Handle tab clicks
  const handleClick = (index: number) => {
    setActiveIndex(index);
    // scrollToSection(index); // Rola até a seção correspondente
  };

  // Track the scroll position and update the active index based on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate active index based on scroll position
  useEffect(() => {
    const sectionHeight = window.innerHeight - 400; // Define altura da janela
    const newIndex = Math.floor(scrollY / sectionHeight); // Calcula o índice com base no scroll
    if (newIndex < content.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex); // Atualiza o índice se o scroll atingir o próximo índice
    }
  }, [scrollY]);

  const content = [
    {
      title: "Transforme suas ideias em realidade",
      subtitle: "Crie seu site, landing page ou aplicativo do jeito que precisa.",
      description1:
        "Desenvolvemos soluções digitais sob medida para você, seja um site profissional, uma landing page otimizada ou um aplicativo funcional e intuitivo.",
      description2:
        "Nossa equipe foca em design moderno, performance e usabilidade para garantir que sua presença digital se destaque e gere resultados.",
      linkText: "Veja como podemos criar seu projeto",
      linkHref:
        "https://wa.me/558182123705?text=Olá,%20quero%20saber%20mais%20sobre%20desenvolvimento%20de%20sites%20e%20aplicativos!",
      image: mySubHeroPng3,
    },
    {
      title: "Tenha um site que trabalha por você",
      subtitle: "Destaque-se com uma presença digital forte e profissional.",
      description1:
        "Criamos sites e landing pages personalizadas para profissionais autônomos, criadores de conteúdo, freelancers e qualquer pessoa que precise de um espaço online eficiente.",
      description2:
        "Combinamos design estratégico e funcionalidades inteligentes para atrair visitantes e converter clientes, independentemente do seu nicho.",
      linkText: "Veja como criar seu site ideal",
      linkHref:
        "https://wa.me/558182123705?text=Olá,%20quero%20um%20site%20ou%20landing%20page%20para%20meu%20projeto!",
      image: mySubHeroPng2,
    },
    {
      title: "Precisa de algo no digital? A gente faz acontecer",
      subtitle:
        "Desde sites e landing pages até automações e sistemas personalizados.",
      description1:
        "Desenvolvemos soluções digitais para atender exatamente o que você precisa. Seja para vender, apresentar seu trabalho ou automatizar processos, nós temos a solução.",
      description2:
        "Nosso foco é entregar um serviço que realmente faça a diferença para você, seja um freelancer, influenciador, profissional liberal ou dono de um pequeno negócio.",
      linkText: "Saiba como podemos te ajudar",
      linkHref:
        "https://wa.me/558182123705?text=Olá,%20quero%20saber%20como%20vocês%20podem%20me%20ajudar%20no%20digital!",
      image: mySubHeroPng,
    },
  ];
  

  return (
    <div
      id="SOBRE"
      className="flex flex-col sm:flex-row lg:flex px-8 py-40 lg:px-20"
    >
      <div className="lg:w-[12%] border-b-2 sm:border-b-0 sm:border-r-[2px] border-grayCustom border-opacity-20 sm:py-14">
        <Image
          src={img}
          width={100}
          alt=""
          draggable="false"
          height={100}
          className="mx-auto pb-10 sm:pb-0 select-none"
        />
        <div className="relative flex justify-between text-center items-center gap-5 lg:block list-none lg:space-y-16 sm:mt-20">
          {["Aplicativo", "Site", "Serviços"].map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={`cursor-pointer min-w-20 h-12 sm:min-w-32 sm:h-16 sm:flex s
              sm:justify-center sm:items-center sm:text-center ${
                activeIndex === index
                  ? "border-blue-500 sm:border-r-2 sm:border-b-0 border-b-2 sm:h-full"
                  : ""
              }`}
            >
              {item}
            </li>
          ))}
        </div>
      </div>

      {/* Usando AnimatePresence para animar a entrada e saída do conteúdo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex} // Key muda com o activeIndex, forçando a animação
          className=" sm:flex sm:py-14 sm:ml-16 mt-10 sm:mt-0 justify-between"
          initial={{ opacity: 0, y: 10 }} // Estado inicial da animação
          animate={{ opacity: 1, y: 0 }} // Estado animado
          exit={{ opacity: 0, y: -50 }} // Estado de saída
          transition={{ duration: 1 }} // Duração da animação
        >
          <div className="w-full sm:max-w-[35%] space-y-2">
            <h1 className="text-4xl sm:text-6xl sm:mb-10">
              {content[activeIndex].title}
            </h1>
            <h2 className="sm:text-2xl sm:mb-8 pt-10">
              {content[activeIndex].subtitle}
            </h2>
            <p className="text-sm sm:text-base sm:mb-8 text-[#a5a5a5]">
              {content[activeIndex].description1}
            </p>
            <p className="text-sm sm:text-base pb-6 sm:mb-8 text-[#a5a5a5]">
              {content[activeIndex].description2}
            </p>
            <span
              className="mb-10 text-Blue_Primary"
             onClick={handleForm}
            >
              {content[activeIndex]?.linkText} →
            </span>
          </div>
          <div>
            <Image
              src={content[activeIndex].image}
              alt=""
              draggable="false"
              className="w-full h-full select-none object-contain mt-20 lg:mt-0"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SubHero;
