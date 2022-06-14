import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";
import { BASE_URL } from "../store/flux";
import { useHistory } from "react-router-dom";

export const LoginPage = ({ setToken }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onTypeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const onTypePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const onSubmitClicked = (e) => {
    e.preventDefault();
    if (email && password) {
      // fetch
      onFetchLogIn(email, password);
    } else {
      //all
      alert("incorrect details ");
    }
  };

  const onFetchLogIn = (email, password) => {
    // fetch
    const post = {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch(BASE_URL + "/api/login", post)
      .then((resp) => resp.json())
      .then((dataUsers) => {
        console.log(dataUsers);
        if (dataUsers?.access_token) {
          localStorage.setItem("token", dataUsers.access_token);
          setToken(dataUsers.access_token);
          history.push("/landingpage");
        }
      })
      .catch((error) => {
        console.log(error);
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
                      <i className="fa fa-user fa-4x"></i>
                    </h3>
                    <h1>Login</h1>
                  </div>
                </div>
                <form>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="Email"
                      name="Email"
                      className="form-control"
                      id="Email"
                      aria-describedby="Email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={onTypeEmail}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="Password"
                      name="Password"
                      id="Password"
                      className="form-control"
                      aria-describedby="Password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={onTypePassword}
                    />
                  </div>
                  <div className="col-md-12 text-center ">
                    <button
                      type="submit"
                      className=" btn btn-block mybtn btn-primary tx-tfm"
                      onClick={onSubmitClicked}
                    >
                      Continue
                    </button>
                  </div>
                  <div className="col-md-12 ">
                    <div className="login-or">
                      <hr className="hr-or" />
                      <span className="span-or">or</span>
                    </div>
                  </div>
                  {/* <div className="col-md-12 mb-3">
                    <p className="text-center">
                       <a href="javascript:void();" className="google btn mybtn"> 
                        <i className="fa fa-google-plus"></i> Signup using
                        Google
                      </a>
                    </p>
                  </div> */}
                  <div className="form-group">
                    <p className="text-center">
                      Don't have account?{" "}
                      <Link to="/SignupPage">Sign up here</Link>
                    </p>
                  </div>
                  <div className="form-group">
                    <p className="text-center">
                      <Link to="/ForgetPassword">Forget Password</Link>
                    </p>
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
