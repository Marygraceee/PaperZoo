import React, { useState } from 'react';
import client from '../lib/commerce';
import { CarrelloVuoto } from '../components/CarrelloVuoto';

function Carrello() {
  const [cart, setCart] = useState(null);
  cart ? console.log(cart) : client.cart.retrieve().then(((response) => setCart(response)));

  if (!cart) {
    return <CarrelloVuoto />;
  }
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-5">
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
          <div key={item.name} className="flex w-full p-5 gap-10 justify-center border-b-2 border-black">
            <div className="aspect-square flex items-center justify-center">
              <img className="rounded-2xl shadow-xl" style={{ maxWidth: '15rem', objectFit: 'cover', aspectRatio: '1/1' }} src={item.image.url} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="lg:text-xl text-lg">{item.name}</p>
              <p className="lg:text-xl text-lg">{item.price.formatted_with_symbol}</p>

              <div className="flex justify-center items-center gap-2 p-10">
                <button
                  className=" pointer-events-auto lg:text-xl md:text-lg text-base bg-orange-400 text-white
           hover:text-orange-400 hover:bg-transparent border-2 border-orange-400 transition duration-300 px-5 py-2 rounded-full font-extrabold"
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
                  className=" pointer-events-auto lg:text-xl md:text-lg text-base bg-orange-400 text-white
           hover:text-orange-400 hover:bg-transparent border-2 border-orange-400 transition duration-300 px-5 py-2 rounded-full font-extrabold"
                  type="button"
                  onClick={() => {
                    client.cart.update(item.id, { quantity: item.quantity + 1 }).then((response) => setCart(response));
                  }}
                >
                  +
                </button>
                <button
                  className=" pointer-events-auto lg:text-xl md:text-lg text-base bg-red-600 text-white
           hover:text-red-600 hover:bg-transparent border-2 border-red-600 transition duration-300 px-5 py-2 rounded-full font-extrabold"
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
