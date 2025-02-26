import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SigleItem = ({ _id, image, name, banner, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${_id}`}>
      <div className="single-item">
        <div className="single-item__image-icon">
          <div className="single-item__image">
            <img src={image} alt={`Imagem do Artista ${name}`} />
          </div>
          <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
        </div>
        <div className="single-item__text">
          <div className="single-item__2lines">
            <p className="single-item__title">{name}</p>
          </div>
          <p className="single-item__type">{artist ?? "Artista"}</p>
        </div>
      </div>
    </Link>
  );
};

export default SigleItem;
