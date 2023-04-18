import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectDescriptions } from './descriptionsSlice';
import { selectResults } from '../results/resultsSlice';
import "./Descriptions.css";

export function Descriptions() {
  const slugify = require("slugify");
  const descriptions = useSelector(selectDescriptions);
  const results = useSelector(selectResults);
  let { type } = useParams();

  const getTypeString = () => {
    let typeString = "";
    Object.keys(descriptions).forEach(bird => {
      if (slugify(bird) === type) {
        typeString = bird;
      }
    });
    return typeString;
  };

  const currentSelection = getTypeString();
  const currentSelectionObj = descriptions[currentSelection];
  const resultSelection = results[currentSelection];

  return (
    <article className="description-container">
        <h1>{currentSelection} Cockatoo</h1>
        <figure className="description-img-container">
          <img src={require(`${currentSelectionObj.img}`)} alt={currentSelectionObj.alt} className="description-img"/>
        </figure>
        <p>{currentSelectionObj.description}<span className="description-img-container" id="description-right"><img src={require(`../results${resultSelection.img.replace(".", "")}`)} alt={resultSelection.alt} className="description-img"/></span>{currentSelectionObj.description2}</p>  
    </article>
  );
};
