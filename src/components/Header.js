import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="site-title">Old Ways Today</div>
      <nav className="nav-links">
        <Link to="/">Search</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
};

export default Header;
