import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div className={styles.logo}>
          <h3>F|Y|R</h3>
        </div>
      </Link>
      <div className={styles.navLinks}>
        <Link
          href="/about"
          className={styles.link}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={styles.link}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Contact
        </Link>
      </div>
      <div className={styles.cart}>
        <span className="snipcart-checkout">🛒</span>
        {/* only show when cart is not empty ? <p>$0.00</p> : null*/}
      </div>
    </nav>
  );
};

export default Header;
