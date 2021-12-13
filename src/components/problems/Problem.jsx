import React from 'react';
import { Link } from 'react-router-dom';

export default function Problem({ id, description, code }) {
  return (
    <>
      <Link to={`/problems/${id}`}>
        <div>
          <p>Description: {description}</p>
          <p>Code Snippet: {code}</p>
        </div>
      </Link>
    </>
  );
}
