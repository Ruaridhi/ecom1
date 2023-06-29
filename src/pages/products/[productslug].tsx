import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import styles from './SingleProduct.module.css';

const singleproduct = ({ product }: { product: any }) => {
  const nameCapt = product.name;
  // console.log('$$$$', product);
  return (
    <div className={styles.single_container}>
      <div className={styles.header}>
        <Link href={'/'} className={styles.homeLink}>
          All Pieces
        </Link>
        <div className={styles.cart}>
          <span className="snipcart-checkout">🛒</span>
          {/* only show when cart is not empty ? <p>$0.00</p> : null*/}
        </div>
      </div>
      <div className={styles.productDetails}>
        <h1>{nameCapt.charAt(0).toUpperCase() + nameCapt.slice(1)}</h1>

        <div className="left-section">
          <img src={product.image.url} width={300} height={700} alt="" />
        </div>
        <div className="right-section">
          <p className="price">€{product.price}</p>
          <p>{product.description?.text}</p>
          {/* <div
          dangerouslySetInnerHTML={{
            __html: product.description?.html,
          }}
        ></div> */}
          <button
            className="btn snipcart-add-item"
            data-item-price={product.price}
            data-item-id={product.id}
            // data-item-price='{"eur": product.price}'
            data-item-url={`products/${product.slug}`}
            data-item-image={product.image.url}
            data-item-name={product.name}
          >
            Add to cart 🛒
          </button>
        </div>
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
