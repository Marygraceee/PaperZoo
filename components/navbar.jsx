/* eslint-disable quotes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link';
import { BsCart } from "react-icons/bs";
import React, { useState } from 'react';
import CartButton from './CartButton';

function NavLink({ to, children }) {
  return (
    <a
      href={to}
      className="flex w-[7rem] flex-col items-center justify-center hover:text-orange-400 hover:border-orange-400 first-letter
     border-b-4 border-transparent  transition mx-4 h-full font-extralight "
    >
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div id="Fredoka" className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? '-translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
      <div className="flex items-center justify-center filter drop-shadow-lg bg-white h-20 text-2xl font-semibold">
        {' '}
        {/* PaperZoo container */}
        <Link href="/">PaperZoo</Link>
      </div>
      <div className="flex flex-col ml-4">
        <a className="text-xl font-medium my-4" href="/categorie" onClick={() => setTimeout(() => { setOpen(!open); }, 100)}>
          Categorie
        </a>
        <a className="text-xl font-medium my-4" href="/prodotti" onClick={() => setTimeout(() => { setOpen(!open); }, 100)}>
          Prodotti
        </a>
        <a className="text-xl font-medium my-4" href="/chi-siamo" onClick={() => setTimeout(() => { setOpen(!open); }, 100)}>
          Chi siamo
        </a>
        <a className="text-xl font-normal my-4" href="/contattaci" onClick={() => setTimeout(() => { setOpen(!open); }, 100)}>
          Contattaci
        </a>
        <CartButton />

      </div>
    </div>
  );
}

export default function Fredoka() {
  const [open, setOpen] = useState(false);
  return (
    <nav id="Fredoka" className="flex filter drop-shadow-lg bg-white  h-20 items-center sticky top-0 w-full z-10 px-4 lg:px-24">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center lg:text-2xl text-xl">
        <Link href="/">PaperZoo</Link>
      </div>
      <div className="w-9/12 flex justify-end items-center  h-full">

        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center lg:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-3.5' : ''}`} />
          <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? 'w-0' : 'w-full'}`} />
          <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-3.5' : ''}`} />
        </div>

        <div className="hidden lg:flex lg:text-xl gap-5 h-full">
          <NavLink to="/categorie">
            Categorie
          </NavLink>
          <NavLink to="/prodotti">
            Prodotti
          </NavLink>
          <NavLink to="/chi-siamo">
            Chi siamo
          </NavLink>
          <NavLink to="/contattaci">
            Contattaci
          </NavLink>
          <CartButton />
        </div>
      </div>
    </nav>
  );
}
