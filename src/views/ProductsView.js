import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import FooterSection from '../sections/FooterSection'


const ProductsView = () => {
  window.top.document.title = 'Products - Fixxo.'

  return (
    <>
      <MainMenuSection/>
      <BreadcrumbSection currentPage="Products"/>
      <ProductGridSection title="Featured Products" />

      <FooterSection/>
    </>
  )
}

export default ProductsView
