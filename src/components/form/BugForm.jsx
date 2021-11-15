import React from 'react';

export default function BugForm() {
  return (
    <div>
      <form>
        <label>
          Describe your Bug
          <textarea></textarea>
        </label>
        <label>
          Provide your code
          <textarea></textarea>
        </label>
        <button>Submit Your Bug</button>
      </form>
      <button>Search for a solution...</button>
    </div>
  );
}
