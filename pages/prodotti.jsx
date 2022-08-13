/* eslint-disable react/prop-types */
import React from 'react';
import client from '../lib/commerce';
import ListaProdottiCarta from '../components/ListaProdottiCarta';

export async function getStaticProps() {
  const { data: products } = await client.products.list();

  return {
    props: {
      products,
    },
  };
}

export default function ProductsPage({ products }) {
  return (
    <div className="flex flex-col items-center  min-h-screen max-h-fit pt-36 p-10 gap-10 lg:pt-36 lg:p-10">
      <div className=" w-full flex justify-center">
        <h1 className="lg:text-3xl text-2xl">Prodotti</h1>
      </div>

      <div>
        <ListaProdottiCarta products={products} />
      </div>
    </div>
  );
}
