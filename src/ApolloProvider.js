import { createApolloProvider } from '@vue/apollo-option'
import ApolloClient from './ApolloClient'

const ApolloProvider = createApolloProvider({
  defaultClient: ApolloClient,
})

export default ApolloProvider;