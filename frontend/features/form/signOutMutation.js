import { gql } from 'graphql-tag'

const signOutMutation = gql`
  mutation signOutMutation {
    endSession
  }
`

export default signOutMutation
