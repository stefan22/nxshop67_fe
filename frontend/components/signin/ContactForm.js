import React from 'react'
import SignInUpContainer from './SignInUp.styled'
import InputField from '../InputField'

const ContactForm = ({ handleSubmit, handleChange, setError, error, inputs }) => {
  return (
    <SignInUpContainer>
      <div className="login">
        <header>
          <h1>Contact-us</h1>
          <p>{`We'd love to hear from you!`}</p>
        </header>
        <p className="error-message">{error?.message}</p>

        <div className="login__body">
          <form method="POST" onSubmit={handleSubmit}>
            <fieldset>
              <InputField
                label="Email"
                name="email"
                value={inputs?.email}
                onChange={handleChange}
              />

              <section className="input-field">
                <label htmlFor="subject">
                  Subject:
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    id="subject"
                    value={inputs?.subject}
                    onChange={handleChange}
                  />
                </label>
              </section>

              <section className="input-field">
                <label htmlFor="message">
                  Message:
                  <textarea
                    placeholder="Your message"
                    name="message"
                    id="message"
                    rows={8}
                    value={inputs?.message}
                    onChange={handleChange}
                  />
                </label>
              </section>

              <div className="buttons-group">
                <section className="submit-button">
                  <button type="submit">Send</button>
                </section>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </SignInUpContainer>
  )
}

export default ContactForm
