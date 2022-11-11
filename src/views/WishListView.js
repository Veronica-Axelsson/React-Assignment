// Whistlist page

import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'

const WishListView = () => {
  window.top.document.title = 'Wish list - Fixxo.'

  return (
    <>
      <MainMenuSection/>
      <FooterSection/>
    </>
  )
}

export default WishListView