/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Navbar from '../components/navbar';
import '../styles/globals.css';
import { CartProvider } from "../context/cart";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Navbar />

      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
