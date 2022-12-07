import React from 'react';
import bg from '../public/heroimage.jpg';
import Link from 'next/link';

function Hero() {
  return (
    <section
    style={{ backgroundImage: `url(${bg.src})` }}
    className="flex items-center h-screen justify-center lg:bg-fixed bg-center bg-cover bg-image"
  >
    <div className="bg-black/60 w-full h-full flex lg:justify-start lg:text-left text-center justify-center items-center">
      <div className="lg:px-24 px-2 text-light">
        <h1 className="max-w-2xl mb-4 lg:text-6xl text-4xl font-bold lg:leading-[1.15] text-white">Il tuo pet store di fiducia</h1>
        <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-200">
         Dall'acquisto del prodotto all'assistenza, ti accompagnamo in ogni fase della cura del tuo animale, per garantirti un'esperienza indimenticabile
        </p>
        <button type="button" className="bg-orange-400 hover:bg-orange-300 text-white inline-flex items-center justify-center px-5 py-3 text-xl font-medium text-center rounded-lg">
          <Link href="/categorie">
            Scopri i prodotti
          </Link>
        </button>

      </div>
    </div>
  </section>

  
  );
}

export default Hero;
