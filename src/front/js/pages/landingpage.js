import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.css";

export const LandingPage = () => {
  const { store, actions } = useContext(Context);
  console.log(store.users);
  
  const showUsers = store?.users?.[0]?.users.map((item, index) => {
    return (
      <div className="card" style={{ width: "17rem" }} key={item.id}>
          <div className="card-body">
            <h4 className="card-title">Email: {item.email}</h4>
            <br></br>
            <p className="card-title">password: {item.password}</p>
            <p className="card-title">userd_Id{item.id}</p>
            <a href="" className="btn btn-light btn-sm">Go to the Teachers Lounge </a>
          </div>
        </div>
        )  
  })
  return (
		<div className="container-fluid">
			<div><h3 style={{ color: "#b51616" }}> USERS </h3>
			<div className="d-flex align-content-start flex-wrap ">
			{showUsers}
			</div>
			</div>
			</div>
      )  
};
