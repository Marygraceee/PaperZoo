/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Link from 'next/link';
import React from 'react';
import client from '../lib/commerce';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';

export async function getStaticProps() {
  const merchant = await client.merchants.about();
  const { data: categories } = await client.categories.list();
  const { data: products } = await client.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default function IndexPage({ merchant, categories, products }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen max-h-fit mx-auto pt-36 p-2 gap-10 lg:pt-36 lg:p-10">

      <div className="flex flex-col items-center justify-center w-full h-fit gap-10 lg:w-1/4 lg:mx-auto border-b-2 border-black lg:border-0 lg:p-0 pb-10">
        <div className=" w-full flex justify-center ">
          <Link href="/categories">
            <a className="lg:text-3xl text-2xl hover:text-yellow-400 transition ">Categorie</a>
          </Link>
        </div>
        <div className="lg:w-full flex">
          <CategoryList categories={categories} />
        </div>

        {console.log(categories)}

      </div>

      <div className="flex w-full lg:w-3/4 flex-col justify-center items-center lg:mx-auto h-fit gap-10 lg:p-0 pb-10">
        <div>
          <Link href="/products">
            <a className="lg:text-3xl text-2xl hover:text-yellow-400 transition ">Prodotti</a>
          </Link>

        </div>
        <div className="w-full">
          <ProductList products={products} />
        </div>

      </div>

    </div>
  );
}
