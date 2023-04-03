import React, { useState } from 'react'
import Head from 'next/head'
import { ContactForm } from '../../components/signin'
import Contactus from './ContactUs.styles'

const useContactForm = () => {
  const [input, setInput] = useState({
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = e => {
    setInput(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value
      }
    })
  }
  return {
    input,
    handleChange
  }
}

const ContactUs = () => {
  const [error, setError] = useState({ message: '' })
  const { input, handleChange } = useContactForm()
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <Contactus>
      <Head>
        <title>NXShop67 - Contact-us</title>
      </Head>
      <ContactForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        setError={setError}
        error={error}
        inputs={input}
      />
    </Contactus>
  )
}
export default ContactUs