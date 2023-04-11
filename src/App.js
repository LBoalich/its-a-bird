import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import { Quiz } from './features/quiz/Quiz';
import { Results } from './features/results/Results';
import { Descriptions } from "./features/descriptions/Descriptions";
import { Types } from './features/types/Types';
import Root from './features/root/Root';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> } >
    <Route path="" element={ <Quiz /> } />
    <Route path="result" element={ <Results /> } />
    <Route path="types" element={ <Types /> }/>
    <Route path="types/:type" element={<Descriptions /> } />
  </Route>
));

function App() {
  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;
