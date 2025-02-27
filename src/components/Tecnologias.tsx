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
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: jsLogo,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: tsLogo,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: nodeLogo,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: nextLogo,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: reactLogo,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: vueLogo,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: postgresqlLogo,
  },
]

  return (
    <div className='bg-[#edf2f4]'>
     
    <div className="bg-[#f0efeb] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Tecnologias</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          Construindo o futuro com as tecnologias mais avançadas
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          O futuro do seu negócio começa aqui.
          </p>
        </div>
        <div className="w-full mt-16 sm:mt-20 lg:mt-24 ">
          <div className="grid grid-cols-5 grid-rows-2 gap-20 ">
            {features.map((feature) => (
              <div key={feature.name} className="relative items-start">
                <dt className="text-base/7 font-semibold text-gray-900 grid ">
                
                    <Image
                    alt=""
                    src={feature.icon} />
           
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
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