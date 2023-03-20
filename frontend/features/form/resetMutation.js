import gql from 'graphql-tag'

const resetMutation = gql`
  mutation resetMutation($email: String!, $password: String!, $token: String!) {
    redeemUserPasswordResetToken(email: $email, token: $token, password: $password) {
      code
      message
    }
  }
`

export default resetMutation
