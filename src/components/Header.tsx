import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <Link className="link" href="/" style={{ textDecoration: 'none' }}>
        <div className={styles.logo}>
          <h3>F|Y|R</h3>
        </div>
      </Link>
      <div className={styles.cart}>
        <span>🛒</span>
        {/* only show when cart is not empty ? <p>$0.00</p> : null*/}
      </div>
    </nav>
  );
};

export default Header;
