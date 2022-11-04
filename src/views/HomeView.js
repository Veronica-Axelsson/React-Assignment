import React, { useContext } from 'react';
import MainMenuSection from '../sections/MainMenuSection'
// import Hero from '../sections/Hero'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import {ProductContext} from '../contexts/contexts'
import BuyInfoSection from '../sections/BuyInfoSection';


const HomeView = () => {
  window.top.document.title = 'Fixxo.'

  const productContext = useContext(ProductContext)


  return (
    <>
    <header>
      <MainMenuSection/>
      {/* <Hero/> */}
    </header>
    <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
    <BuyInfoSection />
    {/* Topics */}
    {/* productSection */}
    {/* buyInfo */}
    <FooterSection/>
    </>
  )
}

export default HomeView