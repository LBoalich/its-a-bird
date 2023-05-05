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
    <main className="description-container">
        <div className="description-font-container">
          <picture>
            <source
              media="(min-width: 1600px)" 
              srcSet={`${require(`${currentSelectionObj.font30}`)}, ${require(`${currentSelectionObj.font60}`)} 2x`}
            />
            <source
              media="(min-width: 0px)" 
              srcSet={`${require(`${currentSelectionObj.font20}`)}, ${require(`${currentSelectionObj.font40}`)} 2x`}
            />
            <img 
              src={require(`${currentSelectionObj.font30}`)} 
              alt={currentSelectionObj.fontAlt} className="description-font-img"/>
          </picture>
          <picture 
            className='description-cockatoo-font-container'
          >
            <source
              media="(min-width: 1600px)"
              srcSet={`${require("./descriptionsFonts30/cockatoo.webp")}, ${require("./descriptionsFonts60/cockatoo.webp")} 2x`}
            />
            <source
              media="(min-width: 0px)"
              srcSet={`${require("./descriptionsFonts20/cockatoo.webp")}, ${require("./descriptionsFonts40/cockatoo.webp")} 2x`}
            />
            <img 
              src={require("./descriptionsFonts30/cockatoo.webp")} className="description-cockatoo-font" 
              alt="feathered font reading 'Cockatoo'"
            />
          </picture>
        </div>
        <picture 
          className="description-img-container">
          <source 
            media="(min-width: 1600px)"
            srcSet={`${require(`${currentSelectionObj.imgM}`)}, ${require(`${currentSelectionObj.imgL}`)} 2x`}
            fetchpriority="high"
          />
          <source 
            media="(min-width: 768px)"
            srcSet={`${require(`${currentSelectionObj.imgS}`)}, ${require(`${currentSelectionObj.imgM}`)} 2x`}
            fetchpriority="high"
          />
          <source 
            media="(min-width: 0px)"
            srcSet={`${require(`${currentSelectionObj.imgXS}`)}, ${require(`${currentSelectionObj.imgS}`)} 2x`}
            fetchpriority="high"
          />
          <img 
            src={require(`${currentSelectionObj.imgM}`)} 
            alt={currentSelectionObj.alt} className="description-img" id="description-left"
            fetchpriority="high"
          />
        </picture>
        <p>
          {currentSelectionObj.description} 
        </p>  
          <picture
            className="description-img-container" id="description-right">
            <source 
            media="(min-width: 1600px)"
            srcSet={`${require(`../results${resultSelection.img40.replace(".", "")}`)}, ${require(`../results${resultSelection.img80.replace(".", "")}`)} 2x`}
            />
            <source 
              media="(min-width: 768px)"
              srcSet={`${require(`../results${resultSelection.img30.replace(".", "")}`)}, ${require(`../results${resultSelection.img60.replace(".", "")}`)} 2x`}
            />
            <source 
              media="(min-width: 0px)"
              srcSet={`${require(`../results${resultSelection.img20.replace(".", "")}`)}, ${require(`../results${resultSelection.img40.replace(".", "")}`)} 2x`}
            />
            <img 
              src={require(`../results${resultSelection.img40.replace(".", "")}`)} 
              alt={resultSelection.alt} className="description-img"
              fetchpriority="high"
            />
          </picture>
        <p>
          {currentSelectionObj.description2}
        </p>  
    </main>
  );
};
