/* eslint-disable jsx-quotes */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Product({ product }) {
  return (
    <div className="flex flex-row container items-center justify-start gap-10 w-full">

      <div>
        <img className="rounded-2xl aspect-square shadow-xl" style={{ maxWidth: '10rem', minHeight: '100%', objectFit: 'cover' }} src={product.image.url} alt="" />
      </div>

      <div className="flex flex-col w-full">
        <p className='lg:text-2xl text-sm'>{product.name}</p>
        <p className='lg:text-xl text-xs text-black/90'>{product.price.formatted_with_symbol}</p>
      </div>

    </div>
  );
}
