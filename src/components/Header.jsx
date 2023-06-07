import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {

     const activeStyles = {
          fontWeight: "bold",
          textDecoration: "underline",
          color: "#161616"
      }

  return (
    <header>
      <Link className="site-logo" to="/">
        VANLIFE
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/host"
        >
          Hots
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/vans"
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
