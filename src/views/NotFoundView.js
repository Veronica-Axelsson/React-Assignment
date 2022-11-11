// Not found page

import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const NotFoundView = () => {
  window.top.document.title = 'Page not found - Fixxo.'

  return (
    <>
    <MainMenuSection/>
    <div className="container notFoundView">
      <div className="notFound">
        <i class="fa-regular fa-face-frown-slight"></i>
        <h1>404</h1>
        <h1>Page Not Found</h1>
      </div>
    </div>
    <div style={{position: "fixed", bottom: "0", width: "100%"}}>
      <FooterSection />
    </div>
    </>
  )
}

export default NotFoundView