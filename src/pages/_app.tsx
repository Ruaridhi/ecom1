import { createContext, useContext, useState } from 'react';
import { AppProps } from 'next/app';
//import ErrorBoundary from '@/components/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
