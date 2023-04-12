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

  const currentSelection = getTypeString();

  return (
    <article>
        <h1>{currentSelection}</h1>
        <p style={{whiteSpace: "pre-line"}}>{descritptions[currentSelection]}</p>
    </article>
  );
};