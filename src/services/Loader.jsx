import React from 'react';

export default function Loader() {
  return (
    <div className={StyleSheet.loader}>
      <img src="/duck-duck-dance.gif" alt="loader"/>
    </div>
  );
}
