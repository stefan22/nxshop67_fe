import React, { useState } from 'react'
import Head from 'next/head'
import { ContactForm } from '../../components/signin'
import Contactus from './ContactUs.styled'
import { useForm } from '../../features/form'
import { SkeleLoader, withLoading } from '../../components/loader'

const ContactUs = () => {
  const [error, setError] = useState({ message: '' })
  const { input, handleChange } = useForm()

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

export default withLoading(Contactus, SkeleLoader)
