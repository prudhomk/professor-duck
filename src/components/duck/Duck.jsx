import React, { useState } from 'react';
import  { phrases, sfx } from '../data/Phrases.js';
import BugForm from '../form/BugForm';
import styles from './Duck.css';

export default function Duck() {
  //manage a boolean for if each accessory button has been clicked
  const [pixel, setPixel] = useState(false);

  const x = Math.floor(Math.random() * phrases.length);
  const y = Math.floor(Math.random() * sfx.length);
  const secretNum = Math.floor(Math.random() * 50);
  const randomNum = Math.floor(Math.random() * 50);

  const randomPhrase = () => {
    return phrases[x].phrase;
  };

  const randomSfx = () => {
    return sfx[y];
  };

  const handleClick = () => {
    (pixel === false) ? setPixel(true) : setPixel(false);
  };

  const custom = () => {
    if(pixel) {
      return 'coolduckpixel.png';
    } else if(randomNum === secretNum) {
      return 'uhoh.png';
    } else {
      return 'coolduck.png';
    }
  };

  const quackback = () => {
    const audio = new Audio(`${randomSfx()}`);
    audio.load();
    audio.play();
  };

  const buttonText = () => {
    if(pixel === false) {
      return 'Pixelize';
    } else {
      return 'Rubberize';
    }
  };

  return (
    <>
      <div>
        <div className={styles.speechbubble}>
          {randomPhrase()}
        </div>
        <div className={styles.duck}>
          <img onClick={quackback} src={custom()}/>
        </div>
        <div className={styles.buttons}>
          <button onClick={handleClick}>{buttonText()}</button>
        </div>
        <BugForm/>
      </div>
    </>
  );
}

