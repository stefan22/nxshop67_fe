import gql from 'graphql-tag'

const signUpMutation = gql`
  mutation signUpMutation($email: String!, $name: String!, $password: String!) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`

export default signUpMutation
