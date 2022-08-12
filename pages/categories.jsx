/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable react/prop-types */

import React from 'react';
import CategoryListCards from '../components/CategoryListCards';
import client from '../lib/commerce';

export async function getStaticProps() {
  const { data: categories } = await client.categories.list();

  return {
    props: {
      categories,
    },
  };
}

export default function CategoriesPage({ categories }) {
  return (
    <div className="flex flex-col items-center  min-h-screen max-h-fit pt-36 p-10 gap-10 lg:pt-36 lg:p-10">
      <div className=" w-full flex justify-center">
        <h1 className="lg:text-3xl text-2xl">Tutte le categorie</h1>
      </div>

      <div>
        <CategoryListCards categories={categories} />
      </div>
    </div>
  );
}
