import React from 'react'
import Image from "next/image";

import jsLogo from '../assets/js.png'
import tsLogo from '../assets/ts.png'
import nextLogo from '../assets/next.png'
import vueLogo from '../assets/vue.png'
import nodeLogo from '../assets/node.png'
import reactLogo from '../assets/react.png'
import postgresqlLogo from '../assets/postgres.png'

const Tecnologias = () => {
    const features = [
        {
          name: 'Interfaces Dinâmicas',
          description: 'JavaScript permite criar interfaces interativas e fluidas para melhor experiência do usuário.',
          icon: jsLogo,
        },
        {
          name: 'Código Seguro',
          description: 'TypeScript reduz erros e melhora a manutenção, tornando o software mais confiável.',
          icon: tsLogo,
        },
        {
          name: 'Alta Performance',
          description: 'Node.js garante processamento rápido e escalabilidade para aplicações robustas.',
          icon: nodeLogo,
        },
        {
          name: 'SEO e Velocidade',
          description: 'Next.js otimiza a aplicação para carregar rapidamente e melhorar a visibilidade online.',
          icon: nextLogo,
        },
        {
          name: 'Banco de Dados Seguro',
          description: 'PostgreSQL garante integridade, segurança e eficiência no armazenamento de dados.',
          icon: postgresqlLogo,
        },
        {
          name: 'Flexibilidade e Simplicidade',
          description: 'Vue.js é leve e intuitivo, tornando o desenvolvimento rápido e eficiente.',
          icon: vueLogo,
        },
       
        {
          name: 'Desenvolvimento Ágil',
          description: 'React permite a criação de componentes reutilizáveis, acelerando o desenvolvimento.',
          icon: reactLogo,
        },
        
      ];
      

  return (
    <div className='bg-[#f0efeb]  pb-20'>
     
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8  items-center flex flex-col text-center justify-center">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-Blue_Primary">Tecnologias</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          Construindo o futuro com as tecnologias mais avançadas
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          O futuro do seu negócio começa aqui.
          </p>
        </div>
        <div className="w-full mt-16 sm:mt-20 lg:mt-24 ">
  <div className="grid grid-cols-2 grid-rows-1 lg:grid-cols-5 lg:grid-rows-2 gap-8 sm:gap-20 justify-items-center">
    {features.map((feature, index) => (
      <div 
        key={feature.name} 
        className={`relative items-start ${index >= 5 ? 'lg:col-span-2 ' : ''}  ${index == 5 ? ' lg:pl-[200px] lg:-mr-24' : ''} ${index == 6 ? ' pl-[100px] lg:-mr-24 -mr-24' : ''}`} // Para centralizar os 2 itens da última linha
      >
        <dt className="text-base/7 font-semibold text-gray-900 grid ">
          <Image alt="" src={feature.icon} />
          <p className='text-xs'>{feature.name}</p>
        </dt>
        <dd className="mt-2 text-xs sm:text-base/7 text-gray-600">{feature.description}</dd>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
    </div>
  )
}

export default Tecnologias