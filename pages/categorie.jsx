/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable react/prop-types */

import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
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
    <div className=" flex flex-col items-center p-5 gap-10 min-h-screen justify-start">
      <Breadcrumbs />
      <div className="">
        <h1 className="lg:text-3xl md:text-2xl text-xl">Tutte le categorie</h1>
      </div>

      <div>
        <CategoryListCards categories={categories} />
      </div>
    </div>
  );
}
