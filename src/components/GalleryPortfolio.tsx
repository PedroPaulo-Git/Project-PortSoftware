import React, { useEffect, useState } from "react";
import Image from "next/image";
import Image1 from "../assets/portfolio.png";
import Image2 from "../assets/portfolio2.png";
import Image3 from "../assets/portfolio3.png";
import Image4 from "../assets/portfolio4.png";

const GalleryPortfolio = () => {
  const items = [
    {
      id: 1,
      title: "Landing Page",
      description: "Página rápida e otimizada.",
      subdescription:
        "Crie páginas de alta conversão para aumentar suas vendas e capturar leads com design moderno e performance imbatível.",
      image: Image1,
    },
    {
      id: 2,
      title: "App/Sistema",
      description: "Soluções para celular.",
      subdescription:
        "Transforme sua ideia em um aplicativo ou sistema intuitivo para dispositivos móveis, melhorando a experiência do usuário e otimizando seus processos.",
      image: Image2,
    },
    {
      id: 3,
      title: "Site Profissional",
      description: "Presença digital confiável.",
      subdescription:
        "Construa um site funcional e visualmente impressionante, alinhado com sua marca, para atrair e engajar clientes em qualquer dispositivo.",
      image: Image3,
    },
    {
      "id": 4,
      "title": "SaaS para Seu Negócio",
      "description": "Tudo o que você precisa, sem complicação.",
      "subdescription": "Um software como serviço (SaaS) que simplifica a gestão do seu negócio. Sem instalações, sem dor de cabeça. Acesse, automatize e foque no que realmente importa.",
      "image": Image4
    }
    
  ];
  const [screenWidth, setScreenWidth] = useState<number | undefined>(undefined); // Inicialize com undefined
  const [isMounted, setIsMounted] = useState(false); // P
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    if (typeof window !== "undefined") {
      handleResize(); // Atualize a largura da tela logo após o carregamento no lado do cliente
    }

    setIsMounted(true); // Marca que o componente foi montado
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (!isMounted) {
    return null; // Evita renderização até que o componente seja montado
  }
  const width = screenWidth || 0;
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <ul className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <li key={item.id} className="group block overflow-hidden">
              {width > 600 ? (
                <div>
                  {index % 2 !== 0 && (
                    <div className="text-black">
                      <p className="text-lg font-bold">{item.title}</p>
                      <p className="text-sm font-medium mb-3 text-gray-600">
                        {item.description}
                      </p>
                      <p className="text-sm font-normal text-gray-800">
                        {item.subdescription}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div></div>
              )}

              <Image
                src={item.image}
                alt={item.title}
                className="h-[300px] w-full object-contain transition"
              />
              {width < 600 ? (
                <div>
                  {index % 2 !== 0 && (
                    <div className="text-black">
                      <p className="text-lg font-bold">{item.title}</p>
                      <p className="text-sm font-medium mb-3 text-gray-600">
                        {item.description}
                      </p>
                      <p className="text-sm font-normal text-gray-800">
                        {item.subdescription}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div></div>
              )}
              {index % 2 === 0 && (
                <div className="text-black">
                  <p className="text-lg font-bold">{item.title}</p>
                  <p className="text-sm font-medium  mb-3 text-gray-600">
                    {item.description}
                  </p>
                  <p className="text-sm font-normal text-gray-800">
                    {item.subdescription}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GalleryPortfolio;
