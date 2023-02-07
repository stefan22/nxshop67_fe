import React, { useState } from 'react'
import Router from 'next/router'
import { SignInUp } from '@/components/signin'
import { useForm } from '../hooks/form'
import { gql } from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { currentUserQuery } from '../hooks/current-user'

const signinMutation = gql`
  mutation signinMutation($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`

const SignInPage = () => {
  const [error, setError] = useState({ message: '' })
  const { input, handleChange, resetForm } = useForm({
    email: '',
    password: ''
  })

  const [signin] = useMutation(signinMutation, {
    variables: input,
    refetchQueries: [{ query: currentUserQuery }]
  })

  const handleSubmit = async e => {
    e.preventDefault()
    let { data } = await signin()

    if (data?.authenticateUserWithPassword.code === 'FAILURE') {
      setError({
        message: data?.authenticateUserWithPassword.message
      })
    } else if (data?.authenticateUserWithPassword.code !== 'FAILURE') {
      await Router.push({ pathname: '/account' })
    }
    resetForm(input)
  }

  return (
    <SignInUp
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      heading={'Welcome back!'}
      error={error}
      inputs={input}
      hrefLink={'/signup'}
      btnLabel={'Sign up'}
      btnIntroMsg={"Don't have an account?"}
    />
  )
}

export default SignInPage
