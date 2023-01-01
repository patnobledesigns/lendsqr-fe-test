import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmailLogin from "./components/EmailLogin";



const Login = () => {


  return (
    <main className="login grid">
      <div className="login__bgContainer container">
        <img className="login__bgContainer-logo" src="/assets/svg/logo.svg" alt="logo" />
        <img className="login__bgContainer-img" src="/assets/images/sign-in.png" alt="image" />
      </div>
      <div className="login__container container">
        <img className="login__container-img" src="/assets/svg/logo.svg" alt="logo" />

        <div className="login__content ">
          <h1 className="login__content-title">Welcome!</h1>
          <p className="login__content-subtitle">Enter details to login.</p>
        </div>
        <EmailLogin />
      </div>
    </main>
  );
};

export default Login;
