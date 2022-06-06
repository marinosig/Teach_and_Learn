import React from "react";
import avatar from "../../img/avatar.png";

export const Card = () => {
  return (
    <div className="col">
    <div className="card" styles={"width: 18rem;"}>
    <img src={avatar} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Professor Name</h5>
        <h6 className="card-subtitle mb-2 text-muted">Subjects teached</h6>
        <p className="card-text">
          Fun information about the Teacher
        </p>
        <a href="#" className="card-link">
          Professor's Catlogue/Page
        </a>
      </div>
    </div>
    </div>
  );
};
