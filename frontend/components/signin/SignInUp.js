import React from 'react'
import Link from 'next/link'
import SignInUpContainer from './SignInUp.styled'
import { StyledBtn } from '../../styles/SharedStyled'
import InputField from '../InputField'

const SignInUp = ({
  handleSubmit,
  handleChange,
  error,
  inputs,
  hrefLinkIn,
  hrefLinkUp,
  labelSignin,
  labelSignup,
  btnIntroMsg,
  heading
}) => {
  const { email, password } = inputs

  return (
    <SignInUpContainer>
      <div className="login">
        <header>
          <h1>Signin</h1>
          <p>{heading}</p>
        </header>
        <p className="error-message">{error?.message}</p>

        <div className="login__body">
          <form method="POST" onSubmit={handleSubmit}>
            <fieldset>
              <InputField
                label="Email"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <InputField
                label="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />

              <div className="buttons-group">
                <section className="submit-button">
                  <div className="other__links">
                    <p>Password reset?</p>&nbsp;
                    <Link href="/password-reset">Click here.</Link>
                  </div>

                  <button type="submit">Sign in</button>
                </section>

                <section className="login__no-account">
                  <p>{btnIntroMsg}</p>
                  <StyledBtn href={hrefLinkUp} name={labelSignup} />
                </section>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </SignInUpContainer>
  )
}

export default SignInUp
