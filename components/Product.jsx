/* eslint-disable jsx-quotes */
/* eslint-disable react/prop-types */
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import client from '../lib/commerce';

export default function Product({ product }) {
  const addToCart = (e) => client.cart.add(product.id, 1);
  return (
    <div className="flex bg-white text-black lg:flex-row flex-col p-5 gap-5 hover:scale-105 transition duration-300 ease-in-out">

      <div className="hover:scale-105 transition duration-300 ease-in-out flex justify-center items-center shadow-lg overflow-hidden bg-white rounded-t-xl">
        <a href={`/prodotti/${product.permalink}`}>
          <img className="rounded-2xl shadow-xl" style={{ maxWidth: '8rem', objectFit: 'cover', aspectRatio: '1/1' }} src={product.image.url} alt="" />
        </a>
      </div>

      <div
        className=" w-full flex flex-1 flex-col text-left transition items-center justify-center  gap-5 p-5"
      >
        <a className="lg:text-xl text-lg w-full font-extrabold hover:text-orange-400 hover:scale-105 transition duration-300 ease-in-out" href={`/prodotti/${product.permalink}`}>{product.name}</a>

        <div className="flex w-full justify-center items-center">
          <p className="lg:text-2xl text-lg w-full text-orange-400">{product.price.formatted_with_symbol}</p>
          <button onClick={addToCart} type="button" className="bg-orange-400 active:bg-orange-400 hover:bg-orange-300 p-5 rounded-full text-xl">
            <AiOutlineShoppingCart />
          </button>

        </div>
      </div>

    </div>
  );
}
