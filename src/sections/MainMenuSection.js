import React from 'react'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  return (
    <nav class="mainMenu container">
        <div class="logo"><a href="Index.html">Fixxo.</a></div>
        <div class="menuLinks">
            <a href="Index.html">Home</a>
            <a href="Index.html">Categories</a>
            <a href="Index.html">Products</a>
            <a href="contacts.html">Contacts</a>
        </div>
        <div class="menu-icons">
            <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
            <MenuIcon link="/compare" icon="fa-regular fa-repeat" />
            <MenuIcon link="/wishlist" icon="fa-regular fa-heart" />
            <MenuIcon link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
        </div>
    </nav>
  )
}

export default MainMenuSection