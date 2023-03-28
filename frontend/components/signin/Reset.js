import { useMutation } from '@apollo/client'
import { useForm, resetMutation } from '../../features/form'
import { SignInUpContainer } from '../signin'

const Reset = ({ token }) => {
  const { input, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token
  })

  const [reset, { data, loading }] = useMutation(resetMutation, {
    variables: input
  })

  async function handleSubmit(e) {
    e.preventDefault()
    await reset()
    resetForm(input)
  }

  return (
    <SignInUpContainer>
      <div className="login">
        <header>
          <h1>Password reset</h1>
          {data?.redeemUserPasswordResetToken === null && (
            <p>Success! You can Now sign in</p>
          )}
        </header>

        <div className="login__body password__reset">
          <form method="POST" onSubmit={handleSubmit}>
            <fieldset>
              <section className="input-field">
                <label htmlFor="email">
                  Email:
                  <input
                    type="email"
                    placeholder="Email"
                    autoComplete="current-email"
                    value={input?.email}
                    onChange={handleChange}
                    required
                    name="email"
                  />
                </label>
              </section>

              <section className="input-field">
                <label htmlFor="password">
                  Password:
                  <input
                    type="password"
                    placeholder="Password"
                    value={input?.password}
                    onChange={handleChange}
                    required
                    name="password"
                  />
                </label>
              </section>

              <div className="buttons-group">
                <section className="submit-button">
                  <div className="other__links">
                    <p>{`Don't have an account?`}</p>&nbsp;
                  </div>
                  <button type="submit">Reset password</button>
                </section>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </SignInUpContainer>
  )
}

export default Reset
