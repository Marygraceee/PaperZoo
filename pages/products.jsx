import client from '../lib/commerce';
import ProductList from '../components/ProductList';

export async function getStaticProps() {
  const { data: products } = await client.products.list();

  return {
    props: {
      products,
    },
  };
}

export default function ProductsPage({ products }) {
  return (
    <div>
      <h1>Products</h1>

      <ProductList products={products} />
    </div>
  );
}
