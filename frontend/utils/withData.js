import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/link-error'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { createUploadLink } from 'apollo-upload-client'
import withApollo from 'next-with-apollo'
import { paginationField } from '../components/pagination'
import getConfig from 'next/config'

// env var
const { publicRuntimeConfig } = getConfig()
// eslint-disable-next-line no-console
console.log(publicRuntimeConfig)
const endpoint = publicRuntimeConfig.BACKEND_URL

/**
 * Creates new ApolloClient
 * @param headers
 * @param initialState
 * @returns {ApolloClient}
 */
const createClient = ({ headers, initialState }) =>
  new ApolloClient({
    // link to server
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            // eslint-disable-next-line no-console
            console.log(
              `[~~~~~~~~~~GraphQL error~~~~~~~~~~]: 
              Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          )
        if (networkError)
          // eslint-disable-next-line no-console
          console.log(
            `[mmmmmmmmNetwork errormmmmmmmmmmmmmmm]: 
            ${networkError}. Unable to connect to server.`
          )
      }),
      createUploadLink({
        uri:
          process.env.NODE_ENV === 'development'
            ? endpoint
            : 'http://localhost:3000/api/graphql',
        fetchOptions: {
          credentials: 'include'
        },
        // ssr logged state
        headers
      })
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allProducts: paginationField()
          }
        }
      }
    }).restore(initialState || {})
  })

export default withApollo(createClient, { getDataFromTree })
