/* eslint-disable jsx-quotes */
/* eslint-disable react/prop-types */
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useToast } from '@chakra-ui/react';

import client from '../lib/commerce';

export default function Product({ product }) {
  const toast = useToast();
  const addToCart = () => client.cart.add(product.id, 1)
    .then(toast({
      title: 'Aggiunto al carrello',
      description: 'Il prodotto è stato aggiunto al carrello',
      status: 'success',
      duration: 9000,
      isClosable: true,
    }));
  return (

    <div className="rounded-lg shadow-md flex flex-col bg-white">
      <a href={`/prodotti/${product.permalink}`} className="flex-1">
        <img className="p-8 rounded-t-lg w-full" src={product.image.url} alt="product" />
      </a>
      <div className="p-2 xl:p-5 flex flex-col h-full justify-between flex-2 gap-5">
        <a href={`/prodotti/${product.permalink}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">{product.name}</h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">{product.price.formatted_with_symbol}</span>
          <button
            type='button'
            onClick={addToCart}
            className="text-white bg-orange-400 hover:bg-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Aggiungi al carrello
          </button>
        </div>
      </div>
    </div>

  );
}
