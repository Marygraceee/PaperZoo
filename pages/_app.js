/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import SimpleBottomNavigation from '../components/BottomNavigation';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import SearchBarMobile from '../components/SearchBarMobile';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (

    <ChakraProvider>
      <Head>
        <title>PaperZoo</title>
      </Head>

      <Navbar />
      <SearchBarMobile />
      <SimpleBottomNavigation />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>

  );
}

export default MyApp;
