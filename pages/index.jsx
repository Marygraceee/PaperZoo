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
    <div className="flex flex-col min-h-screen max-h-fit gap-10 lg:gap-20 lg:p-5">
      <section id="Hero" style={{ maxHeight: "85vh" }} className="relative w-full overflow-hidden">
        <Image
          className="hover:scale-105 transition ease-in-out duration-500"
          style={{
            aspectRatio: '16/9', filter: 'brightness(.5)',
          }}
          src={heroImage}
          alt="Hero"
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 text-center pointer-events-none">
          <h1 className="lg:text-4xl md:text-xl text-sm text-white font-bold">
            Cerca fra più di 1.000 prodotti pensati per il benessere del tuo animale,
            per soddisfare le sue esigenze, ma anche le tue!
          </h1>
        </div>

      </section>
    </div>
  );
}
