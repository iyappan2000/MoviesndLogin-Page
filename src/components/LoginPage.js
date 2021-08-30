import React from "react";
import "./LoginPage.css";
function LoginPage() {
  return (
    <div className="Card">
      <div className="Card-Head">
        <h4>Login</h4>
        <div className="login-form">
          <input id="username" type="text" placeholder="enter the username" />
          <br />
          <input id="pwd" type="password" placeholder="enter the Password" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
