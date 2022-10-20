import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  return (
    <nav className="mainMenu container">
        <div className="logo">Fixxo.</div>
        <div className="menuLinks">
            <NavLink className="menuLink" to="/" end>Home</NavLink>
            <NavLink className="menuLink" to="/categories" end>Categories</NavLink>
            <NavLink className="menuLink" to="/products" end>Products</NavLink>
            <NavLink className="menuLink" to="/contacts" end>Contacts</NavLink>
        </div>
        <div className="menuIcons">
            <MenuIcon className="menuIcon" link="/search" icon="fa-regular fa-magnifying-glass" />
            <MenuIcon className="menuIcon" link="/compare" icon="fa-regular fa-repeat" />
            <MenuIcon className="menuIcon" link="/wishlist" icon="fa-regular fa-heart" />
            <MenuIcon className="menuIcon" link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
        </div>
    </nav>
  )
}

export default MainMenuSection