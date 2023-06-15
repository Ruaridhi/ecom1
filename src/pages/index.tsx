//import Products from './Products';
import Head from 'next/head';

import Link from 'next/link';
//import allProducts from '../data/products.json';
import styles from './Products.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Products from '../components/Products1';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Home({ allProducts }: { allProducts: any }) {
  return (
    <>
      <Products allProducts={allProducts} />
    </>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clivsbybz0h0401ut2cow8e1c/master',
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query ProductsQuery {
        products {
          id
          name
          slug
          price
          image {
            url
          }
        }
      }
    `,
  });

  //console.log(data.data.products);

  const allProducts = data.data.products;
  console.log('******', allProducts);
  return {
    props: { allProducts },
  };
}
