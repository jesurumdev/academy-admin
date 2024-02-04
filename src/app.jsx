/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';
import { ToastContainer } from 'react-toastify';
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

import { gql, ApolloClient, InMemoryCache } from '@apollo/client';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  client
  .query({
    query: gql`
      query {
        getAllStudents {
          name
          status
          belt
        }
      }
    `,
  })
  .then((result) => console.log({result}))
  .catch((error) => console.log({error}));

  return (
    // <ApolloProvider client={client}>
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
    // </ApolloProvider>
  );
}
