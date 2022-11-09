import React from 'react'
import {Link} from 'react-router-dom';
import Models7 from '../assets/images/Models/Models7.png'


const ProductSection1 = () => {
  return (
    <section className="productSection1">
      <div className="container">

        {/* Left side --------------------------------------------------------*/}
        <div className="textOnImg ">
          <img className="imgSize" src={Models7} alt="" />
          
          <div className="centering">
            <h2>2 FOR USD $29</h2>
            <div className="__button">
              <div className="button-white">
                <div className="corner-top-left"></div>
                <Link to="/products" className="button-text">FLASE SALE</Link>
                <div className="corner-bottom-right"></div>
              </div>
            </div>
          </div>

        </div>

        {/* Right side --------------------------------------------------------*/}

        

      </div>
    </section>
  )
}

export default ProductSection1
