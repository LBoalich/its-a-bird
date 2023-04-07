import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDescriptions } from './descriptionsSlice';
import "./Descriptions.css";

export function Descriptions() {
  const dispatch = useDispatch();
  const descritptions = useSelector(selectDescriptions);
  const currentSelection = "Blue Eyed";

  return (
    <article>
        <h1>{currentSelection}</h1>
        <p style={{whiteSpace: "pre-line"}}>{descritptions[currentSelection]}</p>
    </article>
  );
};