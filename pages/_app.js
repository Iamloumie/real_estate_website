import Router from 'next/router';
import { ChakraProvider } from "@chakra-ui/react";
import NProgress from 'nprogress';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false })

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });

  return (
    <>
      {/* REMOVED the <Head> component and the NProgress link entirely from here */}
      {/* It's now correctly placed in _document.js */}

      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
