import React from "react";

export const Lessoncard = () => {
  return (
    <div className="col">
    <div className="card"> {/* styles={"width: 18rem;"}> */}
    {/* <img src={avatar} className="card-img-top" alt="..."/> */}
      <div className="card-body text-center">
        <h5 className="card-title pb-2 border-bottom border-warning">Title</h5>
        <h6 className="card-subtitle py-2 text-muted">Subject</h6>
        <p className="card-text bg-light p-3 rounded-3">
          Summary
        </p>
        <a href="#" className="card-link">
          Link to Lesson
        </a>
      </div>
    </div>
    </div>
  );
};
