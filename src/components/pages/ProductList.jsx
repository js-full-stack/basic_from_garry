import ProductItem from "./ProductItem";

const ProductsList = ({ products }) => (
  <ul className="products__list">
    {products.map(
      (product) =>
        !!product.count && (
          <ProductItem
            key={product.id}
            /*Пример другого ключа: `${product.name}_${product.price}` */
            product={product}
          />
        )
    )}
  </ul>
);

export default ProductsList;
