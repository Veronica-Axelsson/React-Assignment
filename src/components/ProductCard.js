import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({product}) => {

    const addToWishList = (e) => {
        console.log("Added to wish list")
    }

    const addToCompare = (e) => {
        console.log("Added to compare")
    }

    const addToCart = (e) => {
        console.log("Added to shopping cart")
    }



  return (
    <div className="col ">
        <div className="card ">
            <div className="card-img">
                <img src={product.img} alt={product.name} />
                <div className="card-menu d-xl-none">
                    <button onClick={addToWishList} className="menu-link"><i className="fa-regular fa-heart"></i></button>
                    <button onClick={addToCompare} className="menu-link"><i className="fa-regular fa-repeat"></i></button>
                    <button onClick={addToCart} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>
                <NavLink to={`/Products/${product.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme btn-card-theme d-xl-none">
                    <div className="corner-left"></div>
                    <div className="corner-right"></div>
                    QUICK VIEW
                </NavLink>
            </div>

            <div className="card-body ">
                <p className="card-category">{product.category}</p>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-rating">
                    <i className="__star fa-sharp fa-solid fa-star"></i>
                    <i className="__star fa-sharp fa-solid fa-star"></i>
                    <i className="__star fa-sharp fa-solid fa-star"></i>
                    <i className="__star fa-sharp fa-solid fa-star"></i>
                    <i className="__star fa-sharp fa-solid fa-star"></i>
                </p>
                <p className="card-price">{product.price}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard