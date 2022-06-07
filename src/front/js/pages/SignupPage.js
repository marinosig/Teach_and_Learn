import React from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";

export const SignupPage = () => {
  return (
    <>
      <div className="container">
        <div className="col-md-5 mx-auto">
          <div className="myform">
            <div className="logo mb-3">
              <div className="col-md-12 text-center">
                <h1>Signup</h1>
              </div>
            </div>
            <form action="#" name="registration" />
            <div className="form-group">
              <label for="InputEmail1">User Name</label>
              <input
                type="text"
                name="Username"
                className="form-control"
                id="Username"
                aria-describedby="emailHelp"
                placeholder="Enter yourname"
              />
            </div>

            <div className="form-group">
              <label for="InputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="InputEmail1">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                aria-describedby="email"
                placeholder="Enter Password"
              />
            </div>
            <div class="col-md-12 text-center mb-3">
              <button
                type="submit"
                class=" btn btn-block mybtn btn-primary tx-tfm"
              >
                submit
              </button>
            </div>
            <div class="col-md-12 ">
              <div class="form-group">
                <p class="text-center">
                  <a href="src/front/js/pages/SignupPage.js" id="signin">
                    Already have an account?
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
