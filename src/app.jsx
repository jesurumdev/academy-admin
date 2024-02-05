/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';
import { ToastContainer } from 'react-toastify';
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql', // TODO: add to env var
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <ToastContainer position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          theme='colored'
        />
        <Router />
      </ThemeProvider>
    </ApolloProvider>
  );
}
