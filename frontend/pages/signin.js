import React, { useState } from 'react'
import Router from 'next/router'
import { SignInUp } from '../components/signin'
import { useForm } from '../features/form'
import { useMutation } from '@apollo/client'
import { signInMutation } from '../features/form'
import { currentUserQuery } from '../features/current-user'

const SignInPage = () => {
  const [error, setError] = useState({ message: '' })
  const { inputs, handleChange, resetForm } = useForm()

  const [signin] = useMutation(signInMutation, {
    variables: inputs,
    refetchQueries: [{ query: currentUserQuery }]
  })

  const handleSubmit = async e => {
    e.preventDefault()
    let { data } = await signin()

    if (data?.authenticateUserWithPassword?.item?.email === inputs?.email) {
      await Router.push({ pathname: '/account' })
    }
    if (data?.authenticateUserWithPassword.code === 'FAILURE') {
      setError({
        message: data?.authenticateUserWithPassword.message
      })
    }

    resetForm(inputs)
  }

  return (
    <SignInUp
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
      heading="Welcome back"
      inputs={inputs}
      hrefLinkUp="/signup"
      hrefLinkIn="/signin"
      labelSignin="Sign in"
      labelSignup="Sign up"
      btnIntroMsg="Don't have an account?"
    />
  )
}

export default SignInPage
