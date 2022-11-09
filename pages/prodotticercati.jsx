import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import client from '../lib/commerce';
import Product from '../components/Product';

export default function getRoute() {
  // Calling useRouter() hook
  const router = useRouter();
  const [prodottiCercati, setProdotti] = useState(null);

  client.products.list({
    query: router.query.q,
  }).then((response) => setProdotti(response.data));
  return (
    <div className="flex flex-col justify-start items-center bg-gray-100 w-full gap-5 p-10 min-h-screen">
      <h1 className="mx-auto lg:text-3xl md:text-2xl text-xl font-extrabold lg:leading-snug">Prodotti cercati</h1>
      <ul className="grid lg:grid-cols-2 grid-cols-1 gap-5 container mx-auto">
        {prodottiCercati && prodottiCercati.map((product) => (
          <Product product={product} />
        ))}
      </ul>
    </div>
  );
}
