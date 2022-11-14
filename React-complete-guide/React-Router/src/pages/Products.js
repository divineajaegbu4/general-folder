import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Products = () => {
  return (
    <section>
      <h1>The products page!</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Courses</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
