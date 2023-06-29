import React from 'react';
import styles from './about.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <h3 className={styles.header}>About</h3>
      <div className={styles.aboutContainer}>
        
        <h1 className={styles.aboutTitle}>
          F<span className={styles.span}>|</span>Y
          <span className={styles.span}>|</span>R
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula
          ex eget convallis auctor. Donec a dolor nunc. In ornare ipsum sem, in
          efficitur nunc auctor in. Aliquam pellentesque efficitur risus, non
          aliquam arcu facilisis id. Quisque lectus magna, ultrices sit amet
          mauris at, fermentum pulvinar erat. Vestibulum ipsum mauris, volutpat
          consectetur ante interdum, vestibulum cursus libero. Donec eu ligula
          et lectus malesuada euismod in vel libero. Ut bibendum elementum
          ligula, ut ornare tellus porttitor quis. Vestibulum sollicitudin
          mattis fermentum. Vivamus accumsan libero quis arcu dignissim euismod.
          Nulla finibus, sem sit amet tincidunt venenatis, leo ipsum tincidunt
          libero, in dictum nibh ex sed nibh. Morbi nibh elit, condimentum ut
          arcu nec, fringilla pretium odio. Nulla facilisi. In pellentesque
          ligula sed posuere pulvinar. Morbi sodales sagittis malesuada. Fusce
          magna erat, sodales laoreet efficitur et, rutrum in arcu. Praesent
          finibus, nunc et placerat fermentum, elit urna feugiat eros, vitae
          dapibus nibh massa vel enim. Curabitur pellentesque interdum leo, eu
          mattis libero eleifend non. Duis non maximus neque, in semper ex.
          Praesent justo velit, bibendum id velit ut, semper euismod leo.
          Aliquam eu venenatis erat.
        </p>
      </div>
      <Footer />
    </>
  );
}
