/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';
import client from '../../../lib/commerce';
import Product from '../../../components/Product';
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

  console.log('ciao');

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
  return (
    <div className="flex flex-col min-h-screen max-h-fit items-center gap-10 pt-36 lg:pt-36 lg:p-10">
      <div>
        <h1 className="lg:text-2xl">{category.name}</h1>
      </div>
      <div>
        <ProductList products={products} />
      </div>
    </div>
  );
}
