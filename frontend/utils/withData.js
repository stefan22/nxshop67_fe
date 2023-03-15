import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/link-error'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { createUploadLink } from 'apollo-upload-client'
import withApollo from 'next-with-apollo'
import getConfig from 'next/config'
import { endpoint, prodEndpoint } from '../config/config'

// env var
const { publicRuntimeConfig } = getConfig()
const productionUrl = parseInt(publicRuntimeConfig.PRODUCTION_URL)

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
        uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
        fetchOptions: {
          credentials: 'include'
        },
        // ssr logged state
        headers
      })
    ]),
    cache: new InMemoryCache({}).restore(initialState || {})
  })

export default withApollo(createClient, { getDataFromTree })
