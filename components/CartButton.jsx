import React from 'react';
import { BsCart } from 'react-icons/bs';

export default function CartButton() {
  return (
    <a
      className="bg-orange-400 text-white hover:bg-orange-300 hover:scale-105 shadow-md rounded-full h-fit w-fit my-auto p-3"
      href="/carrello"
    >
      <BsCart />
    </a>
  );
}
