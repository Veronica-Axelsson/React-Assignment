import React, { useContext } from 'react';
import MainMenuSection from '../sections/MainMenuSection'
import Hero from '../sections/Hero'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import BuyInfoSection from '../sections/BuyInfoSection';
import { FeaturedProductsContext } from '../contexts/contexts'


const HomeView = () => {
  window.top.document.title = 'Fixxo.'

  const products = useContext(FeaturedProductsContext);

  return (
    <>
    <header>
      <MainMenuSection/>
      <Hero/>
    </header>
    <ProductGridSection title="Featured Products" items={products} />
    <BuyInfoSection />
    {/* Topics */}
    {/* productSection */}
    {/* buyInfo */}
    <FooterSection/>
    </>
  )
}

export default HomeView