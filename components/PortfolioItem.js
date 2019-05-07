import React from 'react';

const PortfolioItem = props => {
  return (
    <article className="portfolio-item">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <div
          className="portfolio-item__illustration"
          style={{ backgroundColor: props.color }}
        >
          <picture className="portfolio-item__image">
            <source
              srcSet={`${props.image}.webp`}
              type="image/webp"
              alt={props.name}
            />
            <source
              srcSet={`${props.image}.jpg`}
              type="image/jpeg"
              alt={props.name}
            />
            <img src={`${props.image}.jpg`} alt={props.name} />
          </picture>
        </div>
        <div className="portfolio-item__tagline">{props.tagline}</div>
        <h3 className="portfolio-item__name"> {props.name} </h3>
      </a>
    </article>
  );
};

export default PortfolioItem;
