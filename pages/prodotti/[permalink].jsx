/* eslint-disable react/button-has-type */
/* eslint-disable quotes */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import client from '../../lib/commerce';
import ProdottiCorrelati from "../../components/ProdottiCorrelati";

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await client.products.retrieve(permalink, {
    type: 'permalink',
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await client.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

const addToCart = (productId, quantity) => {
  client.cart.add(productId, quantity);
};

export default function ProductPage({ product }) {
  const description = product.description;
  return (
    <div className="flex flex-col gap-10">

      <div className="flex flex-col lg:h-screen lg:flex-row shadow-xl">
        <div className="lg:w-1/2 flex justify-center items-center bg-orange-400 hover:bg-orange-300 transition overflow-hidden p-5">
          <img
            className="bg-orange-400 hover:bg-orange-300 hover:scale-105 transition duration-500 rounded-xl"
            style={
            {
              width: "50%", aspectRatio: "1/1", maxHeight: "70%", objectFit: "cover",
            }
            }
            src={product.image.url}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-10 lg:items-start mx-auto items-center w-full justify-center lg:w-1/2  p-10">
          <h1 className="lg:text-3xl md:text-2xl text-xl w-full">{product.name}</h1>
          <div
            className="
            lg:text-xl text-lg
             text-gray-600 font-light min-w-1/2 max-w-full"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
          />
          <div className="flex flex-col items-center gap-5">
            <p className="lg:text-xl text-lg">Categorie:</p>
            <ul className="flex flex-row gap-5">
              {product.categories.map((category) => (
                <li
                  className=""
                  key={category.slug}
                >
                  <Link href={`/categorie/${category.slug}`}>
                    <button className="
                   bg-gray-100 cursor-pointer lg:p-5 p-3 rounded-full shadow-md hover:scale-105 text-gray-800 hover:text-orange-400 transition lg:text-xl md:text-lg text-base"
                    >
                      {category.name}
                    </button>
                  </Link>
                </li>

              ))}
            </ul>
          </div>
          <div className="flex flex-row lg:justify-start justify-center items-center gap-5 w-full">
            <p className="lg:text-xl text-lg">{product.price.formatted_with_symbol}</p>
            <button
              onClick={() => addToCart(product.id, 1)}
              className="pointer-events-auto lg:text-xl md:text-lg text-base bg-orange-400 text-white
           hover:text-orange-400 hover:bg-transparent border-2 border-orange-400 transition duration-300 lg:p-5 p-3 rounded-full font-extrabold
           flex flex-row items-center justify-center gap-2 lg:gap-5"
            >
              <AiOutlineShoppingCart />
              Aggiungi al carrello
            </button>
          </div>
          {console.log(product)}
        </div>

      </div>

      <section className="flex flex-col lg:gap-10 gap-5 p-5" id="ProdottiCorrelati">
        <h1 className="mx-auto lg:text-3xl md:text-2xl text-xl font-extrabold lg:leading-snug">Prodotti correlati</h1>
        <ProdottiCorrelati product={product} />
      </section>

    </div>
  );
}
