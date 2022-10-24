import React from 'react'
import { NavLink } from 'react-router-dom'
import TempImg from '../assets/images/llama-img.jpg'

const ProductCard = () => {
  return (
    <div className="col ">
        <div className="card ">
            <div className="card-img">
                <img src={TempImg} alt="test img" />
                <div className="card-menu">
                    <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
                    <button className="menu-link"><i className="fa-regular fa-repeat"></i></button>
                    <button className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>
                <NavLink to="/Products/" className="btn-theme btn-card-theme">
                    <div className="corner-left"></div>
                    <div className="corner-right"></div>
                    QUICK VIEW
                </NavLink>
            </div>

            <div className="card-body">
                <p className="card-category">Category</p>
                <h5 className="card-title">Modern Black Blouse</h5>
                <p className="rating">
                    <i className="__star fa-sharp fa-solid fa-star"></i>
                    <i className="__star fa-sharp fa-solid fa-star"></i>
                    <i className="__star fa-sharp fa-solid fa-star"></i>
                    <i className="__star fa-sharp fa-solid fa-star"></i>
                    <i className="__star fa-sharp fa-solid fa-star"></i>
                </p>
                <p className="card-price">$35.00</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard