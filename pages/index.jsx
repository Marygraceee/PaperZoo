/* eslint-disable quotes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import client from '../lib/commerce';
import CategorySlider from "../components/CategorySlider";
import Hero from '../components/Hero';
import banner from "../public/banner.webp"

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
    <div className="flex flex-col w-full min-h-screen">
      <section className="h-fit">
        <Hero />
      </section>
      
      <section className="h-fit">
<img src={banner.src} alt="" />
      </section>

<section className="h-fit p-10 flex justify-center items-center">
<CategorySlider categories={categories} />
</section>
      
    </div>
  );
}
