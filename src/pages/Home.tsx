import Head from 'next/head';
import Link from 'next/link';
import allProducts from '../data/products.json';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Plants | Home</title>
      </Head>
      <div className="container">
        <h2 className={styles.title}>
          All Products <span>🌿</span>
        </h2>
        <div className={styles.products_container}>
          {allProducts.map((product) => {
            return (
              <div className={styles.product_card} key={product.id}>
                <Link href={`products`}>
                  <div className={styles.product_img}>
                    <img src={product.image.url} alt={product.name} />
                  </div>
                </Link>
                <div className={styles.product_content}>
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button className="btn">Add to cart 🛒</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
