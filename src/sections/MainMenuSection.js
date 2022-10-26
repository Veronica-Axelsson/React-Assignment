import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="mainMenu container">
        <NavLink className="logo" to="/" end>
            Fixxo.
        </NavLink>
        <div className={`menuLinks ${showMenu ? "d-grid": ""}`}>
            <NavLink className="menuLink" to="/" end>Home</NavLink>
            <NavLink className="menuLink" to="/categories" end>Categories</NavLink>
            <NavLink className="menuLink" to="/products" >Products</NavLink>
            <NavLink className="menuLink" to="/contacts" end>Contacts</NavLink>
        </div>
        <div className="menuIcons">
            <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
            <MenuIcon hideOnMobile={true} link="/compare" icon="fa-regular fa-code-compare" />
            <MenuIcon hideOnMobile={true} quantity="3" link="/wishlist" icon="fa-regular fa-heart" />
            <MenuIcon quantity="4" link="/shoppingcart" icon="fa-regular fa-bag-shopping" />

            <button onClick={toggleMenu} className="d-xl-none menuIcon btn-menuIcon"><i className="fa-regular fa-bars"></i></button>

        </div>
    </nav>
  )
}

export default MainMenuSection