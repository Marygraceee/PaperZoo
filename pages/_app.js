/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import SimpleBottomNavigation from '../components/BottomNavigation';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import SearchBarMobile from '../components/SearchBarMobile';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PaperZoo</title>
        <meta
          name="viewport"
          content="height=device-height,
                      width=device-width, initial-scale=1.0,
                      minimum-scale=1.0, maximum-scale=1.0,
                      user-scalable=no, target-densitydpi=device-dpi"
        />
      </Head>

      <Navbar />
      <SearchBarMobile />
      <SimpleBottomNavigation />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
      <Footer />

    </>
  );
}

export default MyApp;
