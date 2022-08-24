/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ProductList from './ProductList';
import Link from 'next/link';

const Example = ({ products }) => {
 

    return (
        <div className="grid lg:grid-cols-5 grid-cols-1 justify-items-center place-items-start">
          
           {products.map((product) => {
            if (product.categories.filter(e => e.name === "Esotici" || e.name === "Roditori" || e.name === "Uccelli").length > 0){
              return (
                <Link href={`/prodotti/${product.permalink}`}>
                 <div
                className="flex flex-col h-full w-full md:w-3/4 justify-between items-center shadow-lg hover:scale-105 transition duration-300 
                cursor-pointer bg-orange-400 text-white hover:bg-white hover:text-orange-400 rounded-xl"
                 key={product.permalink}>
                  <img
                  className="shadow-lg rounded-t-xl" 
                  src={product.image.url} alt="" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", }} />
                  <div 
                  style={{ borderRadius: "inherit" }}
                  className="w-full h-full flex flex-col items-center text-center p-10 gap-5">
                  <a className="lg:text-xl text-lg" href={`/prodotti/${product.permalink}`}>{product.name}</a>
                  <p className="lg:text-lg text-normal">{product.price.formatted_with_symbol}</p>
                  {console.log(product.price)}
                  <p>Codice sconto: paperzoo</p>
                  </div>
                  
                  
                </div>
                </Link>
               
              
              )
            } else return null
            
           })}
        
        </div>
    );
};

export default Example;
