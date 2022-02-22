/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { fetchAllProblems, fetchProblem, fetchSolutions } from '../services/duckApi.js';

export const useSolutions = (page) => {
  const [solutions, setSolutions] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(async () => {
    const res = await fetchSolutions(page);
    setSolutions(res.slice((page - 1) * 10, page * 10));
    setLoader(false);
  }, [page, loader]);

  return { solutions, loader };
};

export const useProblem = (id) => {
  const [problem, setProblem] = useState({});
 
  useEffect(() => {
    fetchProblem(id)
      .then(setProblem);
  }, [id]);
  return problem;
};


export const useProblems = () => {
  const [problems, setProblems] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(async () => {
    const res = await fetchAllProblems();
    setProblems(res);
    setLoader(false);
  }, [loader]);

  return { problems, loader };
};

