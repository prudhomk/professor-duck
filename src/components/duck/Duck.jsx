import React from 'react';
import  { phrases } from '../data/Phrases.js';


export default function Duck() {

  const x = Math.floor(Math.random() * phrases.length);

  const randomPhrase = () => {
    return phrases[x].phrase;
  };

  return (
    <>
      <div>
        {randomPhrase()}
      </div>
      <div className={StyleSheet.duck}>
        <img/>
      </div>
      <div className={StyleSheet.buttons}>
        <button>Hat</button>
        <button>Glasses</button>
        <button>Coat</button>
        <button>Color</button>
      </div>
    </>
  );
}
