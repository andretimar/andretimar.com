import React from 'react';

const PortfolioItem = props => {
  return (
    <article className="portfolio-item">
      <a href={props.url} target="_blank">
        <div
          className="portfolio-item__illustration"
          style={{ backgroundColor: props.color }}
        >
          <img
            src={props.image}
            alt={props.name}
            className="portfolio-item__image"
          />
        </div>
        <div className="portfolio-item__tagline">{props.tagline}</div>
        <h3 className="portfolio-item__name"> {props.name} </h3>
      </a>
    </article>
  );
};

export default PortfolioItem;
