import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Layout = () => {
  return (
    <section>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/quotes">Redirect to AllQuotes</Link>
            </li>
            <li>
              <Link to="/quotes/:quoteId">Redirect to QuoteDetail</Link>
            </li>
            <li>
              <Link to="/new-quote">Redirect to New-quote</Link>
            </li>
            <li>
              <Link to="/quotes/:quoteId/comments">Redirect to Comments</Link>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Layout;
