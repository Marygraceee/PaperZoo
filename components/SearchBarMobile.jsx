import React, { useState } from 'react';
import client from '../lib/commerce';

function SearchBarMobile() {
  const [searchProduct, setSearchProdut] = useState(null);

  return (
    <div id="barraRicercaMobile" className="w-full h-full lg:hidden flex sticky top-0 bg-orange-400 justify-center items-center flex-col ">
      <form className="flex items-center w-full p-2 shadow-xl" action="/prodotticercati" method="get">
        <label htmlFor="q" className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
          </div>
          <input
            onChange={(e) => {
              if (e.target.value.length === 0) {
                setSearchProdut(null);
              } else {
                client.products.list({
                  query: e.target.value,
                }).then((response) => setSearchProdut(response.data));
              }
            }}
            className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-full focus:ring-orange-500 focus:border-orange-500 outline-none block w-full pl-10 p-2.5  "
            type="search"
            placeholder="Cerca"
            name="q"
            id="q"
            inputMode="search"
            required
          />
        </div>
        <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-orange-500 rounded-full border border-orange-500 hover:bg-orange-400 focus:ring-2 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <span className="sr-only">Search</span>
        </button>
      </form>

      <span className={`bg-white text-black sticky top-0 left-0 z-50 h-screen w-screen gap-5 overflow-scroll ${searchProduct ? 'flex flex-col' : 'hidden'}`}>
        {searchProduct && searchProduct.map((product) => (
          <div className="flex justify-start items-center p-5 h-1/6 gap-5">
            <div className="">
              <a href={`/prodotti/${product.permalink}`}>
                <img className="" style={{ maxWidth: '5rem', objectFit: 'cover', aspectRatio: '1/1' }} src={product.image.url} alt="" />
              </a>
            </div>

            <div
              className="flex flex-col w-full h-full items-start justify-center"
            >
              <a className="" href={`/prodotti/${product.permalink}`}>{product.name}</a>

              <div className="">
                <p className=" font-extrabold ">{product.price.formatted_with_symbol}</p>
              </div>
            </div>
          </div>
        ))}
      </span>
    </div>
  );
}

export default SearchBarMobile;
