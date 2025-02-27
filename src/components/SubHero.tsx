import { useState, useEffect } from "react";
import Image from "next/image";
import mySubHeroPng from "../assets/Subhero.png";
import img from "../assets/Logo.png";
import { motion, AnimatePresence } from "framer-motion"; // Importe o AnimatePresence

const SubHero = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);

  // Função para rolar suavemente até uma seção
  const scrollToSection = (index: number) => {
    const sectionHeight = window.innerHeight - 100; // Altura da seção
    const targetY = index * sectionHeight; // Posição Y alvo
    window.scrollTo({
      top: targetY,
      behavior: "smooth", // Scroll suave
    });
  };

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
    const sectionHeight = window.innerHeight - 500; // Define altura da janela
    const newIndex = Math.floor(scrollY / sectionHeight); // Calcula o índice com base no scroll
    if (newIndex < content.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex); // Atualiza o índice se o scroll atingir o próximo índice
    }
  }, [scrollY]);

  const content = [
    {
      title: "Como podemos ajudar sua empresa",
      subtitle: "Como podemos ajudar sua empresa com nossos serviços de software.",
      description:
        "Na PortSoftware, desenvolvemos soluções personalizadas para cada cliente. Oferecemos serviços de desenvolvimento de software, automação de processos e muito mais.",
      linkText: "Saiba mais sobre nossos serviços",
    },
    {
      title: "Potencialize seu negócio com uma loja online ",
      subtitle: "Potencialize seu negócio com uma loja online de alto desempenho.",
      description:
        "A PortSoftware cria e-commerce personalizados, com integração de sistemas, otimização para conversão e soluções de pagamento seguras.",
      linkText: "Descubra nossas soluções para E-commerce",
    },
    {
      title: "Transforme suas ideias",
      subtitle: "Transforme suas ideias em aplicativos de sucesso.",
      description:
        "Desenvolvemos aplicativos móveis que atendem às necessidades do seu negócio, com foco na experiência do usuário e performance.",
      linkText: "Veja como podemos criar seu app",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row lg:flex px-8 py-40 lg:px-20">
      <div className="lg:w-[12%] border-b-2 sm:border-b-0 sm:border-r-[2px] border-grayCustom border-opacity-20 sm:py-14">
      <Image src={img} width={100} alt="" height={100} className="" />
      <div className="relative flex justify-center text-center items-center gap-5 lg:block list-none lg:space-y-16 sm:mt-20">
        {["Serviços", "E-commerce", "Aplicativo"].map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            className={`cursor-pointer h-6 ${
              activeIndex === index
                ? "border-blue-500 sm:border-r-2 sm:border-b-0 border-b-2 h-full"
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
          className="w-2/3 sm:flex sm:py-14 sm:ml-16 mt-10 sm:mt-0"
          initial={{ opacity: 0, y: 20 }} // Estado inicial da animação
          animate={{ opacity: 1, y: 0 }} // Estado animado
          exit={{ opacity: 0, y: -50 }} // Estado de saída
          transition={{ duration: 1 }} // Duração da animação
        >
          <div className="w-full sm:max-w-[50%]">
            <h1 className="text-4xl sm:text-6xl sm:mb-10">
              {content[activeIndex].title}
            </h1>
            <h2 className="text-2xl sm:mb-8">{content[activeIndex].subtitle}</h2>
            <p className="mb-2 sm:mb-8 text-[#a5a5a5]">
              {content[activeIndex].description}
            </p>
            <p className="mb-8 text-[#a5a5a5]">
              {content[activeIndex].description}
            </p>
            <a className="text-Blue_Primary" href="">
              {content[activeIndex].linkText} →
            </a>
          </div>
          <div>
            <Image
              src={mySubHeroPng}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SubHero;