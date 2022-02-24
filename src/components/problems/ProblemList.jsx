import React from 'react';
import { useProblems } from '../../state/customHooks';
import { useHistory } from 'react-router-dom';
import Problem from './Problem';
import Loader from '../../services/Loader';
import styles from './Problem.css';

const ProblemList = () => {
  const { problems, loader } = useProblems();
  const history = useHistory();
  
  const problemElements = problems.map(problem => (
   
    <li key={problem.id}>
      <Problem {...problem} />
    </li>
  ));

  const handleReturn = () => {
    history.push('/');
  };

  return (
    <>
      {
        loader ? <Loader/> :
          <div className={styles.list}>
            <h1>Problems</h1>
            <ul>{problemElements}</ul>
          </div>
      }
      <button onClick={handleReturn}>Return to Home</button>
    </>
  );
};

export default ProblemList;
