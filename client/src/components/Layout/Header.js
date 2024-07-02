import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { RiShieldUserLine } from "react-icons/ri";
import { TiHomeOutline } from "react-icons/ti";
import { RiShoppingBag2Line } from "react-icons/ri";
import "../../components/Layout/Styles/Header.css";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const { auth, setAuth } = useAuth();
  const [cart] = useCart();

  // State for showing/hiding dashboard and search bar
  const [showDashboard, setShowDashboard] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successful");
  };

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const navLinkStyle = {
    color: "#333",
    textDecoration: "none",
    fontSize: "1rem",
    fontFamily: "Arial, sans-serif",
    padding: "0.5rem 1rem",
    transition: "color 0.3s ease-in-out",
  };

  const activeLinkStyle = {
    color: "#3490dc",
    fontWeight: "bold",
  };

  const dropdownStyle = {
    color: "#333",
    fontSize: "1rem",
    fontFamily: "Arial, sans-serif",
    padding: "0.5rem 1rem",
    backgroundColor: "#f8f9fa",
    border: "none",
    borderRadius: "0.5rem",
    transition: "background-color 0.3s ease-in-out",
  };

  const dropdownItemStyle = {
    color: "#333",
    fontSize: "1rem",
    fontFamily: "Arial, sans-serif",
    padding: "0.5rem 1rem",
    textDecoration: "none",
    display: "block",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Byte
        </Link>
        <div className="header-alert">
          <p>
            <b>Dive Into The </b>
            World Of Technology
          </p>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                style={navLinkStyle}
                activeStyle={activeLinkStyle}
              >
                <TiHomeOutline style={{ fontSize: "1.7rem" }} />
              </NavLink>
            </li>

            {!auth.user ? (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className="nav-link"
                    style={navLinkStyle}
                    activeStyle={activeLinkStyle}
                  >
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link"
                    style={navLinkStyle}
                    activeStyle={activeLinkStyle}
                  >
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={dropdownStyle}
                >
                  <RiShieldUserLine style={{ fontSize: "1.7rem" }} />
                </NavLink>
                <ul
                  className={`dropdown-menu ${showDashboard ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <NavLink
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                      className="dropdown-item"
                      style={dropdownItemStyle}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className="dropdown-item"
                      style={dropdownItemStyle}
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </li>
            )}
            <li className="nav-item">
              <Badge count={cart?.length} showZero>
                <NavLink
                  to="/cart"
                  className="nav-link"
                  style={{
                    ...navLinkStyle,
                    position: "relative",
                    fontSize: "1.5rem",
                  }}
                  activeStyle={activeLinkStyle}
                >
                  <RiShoppingBag2Line />
                </NavLink>
              </Badge>
            </li>
          </ul>
        </div>
      </div>
      {showSearchBar && (
        <div className="search-bar-container">
          {/* Your search bar implementation */}
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
      )}
    </nav>
  );
};

export default Header;
