import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/link-error'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { createUploadLink } from 'apollo-upload-client'
import withApollo from 'next-with-apollo'
import { paginationField } from '../components/pagination'
import getConfig from 'next/config'

/*
 * @function-  createClient returns a new instance of the ApolloClient class from the @apollo/client library.
 * @params - headers and initialState
 * The client is configured with a link that is composed of an onError function that logs any GraphQL errors or network errors to the console and a
 * The createUploadLink takes an URI and is used to handle file uploads in GraphQL.
 * The client also has a cache instance of InMemoryCache  to handle pagination for querying products.
 * The initialState is used to hydrate the cache on the client for server-side rendering.
 * The publicRuntimeConfig is an object that stores the env variables pulled off next.config.jsfile.
 * */

const { publicRuntimeConfig } = getConfig()
const GQLEndPoint = publicRuntimeConfig.GQL_ENDPOINT

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
            ? GQLEndPoint
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
