import React from "react";
import "../../styles/index.css";
import avatar from "../../img/avatar.png";
import { Lessoncard } from "../component/lessoncard";
import { useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import PropTypes from "prop-types";

export const Teacherpage = () => {
  const { store, actions } = useContext(Context);

  // const listOfTeachers = store?.teachers?.[0]?.teachers.map((teacher, indexT) => {
    
  //   return (
  //     <div key={indexT}>
  //         {teacher.id}
  //     </div>
  //   )
  // })

  const listOfLessons = store?.lessons?.[0]?.lessons.map((lesson, index) => {
    return (
      <div key={index}>
        <Lessoncard title={lesson.title}
          subject={lesson.subject}
          summary={lesson.summary} />
      </div>
    )
  })

  return (
    <div className="row py-5 px-4">
      <div className="col-md-8 mx-auto">
        <div className="bg-dark rounded-3">
          <div className="d-flex flex-wrap">
            <div>
              <img
                src={avatar}
                width="200"
                className="rounded m-5 img-thumbnail"
              />
            </div>
            <div className="m-auto text-white">
              <h2 className="p-3 text-warning text-center flex-wrap">
                {/* {listOfTeachers} */} Son Goku
              </h2>
              <h4 className="p-2 text-center border-bottom border-warning">
                Subjects:
              </h4>
              <ul className="mx-auto text-center border-start fs-5 list-unstyled">
                <li>Mathmatics</li>
                <li>Dragon ball</li>
                <li>Manga 101</li>
              </ul>
            </div>
          </div>
          <div className="px-5 py-3 m-auto">
            <h3 className="ms-5 mb-3 text-warning">Fun Info</h3>
            <div className="p-4 rounded shadow-sm bg-light d-flex">
              <p className="font-italic mb-0 flex-fill">
                Anything the teacher wants to add.
              </p>
            </div>
          </div>
          {/* Feature that can be added... in time  FOLLOWERS*/}
          {/* <div className="bg-dark px-4 d-flex justify-content-end text-center">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="mb-0 d-block text-warning">4</h5>
                  <small className="text-warning fw-bold">
                    <i className="fas fa-user mr-1"></i> Followers
                  </small>
                </li>
              </ul>
            </div> */}

          <div className="px-5 py-3 mt-3 m-auto">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="ms-5 mb-3 text-warning">Lessons available</h3>
              {/* another Feature if classes are too many SHOW ALL */}
              {/* <a href="#" className="btn btn-link text-white">
                  Show all
                </a> */}
            </div>
            <div className="row row-cols-md-2 row-cols-lg-3 row-cols-xxlg-4 g-2 g-md-4 g-xxlg-5">
              {listOfLessons}
            </div>
          </div>
          <div className="bg-dark pt-1 pe-5 pb-5 d-flex justify-content-end text-center rounded-3">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <h5 className="mb-0 d-block text-warning"> "hardcoded" 7</h5>
                <small className="text-warning fw-bold">
                  <i className="fas fa-book mr-1"></i> Lessons
                </small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
