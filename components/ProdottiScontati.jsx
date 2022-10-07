/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/function-component-definition */
import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import client from '../lib/commerce';



const Example = ({ products }) => (
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-items-center place-items-start gap-5 w-full">

           {products.map((product) => {
            if (product.categories.filter((e) => e.name === "Esotici" || e.name === "Roditori" || e.name === "Uccelli").length > 0) {
              const addToCart = (e) => client.cart.add(product.id, 1);
              return (
                 <div
                   key={product.permalink}
                   className="aspect-square w-full h-full flex flex-col
                  rounded-xl shadow-xl bg-white text-black transition duration-300 hover:scale-105 "
                 >
                  <div className="aspect-video flex-2 w-full flex justify-center items-center shadow-lg overflow-hidden bg-white rounded-t-xl">
                    <a href={`/prodotti/${product.permalink}`}>
                    <img
                      className="max-h-full rounded-t-xl"
                      src={product.image.url}
                      alt=""
                    />
                    </a>

                  </div>

                  <div
                    className=" w-full flex flex-1 flex-col text-left transition items-center justify-center  gap-5 p-5"
                  >
                  <a className="lg:text-xl text-lg w-full font-extrabold hover:text-orange-400 hover:scale-105 transition duration-300 ease-in-out" href={`/prodotti/${product.permalink}`}>{product.name}</a>

                  <p className="lg:text-xl text-lg w-full text-gray-500">Codice sconto: paperzoo</p>
                  <div className="flex w-full justify-center items-center">
                  <p className="lg:text-2xl text-lg w-full text-orange-400">{product.price.formatted_with_symbol}</p>
                  <button onClick={addToCart} type="button" className="bg-orange-400 active:bg-orange-400 hover:bg-orange-300 p-5 rounded-full text-xl">
                  <AiOutlineShoppingCart />
                  </button>

                  </div>
                  </div>

                 </div>

              );
            } return null;
           })}

        </div>
    );

export default Example;
