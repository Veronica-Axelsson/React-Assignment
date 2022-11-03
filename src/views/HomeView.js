import React from 'react';
import MainMenuSection from '../sections/MainMenuSection'
import Hero from '../sections/Hero'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'

const HomeView = () => {
  window.top.document.title = 'Fixxo.'

  return (
    <>
    <header>
      <MainMenuSection/>
      <Hero/>
    </header>
    <ProductGridSection title="Featured Products" />
    <FooterSection/>
    </>
  )
}

export default HomeView