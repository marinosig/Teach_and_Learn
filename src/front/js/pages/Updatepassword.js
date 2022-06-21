import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export const UpdatePassword = () => {
  const { id } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitPassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      return alert("Your password is not metch with confirm password.");
    }

    const requestData = {
      id: id,
      password: newPassword,
    };

    console.log(requestData);
  };

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
                      <i class="fa fa-solid fa-key fa-3x"></i>
                    </h3>
                    <h1>Update Password</h1>
                  </div>
                </div>
                <form onSubmit={submitPassword} action="#" method="POST">
                  <div className="form-group">
                    <label htmlFor="InputPassword">NewPassword</label>
                    <input
                      type="password"
                      name="NewPassword"
                      id="NewPassword"
                      className="form-control"
                      aria-describedby="Password"
                      placeholder="Enter Password"
                      onChange={(e) => setNewPassword(e.target.value)}
                      value={newPassword}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputPassword">RetypePassword</label>
                    <input
                      type="password"
                      name="RetypePassword"
                      id="RetyprPassword"
                      className="form-control"
                      aria-describedby="RetypePassword"
                      placeholder="Retype Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    />
                  </div>
                  <div className="col-md-12 text-center mt-3">
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
