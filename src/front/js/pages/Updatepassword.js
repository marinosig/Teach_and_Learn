import React from "react";
import { Link } from "react-router-dom";

export const UpdatePassword = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div id="first">
              <div className="myform">
                <div className="logo mb-3">
                  <div className="col-md-12 text-center">
                    <h3>
                      <i className="fa fa-user fa-4x"></i>
                    </h3>
                    <h1>UpdatePassword</h1>
                  </div>
                </div>
                <form>
                  <div className="form-group">
                    <label htmlFor="InputPassword">NewPassword</label>
                    <input
                      type="NewPassword"
                      name="NewPassword"
                      id="NewPassword"
                      className="form-control"
                      aria-describedby="Password"
                      placeholder="Enter Password"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputPassword">RetypePassword</label>
                    <input
                      type="RetypePassword"
                      name="RetypePassword"
                      id="RetyprPassword"
                      className="form-control"
                      aria-describedby="RetypePassword"
                      placeholder="Retype Password"
                    />
                  </div>
                  <div className="col-md-12 text-center ">
                    <button
                      type="submit"
                      className=" btn btn-block mybtn btn-primary tx-tfm"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
