/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import CartButton from './CartButton';
import Logo from "../public/paperzoo.png";
import client from '../lib/commerce';

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

export default function Navbar() {
  const [searchProduct, setSearchProdut] = useState(null);

  const [trasparente, setTrasparente] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (clientWindowHeight > 0) {
      setTrasparente(true);
    } else {
      setTrasparente(false);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav id="Fredoka" className={`lg:flex filter drop-shadow-lg bg-white ${trasparente ? ' bg-opacity-70' : 'bg-opacity-100'} backdrop-blur-sm hidden hover:bg-opacity-100 transition duration-500 ease-in-out h-20 items-center justify-between sticky top-0 w-full z-50 px-4 lg:px-20`}>

      <div className="flex items-center w-1/3 md:w-1/5 lg:w-1/12 scale-110 hover:scale-125 cursor-pointer transition duration-300 object-cover">
        <Link href="/">
          <Image
            className=""
            src={Logo}
            alt="Hero"
          />
        </Link>
      </div>

      <div id="barraRicercaDesktop" className="w-full h-full hidden lg:flex justify-center items-center flex-col ">
        <form className="flex items-center w-1/2" action="/prodotticercati" method="get">
          <label htmlFor="q" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
            </div>
            <input
              onChange={(e) => {
                if (e.target.value.length === 0) {
                  setSearchProdut(null);
                } else {
                  client.products.list({
                    query: e.target.value,
                  }).then((response) => setSearchProdut(response.data));
                }
              }}
              className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-full focus:ring-orange-500 focus:border-orange-500 outline-none block w-full pl-10 p-2.5  "
              type="search"
              placeholder="Cerca"
              name="q"
              id="q"
              inputMode="search"
              required
            />
          </div>
          <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-orange-500 rounded-full border border-orange-500 hover:bg-orange-400 focus:ring-2 focus:outline-none focus:ring-orange-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <span className="sr-only">Search</span>
          </button>
        </form>

        <span className={`bg-white text-black shadow-xl w-6/12 max-h-96 overflow-scroll rounded-lg p-2 gap-5 fixed top-20 ${searchProduct ? "flex flex-col" : "hidden"}`}>
          {searchProduct && searchProduct.map((product) => (
            <div className="flex bg-white text-black lg:flex-row flex-col gap-5 transition duration-300 ease-in-out">
              <div className=" transition duration-300 ease-in-out flex justify-center items-center shadow-lg overflow-hidden bg-red rounded-t-xl">
                <a href={`/prodotti/${product.permalink}`}>
                  <img className="rounded-2xl shadow-xl" style={{ maxWidth: '5rem', objectFit: 'cover', aspectRatio: '1/1' }} src={product.image.url} alt="" />
                </a>
              </div>

              <div
                className=" w-full flex flex-1 flex-col text-left transition items-center justify-center"
              >
                <a className="lg:text-xl text-lg w-full hover:text-orange-400 transition duration-300 ease-in-out" href={`/prodotti/${product.permalink}`}>{product.name}</a>

                <div className="flex w-full justify-center items-center">
                  <p className="lg:text-2xl text-lg w-full text-orange-400">{product.price.formatted_with_symbol}</p>
                </div>
              </div>
            </div>
          ))}
        </span>
      </div>

      <div id="barraRicercaMobile" className="w-full h-full lg:hidden flex bg-red-800 justify-center items-center flex-col ">
        <form className="flex items-center w-1/2" action="/prodotticercati" method="get">
          <label htmlFor="q" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
            </div>
            <input
              onChange={(e) => {
                if (e.target.value.length === 0) {
                  setSearchProdut(null);
                } else {
                  client.products.list({
                    query: e.target.value,
                  }).then((response) => setSearchProdut(response.data));
                }
              }}
              className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-full focus:ring-orange-500 focus:border-orange-500 outline-none block w-full pl-10 p-2.5  "
              type="search"
              placeholder="Cerca"
              name="q"
              id="q"
              inputMode="search"
              required
            />
          </div>
          <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-orange-400 rounded-full border border-orange-400 hover:bg-orange-300 focus:ring-2 focus:outline-none focus:ring-orange-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <span className="sr-only">Search</span>
          </button>
        </form>

        <span className={`bg-white text-black shadow-xl w-6/12 max-h-96 overflow-scroll rounded-lg p-2 gap-5 fixed top-20 ${searchProduct ? "flex flex-col" : "hidden"}`}>
          {searchProduct && searchProduct.map((product) => (
            <div className="flex bg-white text-black lg:flex-row flex-col gap-5 transition duration-300 ease-in-out">
              <div className=" transition duration-300 ease-in-out flex justify-center items-center shadow-lg overflow-hidden bg-red rounded-t-xl">
                <a href={`/prodotti/${product.permalink}`}>
                  <img className="rounded-2xl shadow-xl" style={{ maxWidth: '5rem', objectFit: 'cover', aspectRatio: '1/1' }} src={product.image.url} alt="" />
                </a>
              </div>

              <div
                className=" w-full flex flex-1 flex-col text-left transition items-center justify-center"
              >
                <a className="lg:text-xl text-lg w-full hover:text-orange-400 transition duration-300 ease-in-out" href={`/prodotti/${product.permalink}`}>{product.name}</a>

                <div className="flex w-full justify-center items-center">
                  <p className="lg:text-2xl text-lg w-full text-orange-400">{product.price.formatted_with_symbol}</p>
                </div>
              </div>
            </div>
          ))}
        </span>
      </div>

      <div className=" flex justify-end items-center  h-full">

        <div className="hidden lg:flex lg:text-xl gap-5 h-full">
          <NavLink to="/categorie">
            Categorie
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
