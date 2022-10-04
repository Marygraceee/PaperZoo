/* eslint-disable quotes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import client from '../lib/commerce';
import heroImage from '../public/heroimage.jpg';
import CategorySlider from "../components/CategorySlider";
import ProdottiScontati from "../components/ProdottiScontati";

export async function getStaticProps() {
  const merchant = await client.merchants.about();
  const { data: categories } = await client.categories.list();
  const { data: products } = await client.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default function IndexPage({ merchant, categories, products }) {
  return (
    <div className="flex flex-col w-full gap-10">
      <section id="HeroDesktop" className="relative w-full overflow-hidden hidden shadow-lg shadow-gray-400 lg:flex">
        <Image
          className="hover:scale-105 transition ease-in-out duration-500 h-full"
          style={{
            aspectRatio: '16/9', filter: 'brightness(.5)',
          }}
          src={heroImage}
          alt="Hero"
        />
        <div className="absolute w-full top-1/4 -translate-y-1/4 left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <h1 className="lg:text-4xl md:text-3xl text-xl w-3/4 mx-auto text-white font-extrabold lg:leading-snug">
            Cerca tra moltissimi prodotti pensati per il benessere del tuo animale,
            per soddisfare le sue esigenze, ma anche le tue!
          </h1>
          <button
            type="button"
            className=" pointer-events-auto lg:text-xl md:text-lg text-base bg-orange-400 text-white
           hover:text-orange-400 hover:bg-transparent border-2 border-orange-400 transition duration-300 px-5 py-2 mt-5 rounded-full font-extrabold"
          >
            <a href="/categorie">Scopri i prodotti</a>
          </button>
        </div>

      </section>

      <section id="HeroMobile" className="h-screen w-full lg:hidden flex flex-col items-center justify-center shadow-xl">
        <div className="lg:hidden flex-col flex gap-5 justify-center items-center md:px-20 px-7">
          <h1 className="md:text-3xl text-xl text-white font-extrabold text-center">
            Cerca tra moltissimi prodotti pensati per il benessere del tuo animale,
            per soddisfare le sue esigenze, ma anche le tue!
          </h1>
          <button
            type="button"
            className=" pointer-events-auto lg:text-xl md:text-lg text-base bg-orange-400 text-white
           hover:text-orange-400 hover:bg-transparent border-2 border-orange-400 transition duration-300 px-5 py-2 rounded-full shadow-lg"
          >
            <a href="/categorie">Scopri i prodotti</a>
          </button>
        </div>
      </section>

      <section id="Categorie" className="flex flex-col lg:gap-10 gap-5">
        <h1 className="mx-auto lg:text-3xl md:text-2xl text-xl font-extrabold lg:leading-snug">Sfoglia le categorie!</h1>
        <CategorySlider categories={categories} />
      </section>

      <section className="flex flex-col justify-center items-center bg-gray-100 w-full gap-5 p-10" id="ProdottiScontati">
        <h1 className="mx-auto lg:text-3xl md:text-2xl text-xl font-extrabold lg:leading-snug">Prodotti scontati</h1>
        <ProdottiScontati products={products} />
      </section>
    </div>
  );
}
