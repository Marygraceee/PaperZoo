import React from 'react';
import Breadcrumbs from './Breadcrumbs';

require('@tailwindcss/forms');

function Form() {
  return (
    <section className="bg-gray-100 min-h-screen">
      <Breadcrumbs />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              Per qualsiasi informazione, richiesta o chiarimento puoi contattarci via mail o utilizzare l'apposito form presente nella pagina!
            </p>

            <div className="mt-8">
              <p className="text-2xl font-bold text-orange-400">
                +39 1234567890
                PaperZoo@sitoprova.it
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4  border-gray-300 focus:ring-orange-500 focus:border-orange-500">
              <div>
                <label className="sr-only" htmlFor="name">Nome</label>
                <input
                  className="w-full rounded-lg  border-gray-300 focus:ring-orange-500 focus:border-orange-500 border-2 outline-none p-3 text-sm "
                  placeholder="Nome"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className="w-full rounded-lg  border-gray-300 focus:ring-orange-500 focus:border-orange-500 border-2 outline-none p-3 text-sm"
                    placeholder="Indirizzo email"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">Telefono</label>
                  <input
                    className="w-full rounded-lg  border-gray-300 focus:ring-orange-500 focus:border-orange-500 border-2 outline-none p-3 text-sm"
                    placeholder="Numero di telefono"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">Il tuo messaggio</label>
                <textarea
                  className="w-full rounded-lg  border-gray-300 focus:ring-orange-500 focus:border-orange-500 border-2 outline-none p-3 text-sm"
                  placeholder="Messaggio"
                  rows="8"
                  id="message"
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <button
                  type="submit"
                  className="w-full rounded flex justify-center items-center bg-orange-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-300 focus:outline-none focus:ring active:bg-orange-400 sm:w-auto"
                >
                  <span className="font-medium"> Invia </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
