import ProductItem from './ProductItem';
import classes from './Products.module.css';

const proArr=[
  {
    id: Math.random().toString(),
    title:"Test",
    price:6,
    description: "This is a first product-amazing",
  },
  {
    id: Math.random().toString(),
    title:"Test2",
    price:7,
    description: "This is a 2nd product-amazing",
  },
  {
    id: Math.random().toString(),
    title:"Test3",
    price:8,
    description: "This is a 3rd product-amazing",
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem products={proArr}/>
      </ul>
    </section>
  );
};

export default Products;
