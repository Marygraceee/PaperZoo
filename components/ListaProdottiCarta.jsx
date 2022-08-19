/* eslint-disable quotes */
/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";

function ProductListCard({ products }) {
  return (
    <div className="grid lg:grid-cols-4 gap-20 lg:rounded-lg w-full justify-items-center mx-auto">
      {console.log(products)}
      {products.map((product) => (
        <Link href={`/prodotti/${product.permalink}`}>
          <div className="flex flex-col items-center justify-centershadow-xl shadow-lg
        rounded-2xl container bg-orange-400 hover:bg-orange-300 w-full hover:cursor-pointer hover:scale-105 transition"
          >

            <div className="container flex flex-row justify-center items-center aspect-square w-full shadow-lg">
              <img
                className="rounded-t-2xl"
                style={{ aspectRatio: "1/1", width: "100%", objectFit: "cover" }}
                src={product.image.url}
                alt=""
              />
            </div>

            <div className="h-full p-5 flex flex-col items-center justify-center text-center gap-2">
              <h1 className="lg:text-xl text-lg font-semibold">{product.name}</h1>
              <ul>
                <h1 className="font-bold">Categorie:</h1>
                {product.categories.map((category) => (
                  <li
                    className="cursor-pointer rounded-full hover:scale-105 text-gray-800 hover:text-orange-900 transition"
                    key={category.slug}
                  >
                    <Link href={`/categorie/${category.slug}`}>
                      <p className="
                       lg:text-base text-sm "
                      >
                        {category.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-row justify-center items-center gap-5 lg:text-2xl text-xl">
                <h2 className="lg:text-lg text-base">{product.price.formatted_with_symbol}</h2>
                <Link href="/carrello">
                  <AiOutlineShoppingCart />
                </Link>
              </div>
            </div>
          </div>
        </Link>

      ))}
    </div>
  );
}

export default ProductListCard;
