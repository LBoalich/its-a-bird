import React from 'react';
import './App.css';
import { Quiz } from './features/quiz/Quiz';
import { Results } from './features/results/Results';

function App() {
  return (
    <div className="App">
      <Results />
      <Quiz />
    </div>
  );
}

export default App;
