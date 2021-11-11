import React from 'react';
import  { phrases } from '../data/Phrases.js';


export default function Duck() {
  //manage a boolean for if each accessory button has been clicked
  const [hat, setHat] = useHat();

  const x = Math.floor(Math.random() * phrases.length);

  const randomPhrase = () => {
    return phrases[x].phrase;
  };

  const accessories = () => {
    //if a button is 'true' (been clicked), set display of image to true
    if(handleHat) {
      Image.load('hat');
    }
  };

  const handleHat = () => {
    //set clicked value to true or false
    Image.load('hat');
  };

  return (
    <>
      <div>
        {randomPhrase()}
      </div>
      <div className={StyleSheet.duck}>
        <img {...accessories()}/>
      </div>
      <div className={StyleSheet.buttons}>
        <button onClick={handleHat}>Hat</button>
        <button>Glasses</button>
        <button>Coat</button>
        <button>Color</button>
      </div>
    </>
  );
}

