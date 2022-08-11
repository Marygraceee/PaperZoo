import client from '../lib/commerce';
import CategoryList from '../components/CategoryList';

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
    <div>
      <h1>Categories</h1>

      <CategoryList categories={categories} />
    </div>
  );
}
