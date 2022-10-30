import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import MapSection from '../sections/MapSection'
import ContactFormSection from '../sections/ContactFormSection'
import FooterSection from '../sections/FooterSection'


const ContactsView = () => {
    window.top.document.title = 'Contacts - Fixxo.'

  return (
    <>
{/* MainMenu  -------------------------------------------------------*/}

    <MainMenuSection/>
{/* pageMenu  -------------------------------------------------------*/}
    <BreadcrumbSection currentPage="Contacts"/>

{/* Map  -------------------------------------------------------*/}
    <div className="map">
        <MapSection/>
    </div>

{/* contact form  -------------------------------------------------------*/}
    <ContactFormSection />


{/* Footer  -------------------------------------------------------*/}
      <FooterSection/>
    </>
  )
}

export default ContactsView