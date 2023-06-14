import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Header />
      <Home />
      <main>{children}</main>
      <Footer />
    </>
  );
}
