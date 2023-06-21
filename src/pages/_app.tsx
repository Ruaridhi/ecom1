import { createContext, useContext, useState } from 'react';
import { AppProps } from 'next/app';
import Footer from '@/components/Footer';
//import ErrorBoundary from '@/components/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
