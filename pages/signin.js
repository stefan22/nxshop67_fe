import React, { useState } from "react";
import Router from "next/router";
import SigninSl from "../components/styles/SigninSl";
import useForm from "../lib/useForm";
import { gql } from "graphql-tag";
import { useMutation } from "@apollo/client";
import { currentUserQuery } from "@/graphql/currentUserQuery";

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

const Signin = () => {
  const [error, setError] = useState({ message: '' })
  const { input, handleChange, resetForm } = useForm({
    email: '',
    password: ''
  })

  const [signin, { loading }] = useMutation(signinMutation, {
    variables: input,
    refetchQueries: [{ query: currentUserQuery }]
  })

  const handleSubmit = async e => {
    e.preventDefault()
    let response = await signin()
    resetForm(input)
    const { code, message, item } = response.data.authenticateUserWithPassword
    if (code === 'FAILURE') {
      setError({ message })
    } else if (item?.id) {
      setError({ message: '' })
      await Router.push({
        pathname: `/account`
      })
    }
  }

  if (loading) return <p>Loading...</p>

  return (
    <SigninSl>
      <div className="login">
        <header>
          <h1>Signin</h1>
          <p>Welcome Back!</p>
          {error?.message ? error.message : ''}
        </header>
        <div className="login__body">
          <form method="POST" onSubmit={handleSubmit}>
            <fieldset>
              <section className="input-field">
                <label htmlFor="email">
                  Email:
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                  />
                </label>
              </section>
              <section className="input-field">
                <label htmlFor="password">
                  Password:
                  <span>Password Reset</span>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                  />
                </label>
              </section>
              <div className="buttons-group">
                <section className="submit-button">
                  <button type="submit">Sign in</button>
                </section>
                <section className="login__no-account">
                  <p>Don&apos;t have an account?</p>
                  <button type="button">Sign up</button>
                </section>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </SigninSl>
  )
}

export default Signin
