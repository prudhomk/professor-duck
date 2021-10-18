import React from 'react';
import phrases from '../data/Phrases.js';


export default function Duck() {

  const randomPhrase = () => {
    return phrases.map(Math.floor(Math.random * phrases.length));
  }

  return (
    <div>
      {randomPhrase()}
    </div>
  )
}
