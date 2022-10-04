/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import Link from 'next/link';
import React from 'react';

import Product from './Product';

export default function ProductList({ products }) {
  if (!products) return null;

  return (
    <ul className="grid lg:grid-cols-2 grid-cols-1 gap-5 container mx-auto">
      {products.map((product) => (
        <li
          className="flex rounded-xl shadow-xl bg-white text-black transition duration-300 hover:scale-105 "
          key={product.permalink}
        >
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
}
