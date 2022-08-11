import client from '../../lib/commerce.js';

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await client.products.retrieve(permalink, {
    type: 'permalink',
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await client.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default function ProductPage({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price.formatted_with_symbol}</p>
    </div>
  );
}
