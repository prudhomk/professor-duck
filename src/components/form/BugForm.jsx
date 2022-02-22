import React, { useState } from 'react';
import { createProblem } from '../../services/duckApi';
import styles from '../form/Form.css';

export default function BugForm() {

  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  
  const handleChange = ({ target }) => {
    switch(target.name) {
      case 'description':
        setDescription(target.value);
        break;
      case 'code':
        setCode(target.value);
        break;
      default:
        console.log('No Data input');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createProblem({
      description,
      code
    });

  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Describe your Bug
          <textarea
            required
            name="description"
            placeholder="Describe your Problem"
            value={description}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Provide your code
          <textarea
            required
            name="code"
            placeholder="Enter your Code Snippet"
            value={code}
            onChange={handleChange}
          ></textarea>
        </label>
        <button>Submit Your Request</button>
      </form>
    </div>
  );
}
