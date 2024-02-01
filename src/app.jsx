/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';
import { ToastContainer } from 'react-toastify';
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
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
  );
}
