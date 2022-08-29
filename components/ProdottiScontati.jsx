/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Link from 'next/link';
import ProductList from './ProductList';

const Example = ({ products }) => (
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-items-center place-items-start gap-5 w-full">

           {products.map((product) => {
            if (product.categories.filter((e) => e.name === "Esotici" || e.name === "Roditori" || e.name === "Uccelli").length > 0) {
              return (
                <Link href={`/prodotti/${product.permalink}`}>
                 <div
                   className="cursor-pointer aspect-square w-full h-full flex flex-col
                  rounded-xl shadow-xl bg-orange-400 text-white hover:bg-white hover:text-orange-400 transition duration-300 hover:scale-105 "
                   key={product.permalink}
                 >
                  <div className="aspect-video flex-2 w-full flex justify-center items-center shadow-lg overflow-hidden bg-white rounded-t-xl">
                  <img
                    className="max-h-full rounded-t-xl"
                    src={product.image.url}
                    alt=""
                  />
                  </div>

                  <div

                    className=" w-full flex flex-1 flex-col font-bold text-center transition items-center justify-center  gap-5 p-5"
                  >
                  <a className="lg:text-xl md:text-lg" href={`/prodotti/${product.permalink}`}>{product.name}</a>
                  <p className="lg:text-lg">{product.price.formatted_with_symbol}</p>
                  {console.log(product.price)}
                  <p className="lg:text-xl md:text-lg">Codice sconto: paperzoo</p>
                  </div>

                 </div>
                </Link>

              );
            } return null;
           })}

        </div>
    );

export default Example;
