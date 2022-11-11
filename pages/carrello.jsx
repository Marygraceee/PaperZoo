/* eslint-disable max-len */
import React, { useState } from 'react';
import client from '../lib/commerce';
import { CarrelloVuoto } from '../components/CarrelloVuoto';
import Breadcrumbs from '../components/Breadcrumbs';

function Carrello() {
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
                    className="bg-orange-400 active:bg-orange-400 hover:bg-orange-300 px-5 font-extrabold rounded-full text-xl text-white"
                    type="button"
                    onClick={() => {
                      client.cart.update(item.id, { quantity: item.quantity - 1 }).then((response) => setCart(response));
                    }}
                  >
                    -
                  </button>
                  <p className="lg:text-xl text-lg">
                    Quantità:
                    {` ${item.quantity}`}
                  </p>
                  <button
                    className="bg-orange-400 active:bg-orange-400 hover:bg-orange-300 px-5 font-extrabold rounded-full text-xl text-white"
                    type="button"
                    onClick={() => {
                      client.cart.update(item.id, { quantity: item.quantity + 1 }).then((response) => setCart(response));
                    }}
                  >
                    +
                  </button>
                </div>

                <button
                  className=" bg-red-600 active:bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-full text-xl"
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
      <section>
        <h1 className="mx-auto lg:text-3xl md:text-2xl text-xl font-extrabold lg:leading-snug">
          Totale:
          {' '}
          {cart.subtotal.formatted_with_symbol}
          {console.log(cart)}
        </h1>

      </section>

    </div>
  );
}

export default Carrello;
