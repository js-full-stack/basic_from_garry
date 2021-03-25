const Menu = () => (
  <div className="menu">
    <p className="menu__item">Menu</p>
    <ul>
      <li>
        <a href="/products">Products</a>
      </li>
      <li>
        <a href="/products/3456">Product detail</a>
      </li>
      <li>
        <a href="/cart">Cart</a>
      </li>
      <li>
        <a href="/order">Order</a>
      </li>
      <li>
        <a href="/profile">Profile</a>
      </li>
      <li>
        <a href="/contacts">Contacts</a>
      </li>
    </ul>
  </div>
);

export default Menu;
