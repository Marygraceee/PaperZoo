/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import Link from 'next/link';
import React from 'react';

import Product from './Product';

export default function ProductList({ products }) {
  if (!products) return null;

  return (
    <ul className="flex flex-col gap-5 container mx-auto">
      {products.map((product) => (
        <li
          className="shadow-lg p-5 bg-lime-400 hover:bg-lime-300 hover:scale-[1.01] transition rounded-t-3xl w-full"
          key={product.permalink}
        >
          <Link href={`/prodotti/${product.permalink}`}>
            <a>
              <Product product={product} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
