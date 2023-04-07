import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import { Quiz } from './features/quiz/Quiz';
import { Results } from './features/results/Results';
import { Descriptions } from "./features/descriptions/Descriptions";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Descriptions />} />
));

function App() {
  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;
