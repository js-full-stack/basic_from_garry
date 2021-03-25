import art from "../assets/art.jpg";
import cactus from "../assets/cactus.jpg";
import analitics from "../assets/analitics.jpg";
import lemon from "../assets/lemon.jpg";

const images = {
  art,
  cactus,
  analitics,
  lemon,
};

const ProductsItem = ({ product }) => (
  <li className="item">
    <p>Товар: {product.name}</p>
    <p>Цена товара: {product.price}</p>
    <p>На складе осталось {product.count} шт.</p>
    <img
      src={images[product.img]}
      alt={product.name}
      width="500"
      height="300"
    />
  </li>
);
export default ProductsItem;
