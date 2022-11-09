import React from 'react';
import bg from '../public/heroimage.jpg';

function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${bg.src})` }}
      className="relative bg-cover bg-center bg-no-repeat shadow-xl"
    >
      <div
        className="absolute inset-0 bg-white/60 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
      />

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            I migliori

            <strong className="block font-extrabold text-orange-400">
              prodotti
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            per il benessere del tuo animale, ma anche del tuo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="/categorie"
              className="block w-full rounded bg-orange-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-300 focus:outline-none focus:ring active:bg-orange-400 sm:w-auto"
            >
              Scopri i prodotti
            </a>

            <a
              href="/contattaci"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-orange-400 shadow hover:text-orange-300 focus:outline-none focus:ring active:text-orange-400 sm:w-auto"
            >
              Contattaci
            </a>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Hero;
