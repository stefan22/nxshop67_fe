import React from 'react'
import Link from 'next/link'
import SigninSl from './styles/SigninSl'

const SignInUp = ({
  handleSubmit,
  handleChange,
  error,
  inputs,
  hrefLink,
  btnLabel,
  btnIntroMsg,
  heading
}) => (
  <SigninSl>
    <div className="login">
      <header>
        <h1>Signin</h1>
        <p>{heading}</p>
      </header>
      <p className="error-message">{error?.message}</p>

      <div className="login__body">
        <form method="POST" onSubmit={handleSubmit}>
          <fieldset>
            <section className="input-field">
              <label htmlFor="email">
                Email:
                <input
                  type="email"
                  placeholder="Email"
                  autoComplete="current-email"
                  required
                  name="email"
                  value={inputs.email}
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
                  autoComplete="current-password"
                  name="password"
                  value={inputs.password}
                  onChange={handleChange}
                />
              </label>
            </section>

            <div className="buttons-group">
              <section className="submit-button">
                <button type="submit">Sign in</button>
              </section>

              <section className="login__no-account">
                <p>{btnIntroMsg}</p>
                <Link href={hrefLink}>
                  <button type="button">{btnLabel}</button>
                </Link>
              </section>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </SigninSl>
)

export default SignInUp
