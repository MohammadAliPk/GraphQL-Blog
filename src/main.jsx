import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/index.css"
import "./styles/fonts.css"
import theme from './mui/theme.js'


import { ApolloClient , InMemoryCache , ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from "react-router-dom"


const client = new ApolloClient({
  uri: import.meta.env.VITE_SOME_KEY,
  cache: new InMemoryCache()
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
)
