import React from 'react'
import {Link} from 'react-router-dom';

const hero = () => {
  return (
    <section className="hero container">
       
            {/* <img src="https://images.pexels.com/photos/3933402/pexels-photo-3933402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-left" alt="showcase-img-1"/> */}
           
                <div className="heroBody ">
                    <h2>SALE UP</h2>
                    <h2>To 50% Off</h2>
                    <p>Online shopping free home delivery over $100</p>
                    <div className="__button">
                        <div className="button-pink">
                            <div className="corner-top-left"></div>
                                <Link to="/products" className="button-text">SHOP NOW</Link>
                            <div className="corner-bottom-right"></div>
                        </div>
                    </div>
                </div>
        

            {/* <img src="images/Models/Models2.svg" className="img-right" alt="showcase-img-2"> */}
        
    </section>

  )
}

export default hero





