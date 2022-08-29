/* eslint-disable jsx-quotes */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Product({ product }) {
  return (
    <div className="flex p-5 gap-5">

      <div className="aspect-square flex items-center justify-center">
        <img className="rounded-2xl shadow-xl" style={{ maxWidth: '8rem',  objectFit: 'cover', aspectRatio: "1/1" }} src={product.image.url} alt="" />
      </div>

      <div className=" flex  flex-col font-bold text-left transition gap-5 justify-center">
        <p className='lg:text-2xl text-xl'>{product.name}</p>
        <p className='lg:text-xl text-lg '>{product.price.formatted_with_symbol}</p>
      </div>

    </div>
  );
}
