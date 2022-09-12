import {
  ApolloClient,
  ApolloLink,
  InMemoryCache
} from '@apollo/client'
import { onError } from '@apollo/link-error'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { createUploadLink } from 'apollo-upload-client'
import withApollo from 'next-with-apollo'
import { endpoint } from '../config'

/**
 * Creates and configures the ApolloClient
 * @param headers
 * @param initialState
 * @returns {ApolloClient}
 */
const createClient = ({ headers, initialState }) => {
  // new ApolloClient
  return new ApolloClient({
    // apolloLink is the link to the backend server
    link: ApolloLink.from([
      // gql errors are handled by the onError link
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            // eslint-disable-next-line no-console
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          )
        // if network error, log it
        if (networkError)
          // eslint-disable-next-line no-console
          console.log(
            `[Network error]: ${networkError}. Unable to connect to server.`
          )
      }),

      // this uses apollo-link-http under the hood
      createUploadLink({
        uri:
          process.env.NODE_ENV === 'development'
            ? endpoint
            : 'prodEndpoint',
        fetchOptions: {
          // send cookies with requests
          credentials: 'include'
        },
        // pass the headers along from this request. This enables SSR with logged-in state
        headers
      })
    ]),

    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // allProducts: paginationField(),
          }
        }
      }
    }).restore(initialState || {})
  })
}
// automatically handles the creation of the ApolloClient
const withData = withApollo(createClient, { getDataFromTree })

export default withData
