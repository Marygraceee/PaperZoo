/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import client from '../../../lib/commerce';
import ProductList from '../../../components/ProductList';
import Breadcrumbs from '../../../components/Breadcrumbs';

export async function getStaticProps({ params }) {
  const { slug } = params;

  const category = await client.categories.retrieve(slug, {
    type: 'slug',
  });

  const { data: products } = await client.products.list({
    category_slug: [slug],
  });

  return {
    props: {
      category,
      products,
    },
  };
}

export async function getStaticPaths() {
  const { data: categories } = await client.categories.list();

  const mainCategoriesPath = categories.map((category) => ({
    params: {
      slug: category.slug,
    },
  }));

  const subCategoriesPaths = categories.map((category) => {
    category.children.map((subcategory) => ({
      params: {
        slug: subcategory.slug,
      },
    }));
  });

  return {
    paths: [...mainCategoriesPath,
      { params: { slug: 'cibo-secco-per-gatti' } },
      { params: { slug: 'cibo-secco-per-cani' } },
      { params: { slug: 'cibo-per-esotici' } },
      { params: { slug: 'cibo-per-roditori' } },
      { params: { slug: 'giochi-per-uccelli' } },
      { params: { slug: 'cibo-per-uccelli' } },
      { params: { slug: 'cibo-umido-per-gatti' } },
      { params: { slug: 'cibo-umido-per-cani' } },
      { params: { slug: 'giochi-per-gatti' } },
      { params: { slug: 'giochi-per-cani' } },
    ],
    fallback: false,
  };
}

export default function CategoryPage({ category, products }) {
  const mainImage = category.assets[1].url;
  const router = useRouter();
  return (
    <div className="flex flex-col gap-10">

      <div className="relative w-full lg:h-screen h-fit bg-orange-400 overflow-hidden shadow-xl">
        <img
          className="hover:scale-105 transition ease-in-out duration-500"
          style={{
            aspectRatio: "16/9", objectFit: "cover", filter: "brightness(.5)",
          }}
          src={mainImage}
        />

        <h1 className="absolute lg:text-4xl md:text-3xl text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold pointer-events-none lg:w-fit w-full">
          {category.description}
        </h1>

      </div>
      <Breadcrumbs />

      <div className="flex flex-col justify-center items-center gap-10">

        <div className="flex flex-col items-center justify-center gap-5">

          <div className="flex justify-center items-center">
            <button
              onClick={() => router.back()}
              className="text-white bg-orange-400 hover:bg-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Indietro
            </button>

          </div>

          <ul className=" flex flex-col items-center justify-center gap-2">
            {category.children.length ? <h1 className="lg:text-3xl md:text-2xl text-xl text-gray-800">Categorie correlate:</h1> : null}
            {category.children?.map((subcategory) => (
              <li key={subcategory.slug}>
                <Link href={`/categorie/${subcategory.slug}`}>
                  <p className="hover:scale-105 w-fit text-gray-800 hover:text-orange-400
                  transition text-lg lg:text-xl cursor-pointer"
                  >
                    {subcategory.name}

                  </p>
                </Link>
              </li>

            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center bg-gray-100 w-full gap-5 p-10">
          <div>
            <h1 className="lg:text-3xl md:text-2xl text-xl transition">Prodotti</h1>
          </div>
          <ProductList products={products} />
        </div>

      </div>
    </div>

  );
}
