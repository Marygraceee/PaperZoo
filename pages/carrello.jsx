/* eslint-disable max-len */
import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import client from '../lib/commerce';
import CarrelloVuoto from '../components/CarrelloVuoto';
import Breadcrumbs from '../components/Breadcrumbs';
import { useToast } from '@chakra-ui/react';

function Carrello() {

  const toast = useToast();
  const emptyCart = () => client.cart.empty().then((response) => setCart(response)).then(toast({
    title: "Grazie per l'acquisto",
    status: 'success',
    duration: 9000,
    isClosable: true,
  }))
    
   

  const [cart, setCart] = useState(null);
  cart ? console.log(cart) : client.cart.retrieve().then(((response) => setCart(response)));

  if (!cart) {
    return <CarrelloVuoto />;
  }
  return (
    <div className="flex flex-col justify-start items-center gap-10 p-5 min-h-screen">
      <Breadcrumbs />
      <section>
        <h1 className="mx-auto lg:text-3xl md:text-2xl text-xl font-extrabold lg:leading-snug">
          Hai
          {' '}
          {cart.total_items}
          {' '}
          elementi nel carrello
        </h1>

      </section>
      <section className="flex w-full flex-col">
        {cart.line_items.map((item) => (
          <div key={item.name} className="flex lg:flex-row flex-col w-full p-5 lg:gap-10 gap-5 justify-center border-b-2 border-black">
            <div className="hover:scale-105 transition duration-300 ease-in-out flex justify-center items-center">
              <a href={`/prodotti/${item.permalink}`}>
                <img className="rounded-2xl shadow-xl" style={{ maxWidth: '10rem', objectFit: 'cover', aspectRatio: '1/1' }} src={item.image.url} alt="" />
              </a>
            </div>
            <div className="flex flex-col items-center justify-center">
              <a className="lg:text-xl text-lg w-full font-extrabold hover:text-orange-400 hover:scale-105 transition duration-300 ease-in-out text-center" href={`/prodotti/${item.permalink}`}>{item.name}</a>
              <p className="lg:text-xl text-lg">{item.price.formatted_with_symbol}</p>

              <div className="flex lg:flex-row flex-col justify-center items-center gap-5 p-10">
                <div className="flex justify-center items-center gap-5">
                  <button
                    className="block text-center mx-auto aspect-square p-2 lg:hover:bg-transparent lg:hover:text-orange-400 rounded-full border border-orange-400 bg-orange-400 text-white"
                    type="button"
                    onClick={() => {
                      client.cart.update(item.id, { quantity: item.quantity - 1 }).then((response) => setCart(response));
                    }}
                  >
                    <AiOutlineMinus />
                  </button>
                  <p className="lg:text-xl text-lg">
                    Quantità:
                    {` ${item.quantity}`}
                  </p>
                  <button
                    className="block text-center mx-auto aspect-square p-2 lg:hover:bg-transparent lg:hover:text-orange-400 rounded-full border border-orange-400 bg-orange-400 text-white"
                    type="button"
                    onClick={() => {
                      client.cart.update(item.id, { quantity: item.quantity + 1 }).then((response) => setCart(response));
                    }}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>

                <button
                  className="text-white bg-red-500 hover:bg-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="button"
                  onClick={() => {
                    client.cart.remove(item.id).then((response) => setCart(response));
                  }}

                >
                  Rimuovi dal carrello
                </button>
              </div>
              <p className="lg:text-xl text-lg">
                Subtotale:
                {' '}
                {item.line_total.formatted_with_symbol}
              </p>
            </div>

          </div>
        ))}
      </section>
      <section className="flex flex-col items-center gap-5">
        <h1 className="mx-auto lg:text-3xl md:text-2xl text-xl font-extrabold lg:leading-snug">
          Totale:
          {' '}
          {cart.subtotal.formatted_with_symbol}
          {console.log(cart)}
        </h1>

        <button 
        onClick={emptyCart}
        className={`${cart.total_items === 0 ? "hidden" : "block"} text-white bg-orange-400 hover:bg-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
          Procedi all'acquisto
        </button>

      </section>

    </div>
  );
}

export default Carrello;
