import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { MdOutlineContactSupport } from 'react-icons/md';
import { BsCart } from 'react-icons/bs';

function BottomNavigation() {
  return (

    <section id="bottom-navigation" className="lg:hidden sticky bottom-0 bg-orange-400 text-white">

      <div id="tabs" className="flex justify-between p-2">
        <a href="/" className="w-full focus:text-orange-300 hover:text-orange-300 flex flex-col justify-center items-center text-center gap-1 text-lg">
          <AiOutlineHome />
          <span className="tab tab-home block text-xs">Home</span>
        </a>
        <a href="/categorie" className="w-full focus:text-orange-300 hover:text-orange-300 flex flex-col justify-center items-center text-center gap-1 text-lg">
          <BiCategory />
          <span className="tab tab-kategori block text-xs">Categorie</span>
        </a>
        <a href="/contatti" className="w-full focus:text-orange-300 hover:text-orange-300 flex flex-col justify-center items-center text-center gap-1 text-lg">
          <MdOutlineContactSupport />
          <span className="tab tab-explore block text-xs">Contatti</span>
        </a>
        <a href="/carrello" className="w-full focus:text-orange-300 hover:text-orange-300 flex flex-col justify-center items-center text-center gap-1 text-lg">
          <BsCart />
          <span className="tab tab-whishlist block text-xs">Carrello</span>
        </a>
      </div>
    </section>
  );
}

export default BottomNavigation;
