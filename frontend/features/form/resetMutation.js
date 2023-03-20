import gql from 'graphql-tag'

const resetMutation = gql`
  mutation resetMutation($email: String!, $name: String!, $password: String!) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      email
    }
  }
`

export default resetMutation
