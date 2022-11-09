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

const Example = ({ product }) => {
 const indicators = (index) => (<div className="indicator" />);

    return (
        <div className=" w-full -z-40">
          <Slide indicators={indicators} transitionDuration={500} easing="ease-out">

            {product.related_products.map((product) => (
            <div key={product.permalink} className="flex flex-col items-center justify-center w-1/2 mx-auto container gap-5">
                <a href={`/prodotti/${product.permalink}`} className="lg:text-2xl md:text-xl text-lg text-center hover:text-orange-400 transition duration-300">{product.name}</a>
                <Link href={`/prodotti/${product.permalink}`}>
                    <div className=" aspect-square lg:w-1/2 w-full flex items-center justify-center">
                    <img className="cursor-pointer hover:scale-105 transition duration-300 p-5" src={product.image.url} style={{ aspectRatio: "1/1", width: "80%", objectFit: "cover" }} alt="" />
                    </div>

                </Link>

            </div>
            ))}

          </Slide>
        </div>
    );
};

export default Example;
