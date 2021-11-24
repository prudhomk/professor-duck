export const fetchSolutions = async () => {
  const res = await fetch(`${process.env.API}/api/v1/solutions`);
  const solutions = await res.json();

  return solutions;
};

export const createProblem = async (problem) => {

  const res = await fetch(`${process.env.API}/api/v1/problems`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(problem)
  });

  const newProblem = await res.json();
  return newProblem;
};

export const fetchProblem = async (id) => {
  const res = await fetch(`${process.env.API}/api/v1/problems/${id}`);
  const problem = await res.json();
  return problem;
};

