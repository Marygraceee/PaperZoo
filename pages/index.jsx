/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import client from '../lib/commerce';
import heroImage from '../public/heroimage.jpg';

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
    <div className="flex flex-col min-h-screen max-h-fit">
      <section id="HeroDesktop" className="relative w-full overflow-hidden lg:block hidden">
        <Image
          className="hover:scale-105 transition ease-in-out duration-500"
          style={{
            aspectRatio: '16/9', filter: 'brightness(.5)',
          }}
          src={heroImage}
          alt="Hero"
        />
        <div className="absolute top-1/4 -translate-y-1/4 left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <h1 className="lg:text-4xl text-lg text-white font-bold ">
            Cerca tra moltissimi prodotti pensati per il benessere del tuo animale,
            per soddisfare le sue esigenze, ma anche le tue!
          </h1>
          <button
            type="button"
            className=" pointer-events-auto lg:text-2xl bg-orange-400 text-white
           hover:text-orange-400 hover:bg-transparent border-2 border-orange-400 transition duration-300 px-5 py-2 mt-5 rounded-lg">
            <a href="/prodotti">Scopri i prodotti</a>
          </button>
        </div>

      </section>

      <section id="HeroMobile" className="h-fit w-full lg:hidden flex flex-col items-center justify-start pt-20 p-5">
        <div className="lg:hidden flex-col flex gap-5 justify-center items-center">
          <h1 className="lg:text-4xl text-lg text-black font-bold ">
            Cerca tra moltissimi prodotti pensati per il benessere del tuo animale,
            per soddisfare le sue esigenze, ma anche le tue!
          </h1>
          <button
            type="button"
            className=" pointer-events-auto lg:text-2xl bg-orange-400 text-white
           hover:text-orange-400 hover:bg-transparent border-2 border-orange-400 transition duration-300 px-5 py-2 rounded-lg"
          >
            <a href="/prodotti">Scopri i prodotti</a>
          </button>
        </div>
      </section>
    </div>
  );
}
