import React from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";

export const ForgetPassword = () => {
  const onTypeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    send("User ID")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
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
                      <i className="fa fa-lock fa-2x"></i>
                    </h3>
                    <h2 className="text-center">Forgot Password?</h2>
                    <p>You can reset your password here.</p>
                    <div className="panel-body">
                      <form
                        id="register-form"
                        role="form"
                        autocomplete="off"
                        className="form"
                        method="post"
                      >
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="glyphicon glyphicon-envelope color-blue"></i>
                            </span>
                            <input
                              id="Email"
                              name="Email"
                              placeholder="Email address"
                              value={email}
                              onChange={onTypeEmail}
                              className="form-control"
                              type="Email"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            id="Updatepassword"
                            name="recover-submit"
                            className="btn btn-lg btn-primary btn-block"
                            type="submit"
                            value={ResetPassword}
                            onChange={onSubmit}
                          >
                            Reset Password
                          </label>
                        </div>

                        <input
                          type="hidden"
                          className="hide"
                          name="token"
                          id="token"
                          value=""
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
