import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectDescriptions } from './descriptionsSlice';
import "./Descriptions.css";

export function Descriptions() {
  const slugify = require("slugify");
  const descritptions = useSelector(selectDescriptions);
  let { type } = useParams();

  const getTypeString = () => {
    let typeString = "";
    Object.keys(descritptions).forEach(bird => {
      if (slugify(bird) === type) {
        typeString = bird;
      }
    });
    return typeString;
  };

  const currentSelectionString = getTypeString();
  const currentSelection = descritptions[currentSelectionString];

  return (
    <article className="description-container">
        <h1>{currentSelectionString}</h1>
        <figure className="description-img-container">
          <img src={require(`${currentSelection.img}`)} alt={currentSelection.alt} className="description-img" />
        </figure>
        <p style={{whiteSpace: "pre-line"}}>{currentSelection.description}</p>
    </article>
  );
};