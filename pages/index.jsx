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
<div>
  <section id="hero" className="h-screen w-full flex lg:flex-row flex-col justify-center items-center border-black border-4">
    <div>
      <h1>PaperZoo</h1>
      <p>Il tuo pet shop!</p>
    </div>
  </section>
</div>
  );
}
