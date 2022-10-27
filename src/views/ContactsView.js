import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import MapSection from '../sections/MapSection'

const ContactsView = () => {
    window.top.document.title = 'Contacts - Fixxo.'

  return (
    <>
{/* MainMenu  -------------------------------------------------------*/}

    <MainMenuSection/>
{/* pageMenu  -------------------------------------------------------*/}
    <div className="map">
    <BreadcrumbSection currentPage="Contacts"/>
    </div>
{/* Map  -------------------------------------------------------*/}
    <MapSection/>
{/* contact form  -------------------------------------------------------*/}
{/* <section class="formContactSection">
    <div class="container">
        <h2>Come in Contact with Us</h2>
        <form onsubmit="submitForm(event)" class="formContact" novalidate>
            <div>
                <input id="name" onkeyup="validate(event)" required data-required-min="2" type="text" placeholder="Your Name" />
                <div id="nameErrorMessage" class="errorMessage"></div>
            </div>
            <div>
                <input id="email" onkeyup="validate(event)" type="email" placeholder="Your Mail"/>
                <div id="emailErrorMessage" class="errorMessage"></div>
            </div>
            <div class="textareaMessage">
                <textarea id="comment" onkeyup="validate(event)" placeholder="Comments"></textarea>
                <div id="commentErrorMessage" class="errorMessage"></div>
            </div>
            <div >
                <button type="submit" class="button-pink button">
                    <span class="corner-top-left"></span>
                    <span class="corner-bottom-right"></span>
                    <span class="button-text">Post Comments</span>
                </button> 
            </div>

        </form>
    </div>
</section> */}


{/* Footer  -------------------------------------------------------*/}
      <FooterSection/>
    </>
  )
}

export default ContactsView