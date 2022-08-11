/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link';

import React, { useState } from 'react';

function NavLink({ to, children }) {
  return (
    <a href={to} className="hover:text-yellow-400 transition mx-4">
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? '-translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20 text-xl font-semibold">
        {' '}
        {/* logo container */}
        <Link href="/">LOGO</Link>
      </div>
      <div className="flex flex-col ml-4">
        <a className="text-xl font-medium my-4" href="/chi-siamo" onClick={() => setTimeout(() => { setOpen(!open); }, 100)}>
          Chi siamo
        </a>
        <a className="text-xl font-normal my-4" href="/contattaci" onClick={() => setTimeout(() => { setOpen(!open); }, 100)}>
          Contattaci
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-white py-4 h-20 items-center fixed top-0 w-full z-10 px-4 lg:px-24">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center lg:text-2xl font-semibold">
        <Link href="/">LOGO</Link>
      </div>
      <div className="w-9/12 flex justify-end items-center">

        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-3.5' : ''}`} />
          <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? 'w-0' : 'w-full'}`} />
          <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-3.5' : ''}`} />
        </div>

        <div className="hidden md:flex lg:text-2xl gap-10">
          <NavLink to="/contattaci">
            Contattaci
          </NavLink>
          <NavLink to="/chi-siamo">
            Chi siamo
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
