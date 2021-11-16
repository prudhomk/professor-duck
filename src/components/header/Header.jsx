import React from 'react';
import styles from './Header.css';

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <h1>Ask the Rubber Duck</h1>
        <h2>Knows All, Quacks All</h2>
      </div>
    </>
  );
}
