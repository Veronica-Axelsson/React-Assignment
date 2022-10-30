import React, {useState} from 'react'
import {validate} from '../scripts/validation'

const ContactFormSection = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const {id, value} = e.target

        switch (id) {
            case 'name':
                setName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'comments':
                setComments(value)
                break
        }

        setErrors({...errors, [id]: validate(e)})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validate(e, {name, email, comments}))

        if (errors.name === null && errors.email === null && errors.comments === null) {
            setSubmitted(true)
            setName('')
            setEmail('')
            setComments('')
            setErrors({})
        } else {
            setSubmitted(false)
        }
    }


    return (
        <section className="contact-form">
            <div className="container">

                {
                    submitted ?
                    (<div className="alert alert-success text-center mb-5" role="alert">
                        <h3>Thank you for your comment!</h3>
                        <p>We will contact you as soon as possible.</p>
                    </div>) : (<></>)
                }

                <h2>Come in Contact with Us</h2>
                <form onSubmit={handleSubmit} className="formContact" noValidate>
                    <div>
                        <input id="name" className={(errors.name ? 'error': '')} type="text" placeholder="Your Name" value={name} onChange={handleChange}/>
                        <div className="errorMessage">{errors.name}</div>
                    </div>
                    <div>
                        <input id="email" className={(errors.email ? 'error': '')} type="email" placeholder="Your Mail" value={email} onChange={handleChange}/>
                        <div className="errorMessage">{errors.email}</div>
                    </div>

                    <div className="textarea">
                        <textarea id="comments" className={(errors.comments ? 'error': '')} style={(errors.comments ? {border: '1px solid red'}: {})} placeholder="Comments" value={comments} onChange={handleChange}></textarea>
                        <div className="errorMessage">{errors.comments}</div>
                    </div>
                    <div> 
                        <button type="submit" className="button btn-theme ">
                            <span className="corner-left"></span>
                            <span className="corner-right"></span>
                            <span className="button-text">Post Comments</span>
                        </button> 
                    </div>
                </form>
            </div>
        </section>
    )
}


export default ContactFormSection