import { useState, useEffect, act } from "react";
import Image from "next/image";
import mySubHeroPng from "../assets/Subhero.png";
import mySubHeroPng2 from "../assets/Subhero2.png";
import mySubHeroPng3 from "../assets/Subhero3.png";
import img from "../assets/IconCoffee.png";
import { motion, AnimatePresence } from "framer-motion"; // Importe o AnimatePresence

const SubHero = () => {
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
      title: "Como podemos ajudar sua empresa",
      subtitle: "Como podemos ajudar sua empresa com nossos serviços de software.",
      description1:
        "Na PortSoftware, desenvolvemos soluções personalizadas para cada cliente. Oferecemos serviços de desenvolvimento de software, automação de processos e muito mais.",
      description2:
        "Com nosso time altamente qualificado, garantimos que sua empresa tenha as ferramentas necessárias para crescer e se destacar no mercado competitivo.",
      linkText: "Saiba mais sobre nossos serviços",
      image:mySubHeroPng,
    },
    {
      title: "Potencialize seu negócio com uma loja online",
      subtitle: "Potencialize seu negócio com uma loja online de alto desempenho.",
      description1:
        "A PortSoftware cria e-commerce personalizados, com integração de sistemas, otimização para conversão e soluções de pagamento seguras.",
      description2:
        "Desenvolvemos lojas online rápidas e eficientes, garantindo uma experiência de compra fluida para seus clientes e maximizando seu potencial de vendas.",
      linkText: "Descubra nossas soluções para E-commerce",
      image:mySubHeroPng2,
    },
    {
      title: "Transforme suas ideias",
      subtitle: "Transforme suas ideias em aplicativos de sucesso.",
      description1:
        "Desenvolvemos aplicativos móveis que atendem às necessidades do seu negócio, com foco na experiência do usuário e performance.",
      description2:
        "Nosso time de desenvolvimento cria apps intuitivos e robustos que ajudam sua empresa a atingir novos patamares de sucesso no mercado digital.",
      linkText: "Veja como podemos criar seu app",
      image:mySubHeroPng3,
    },
    // {
    //   title: "Soluções SaaS que crescem com você",
    //   subtitle: "Soluções SaaS eficientes e escaláveis para sua empresa.",
    //   description1:
    //     "Oferecemos sistemas SaaS customizados que crescem com seu negócio. Com funcionalidades poderosas e integrações fáceis, garantimos que sua empresa se mantenha competitiva no mercado.",
    //   description2:
    //     "Nossa plataforma SaaS oferece flexibilidade, segurança e uma gestão simplificada, ajudando sua empresa a se adaptar às mudanças do mercado e crescer de forma sustentável.",
    //   linkText: "Saiba mais sobre nossos sistemas SaaS",
    // },
  ];
  

  return (
    <div id="SOBRE" className="flex flex-col sm:flex-row lg:flex px-8 py-40 lg:px-20">
      <div className="lg:w-[12%] border-b-2 sm:border-b-0 sm:border-r-[2px] border-grayCustom border-opacity-20 sm:py-14">
      <Image src={img} width={100} alt="" height={100} className="mx-auto pb-10 sm:pb-0" />
      <div className="relative flex justify-between text-center items-center gap-5 lg:block list-none lg:space-y-16 sm:mt-20">
        {["Serviços", "E-commerce", "Aplicativo"].map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            className={`cursor-pointer h-12 sm:h-6 ${
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
            <h2 className="sm:text-2xl sm:mb-8 pt-10">{content[activeIndex].subtitle}</h2>
            <p className="text-sm sm:text-base sm:mb-8 text-[#a5a5a5]">
              {content[activeIndex].description1}
            
            </p>
            <p className="text-sm sm:text-base pb-6 sm:mb-8 text-[#a5a5a5]">
              {content[activeIndex].description2}
            
            </p>
            <a className="mb-10 text-Blue_Primary" href="">
              {content[activeIndex].linkText} →
            </a>
          </div>
          <div>
            <Image
              src={content[activeIndex].image}
              alt=""
              className="w-full h-full object-contain mt-20 lg:mt-0"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SubHero;