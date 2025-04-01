// src/lib/apolloClient.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

// Apollo Client configuration
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com", // Ensure this is the correct endpoint
  cache: new InMemoryCache(), // Apollo Client's InMemoryCache for caching
});

export default client; // Export the client for use in the ApolloProvider
