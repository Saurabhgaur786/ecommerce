import React, { Component, useState, useEffect } from "react";
import "./App.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./logic/actions/actions";

import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [loading, setloading] = React.useState(false);

  const [email, setemail] = React.useState("");

  const [errormsg, seterrormsg] = React.useState("");
  const [emailmsg, setemailMsg] = React.useState("");
  const [passmsg, setpassMsg] = React.useState("");
  const [successmsg, setSuccessMsg] = React.useState("");
  const [password, setpassword] = React.useState("");

  const handleChange = (event) => {
    if (event.target.name == "email") {
      console.log("here -", event.target.value);
      setemail(event.target.value);
      if (event.target.value.length == "") {
        setemailMsg("Enter email");
      } else {
        setemailMsg("");
      }
    }
    if (event.target.name == "password") {
      setpassword(event.target.value);
      if (event.target.value == "") {
        setpassMsg("Enter password");
      } else if (password.length < 7) {
        setpassMsg("Please enter min 8 chars");
      } else {
        setpassMsg("");
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setloading(true);
    try {
      setTimeout(function () {
        if (!passmsg && !errormsg) {
          localStorage.setItem("login", true);
          dispatch(login({ username: "" }));
          history.push("/");
        } else {
          setloading(false);
          seterrormsg("something went wrong!!");
        }
      }, 2000);
    } catch (err) {
      setloading(false);
      console.log("errrprr--", err.response.data.error);
      seterrormsg("something went wrong!!");
    }
  };

  return (
    <div className="login-wrap">
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" />
        <label htmlFor="tab-1" className="tab">
          Sign In
        </label>
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label htmlFor="user" className="label">
                Email
              </label>
              <input
                id="user"
                type="email"
                className="input"
                name="email"
                value={email}
                onChange={handleChange}
              />
              {emailmsg ? <div className="text-danger">{emailmsg}</div> : null}
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                name="password"
                value={password}
                onChange={handleChange}
              />
              {passmsg ? <div className="text-danger">{passmsg}</div> : null}
            </div>

            <div className="group">
              <input
                type="button"
                className="button"
                value={loading ? "Please wait..." : "SignIn"}
                onClick={handleSubmit}
              />
            </div>
            {errormsg ? (
              <div className="text-danger" style={{ textAlign: "center" }}>
                {errormsg}
              </div>
            ) : null}
            {/* <div className="hr"></div>
            <div className="foot-lnk">
              <a href="#forgot">Forgot Password?</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
