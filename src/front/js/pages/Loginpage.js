import React from "react";
import "../../styles/style.css";
import Registration from "../component/registeration.js";

export function LoginPage() {
  return (
    <>
      <div className="login">
        <div className="outer">
          <div className="inner">
            <Registration />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
