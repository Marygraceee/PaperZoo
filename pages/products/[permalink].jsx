/* eslint-disable react/button-has-type */
/* eslint-disable quotes */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import client from '../../lib/commerce';

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

export default function ProductPage({ product }) {
  const description = product.description;
  return (
    <div className="flex flex-col lg:flex-row min-h-screen max-h-fit mx-auto pt-36 p-2 gap-10 lg:pt-20 lg:p-10">

      <div className="flex lg:flex-row flex-col shadow-md">
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            style={
            {
              maxwidth: "70%", aspectRatio: "1/1", maxHeight: "90%", objectFit: "cover",
            }
            }
            src={product.image.url}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-10 lg:items-start mx-auto items-center w-full justify-center lg:w-1/2  p-10">
          <h1 className="lg:text-3xl text-2xl w-full">{product.name}</h1>
          <div
            className="
            lg:text-xl text-lg
             text-gray-600 font-light min-w-1/2 max-w-full"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
          />
          <div>
            <p>Categorie:</p>
            <ul className="flex flex-row gap-5">
              {product.categories.map((category) => (
                <li key={category.slug}>
                  <Link href={`/categories/${category.slug}`}>
                    <p className="hover:scale-105 w-fit text-gray-800 hover:text-yellow-400
                  transition text-lg lg:text-xl cursor-pointer"
                    >
                      {category.name}
                    </p>
                  </Link>
                </li>

              ))}
            </ul>
          </div>
          <div className="flex flex-row justify-start items-center gap-5 w-full">
            <p className="lg:text-3xl text-2xl">{product.price.formatted_with_symbol}</p>
            <button className="lg:text-3xl text-2xl bg-yellow-400 hover:bg-yellow-300 transition font-bold py-4 px-6 gap-5 shadow-md rounded-full flex flex-row items-center justify-center">
              <AiOutlineShoppingCart />
              Aggiungi al carrello
            </button>
          </div>
          {console.log(product)}
        </div>

      </div>

    </div>
  );
}
