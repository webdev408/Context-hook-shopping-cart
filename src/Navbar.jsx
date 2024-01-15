import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "./components/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-md bg-success navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>

        <div className="navbar-nav">
          <NavLink className="nav-link " aria-current="page" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/list">
            Product List
          </NavLink>
          <NavLink className="nav-link" to="/cart">
            CartItems ({cart.length})
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
