import React from "react"
import "./Header.scss"
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/images/logo_kasa.png"

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo kasa"></img>
      </Link>
      <nav className="navbar">
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
          to="/about"
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
