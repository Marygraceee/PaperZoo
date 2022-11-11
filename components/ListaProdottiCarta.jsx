/* eslint-disable quotes */
/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";

function ProductListCard({ products }) {
  return (
    <div className="">

      {products.map((product) => (
        <Link href={`/prodotti/${product.permalink}`}>
          <div className="">

            <div className="">
              <img
                className=""

                src={product.image.url}
                alt=""
              />
            </div>

            <div className="">
              <h1 className="">{product.name}</h1>
              <ul>
                <h1 className="">Categorie:</h1>
                {product.categories.map((category) => (
                  <li
                    className=""
                    key={category.slug}
                  >
                    <Link href={`/categorie/${category.slug}`}>
                      <p className="">
                        {category.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="">
                <h2 className="">{product.price.formatted_with_symbol}</h2>
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
