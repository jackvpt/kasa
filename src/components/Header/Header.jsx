import "./Header.scss"
import { Link, NavLink } from "react-router-dom"
import logo from "../../images/logo_kasa.png"

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo kasa"></img>
      </Link>
      <nav>
        <NavLink className={({isActive}) => isActive ? "link-active" : "link"} to="/">Accueil</NavLink>
        <NavLink className={({isActive}) => isActive ? "link-active" : "link"} to="/about">A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
