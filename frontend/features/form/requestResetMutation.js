import gql from 'graphql-tag'

const requestResetMutation = gql`
  mutation requestResetMutation($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`

export default requestResetMutation
