import React from "react";
import ashionLogo from "../assests/ashion-logo.jpg";
import { NavLink } from "react-router-dom";
import { useSelector } from "../redux/store";
const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={ashionLogo} alt="brandlogo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase text-decoration-none text-dark hover-underline-animation"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link text-uppercase text-decoration-none text-dark hover-underline-animation"
                  to="/"
                >
                  Women's
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase text-dark hover-underline-animation"
                  to="#"
                >
                  Men's
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase text-dark hover-underline-animation"
                  to="#"
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase text-dark hover-underline-animation"
                  to="#"
                >
                  Pages
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase text-dark hover-underline-animation"
                  to="#"
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase text-dark hover-underline-animation"
                  to="#"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink
              className="nav-link text-dark login-className"
              to="/register"
            >
              Login/Register
            </NavLink>
            <NavLink className="nav-link text-dark" to="#">
              <i className="fa fa-search"></i>{" "}
            </NavLink>
            <NavLink className="nav-link text-dark" to="#">
              <i className="fa fa-heart"></i>{" "}
            </NavLink>
            <NavLink className="nav-link text-dark" to="/cart">
              <i className="fa fa-shopping-bag"></i> ({state.length})
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
