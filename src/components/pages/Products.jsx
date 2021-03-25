import ProductList from "./ProductList";

const products = [
  {
    id: "1",
    name: "art",
    price: 6000,
    count: 52,
    img: "art",
  },
  {
    id: "2",
    name: "analitics",
    price: 9000,
    count: 14,
    img: "analitics",
  },
  {
    id: "3",
    name: "cactus",
    price: 1200,
    count: 1,
    img: "cactus",
  },
  {
    id: "4",
    name: "lemon",
    price: 2400,
    count: 7,
    img: "lemon",
  },
];

const Products = () => (
  <div className="products">
    <ProductList products={products} />
  </div>
);

export default Products;
