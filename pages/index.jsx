/* eslint-disable quotes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import client from '../lib/commerce';
import CategorySlider from "../components/CategorySlider";
import Hero from '../components/Hero';

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
    <div className="flex flex-col w-full gap-10 min-h-screen">
      <section>
        <Hero />
      </section>

      <CategorySlider categories={categories} />
    </div>
  );
}
