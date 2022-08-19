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
  const alternativeImage = category.assets[0].url;
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen max-h-fit pt-32 gap-10 lg:gap-20 lg:pt-32 lg:p-5">
      <div className="relative w-full bg-orange-400 overflow-hidden">
        <img
          className="hover:scale-105 transition ease-in-out duration-500"
          style={{
            width: "100%", maxHeight: "82vh", aspectRatio: "16/9", objectFit: "cover", filter: "brightness(.5)",
          }}
          src={mainImage}
        />

        <h1 className="absolute lg:text-4xl md:text-xl text-sm text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold pointer-events-none">
          {category.description}
        </h1>
        {console.log(category.assets)}
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-5 min-h-screen max-h-fit ">
        <div className="flex flex-col items-center justify-center
         w-full h-fit gap-10 lg:w-1/4 lg:mx-auto border-b-2 border-black
         lg:border-0 lg:p-0 pb-10"
        >
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
            <button
              onClick={() => router.back()}
              className="bg-orange-400 hover:bg-orange-300 font-bold py-2 px-4 rounded-full shadow-md"
            >
              Indietro
            </button>
            <h1 className="lg:text-2xl text-xl ">
              {category.name}
            </h1>
          </div>
          <ul className=" flex flex-col gap-2 items-center">
            {category.children.length ? <h1 className="lg:text-xl text-lg text-gray-800">Categorie correlate:</h1> : null}
            {category.children?.map((subcategory) => (
              <li key={subcategory.slug}>
                <Link href={`/categorie/${subcategory.slug}`}>
                  <p className="hover:scale-105 w-fit text-gray-800 hover:text-orange-400
                  transition text-xl lg:text-2xl cursor-pointer"
                  >
                    {subcategory.name}

                  </p>
                </Link>
              </li>

            ))}
          </ul>
        </div>

        <div className="flex w-full lg:w-3/4 flex-col justify-center items-center lg:mx-auto h-fit gap-10 lg:p-0 pb-10">
          <div>
            <h1 className="lg:text-3xl text-2xl transition">Prodotti</h1>
          </div>
          <div>
            <ProductList products={products} />
          </div>
        </div>

      </div>
    </div>

  );
}
