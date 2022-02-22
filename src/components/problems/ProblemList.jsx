import React from 'react';
import { useProblems } from '../../state/customHooks';
import Problem from './Problem';
import Loader from '../../services/Loader';

const ProblemList = () => {
  const [problems, loader] = useProblems();
  
  const problemElements = problems.map(problem => (
   
    <li key={problem.id}>
      <Problem {...problem} />
    </li>
  ));

  return (
    <>
      {
        loader ? <Loader/> :
          <div>
            <h1>Problems</h1>
            <ul>{problemElements}</ul>
          </div>
      }
    </>
  );
};

export default ProblemList;
