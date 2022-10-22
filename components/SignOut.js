import { useMutation } from "@apollo/client";
import gql from 'graphql-tag'
// import Router from "next/router";
import { currentUserQuery } from "@/graphql/currentUserQuery";

const signOutMutation = gql`
    mutation signOutMutation {
        endSession
    }
`

export default function Signout() {
  const [ signout ] = useMutation(signOutMutation, {
    refetchQueries: [{ query: currentUserQuery }]
  })
  console.log('user ',currentUserQuery)
  return (
    <button type="button" onClick={signout}>
      Sign Out
    </button>
  )

}
