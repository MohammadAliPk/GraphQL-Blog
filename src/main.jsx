import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { ApolloClient , InMemoryCache , ApolloProvider } from '@apollo/client'


const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/clmxagfip1g0n01up58ttg6h7/master",
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
