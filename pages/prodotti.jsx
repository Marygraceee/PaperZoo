/* eslint-disable react/prop-types */
import React from 'react';
import client from '../lib/commerce';

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
    <div className=" bg-green-200 flex flex-col items-center ">
      <div id="Fredoka" className=" w-full flex justify-center">
        <h1 className="lg:text-3xl text-2xl">Prodotti</h1>
      </div>

    </div>
  );
}
