import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io5";
const WhatsappButton = () => {
 
  return (
<div className="group relative">
  <a
    className="hover:w-14 hover:h-14 hover:bg-Blue_Primary transition-all flex justify-center text-3xl
       m-6 rounded-full items-center w-12 h-12 shadow-black shadow-lg bg-Blue_Primary
       fixed bottom-0 z-20 right-0"
       href="https://wa.me/558182123705?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" 
  >
    <IoLogoWhatsapp />
  </a>
  <a
    className="block sm:hidden group-hover:block text-xs fixed bottom-8 px-6 py-2 z-10 right-16
       bg-Blue_Primary"
       href="https://wa.me/558182123705?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" 
  >
    <span className="pr-2">ENTRAR EM CONTATO</span>
  </a>
</div>

  )
}

export default WhatsappButton