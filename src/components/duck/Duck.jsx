import React, { useState } from 'react';
import  { phrases, sfx } from '../data/Phrases.js';
import BugForm from '../form/BugForm';

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
    setPixel(true);
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

  console.log('rando', randomNum);
  console.log('secret', secretNum);
  return (
    <>
      <div>
        <div>
          {randomPhrase()}
        </div>
        <div className={StyleSheet.duck}>
          <img onClick={quackback} src={custom()}/>
        </div>
        <div className={StyleSheet.buttons}>
          <button onClick={handleClick}>Pixelize</button>
        </div>
        <BugForm/>
      </div>
    </>
  );
}

