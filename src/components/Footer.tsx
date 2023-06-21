import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        All Rights Reserved. Copyright{' '}
        <span className={styles.copyright}>©</span> 2022
      </p>
    </footer>
  );
};
export default Footer;
