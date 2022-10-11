import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <div className="card__container">
      <div className="card">
        <img className="card__image" src={props.imageUrl} alt="" />
        <div className="card__content">
          <div className="card__content__location">
            <FontAwesomeIcon
              className="content__location__icon"
              icon={faLocationDot}
            />
            <h2 className="content__location__text">{props.location}</h2>
            <a href={props.googleMapsUrl} className="content__location__link">
              View on Google Maps
            </a>
          </div>
          <h1 className="card__content__title">{props.title}</h1>
          <h3 className="card__content__dates">
            {props.startDate} - {props.endDate}
          </h3>
          <p className="card__content__description">{props.description}</p>
        </div>
      </div>
      <div className="card__line"></div>
    </div>
  );
};

export default Card;
