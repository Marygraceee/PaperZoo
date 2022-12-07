/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React from 'react';
import Product from './Product';

export default function ProductList({ products }) {
  if (!products) return null;

  return (
    <ul className="grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-5 mx-auto">
      {products.map((product) => (
        <Product key={product.permalink} product={product} />
      ))}
    </ul>
  );
}
