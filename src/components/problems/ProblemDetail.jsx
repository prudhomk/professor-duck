import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useProblem } from '../../state/customHooks.js';

export default function ProblemDetail() {
  const { id } = useParams();
  const problem = useProblem(id);
  const history = useHistory();

  // const handleSolution = () => {
  //   history.push('/solutions');
  // };

  const handleReturn = () => {
    history.push('/problems');
  };

  return (
    <div>
      <div>
        <h1>Problem #: {problem.id}</h1>
        <p>{problem.description}</p>
        <p>{problem.code}</p>
      </div>
      {/* <div>
        <button onClick={handleSolution}>Submit a Solution</button>
      </div> */}
      <div>
        <button onClick={handleReturn}>Return to Problem Listings</button>
      </div>
    </div>
  );
}
