import React, { useState } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'

const HomeView = () => {
  window.top.document.title = 'Fixxo.'

  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: "Hej Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/3933402/pexels-photo-3933402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$30.00", rating: 5, img: "https://images.pexels.com/photos/5635233/pexels-photo-5635233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/3952083/pexels-photo-3952083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
  ])

  const [topProducts, setTopProducts] = useState([
    { id: 5, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/3933402/pexels-photo-3933402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 6, name: "Modern Black Blouse", category: "Fashion", price: "$30.00", rating: 5, img: "https://images.pexels.com/photos/5635233/pexels-photo-5635233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 7, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
  ])


  return (
    <>
      <MainMenuSection/>
      <ProductGridSection title="Featured Products" products={featuredProducts}/>
      <ProductGridSection title="Top Products" products={topProducts}/>
      <FooterSection/>
    </>
  )
}

export default HomeView