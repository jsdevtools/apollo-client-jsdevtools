import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { Query, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

import { setContext } from 'apollo-link-context';
import Pages from './pages';
import Login from './pages/login';
import { resolvers, typeDefs } from './resolvers';
import injectStyles from './styles';

// Set up our apollo-client to point at the server we created
// this can be local or a remote endpoint
const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri:
    process.env.REACT_APP_HOST && process.env.REACT_APP_ENDPOINT
      ? `${process.env.REACT_APP_HOST}/${process.env.REACT_APP_ENDPOINT}`
      : 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token,
      'client-name': 'Space Explorer [web]',
      'client-version': '1.0.0',
    },
  };
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
  initializers: {
    isLoggedIn: () => !!localStorage.getItem('token'),
    cartItems: () => [],
  },
  resolvers,
  typeDefs,
});

/**
 * Render our app
 * - We wrap the whole app with ApolloProvider, so any component in the app can
 *    make GraphqL requests. Our provider needs the client we created above,
 *    so we pass it as a prop
 * - We need a router, so we can navigate the app. We're using Reach router for this.
 *    The router chooses between which component to render, depending on the url path.
 *    ex: localhost:3000/login will render only the `Login` component
 */

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

injectStyles();
ReactDOM.render(
  <ApolloProvider client={client}>
    <Query query={IS_LOGGED_IN}>{({ data }) => (data.isLoggedIn ? <Pages /> : <Login />)}</Query>
  </ApolloProvider>,
  document.getElementById('root')
);
