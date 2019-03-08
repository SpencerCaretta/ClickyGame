import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card" data-id={props.id}
    onClick={
      () => props.handleUpdate(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default CharacterCard;
