import Head from 'next/head';
import Image from 'next/image';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import styles from './SingleProduct.module.css';

const singleproduct = ({ product }: { product: any }) => {
  console.log('$$$$', product);
  return (
    <div className="container single-container">
      <h1>BOOOOM</h1>
      <div className="left-section">
        <img src={product.image.url} width={300} height={700} alt="" />
      </div>
      <div className="right-section">
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: product.description?.html,
          }}
        ></div>
        <a className="btn">Add to cart 🛒</a>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }: { params: any }) {
  const client = new ApolloClient({
    uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clivsbybz0h0401ut2cow8e1c/master',
    cache: new InMemoryCache(),
  });

  console.log('^^^^^', params);

  const paramsdata = await client.query({
    query: gql`
      query MyQuery($slug: String) {
        product(where: { slug: $slug }) {
          id
          name
          price
          slug
          description {
            text
          }
          image {
            url
          }
        }
      }
    `,
    variables: {
      slug: params.productslug,
    },
  });

  const product = paramsdata.data.product;

  console.log('%%%%', paramsdata.data.product);
  return {
    props: { product },
  };
}

export default singleproduct;
