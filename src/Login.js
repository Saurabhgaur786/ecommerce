import React, { Component, useState, useEffect } from "react";
import "./App.css";
import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "./logic/actions/actions";

import axios from "axios";

const Login = () => {
  const history = useHistory();
  // const dispatch = useDispatch();
  const [loading, setloading] = React.useState(false);

  const [email, setemail] = React.useState("");

  const [errormsg, seterrormsg] = React.useState("");
  const [successmsg, setSuccessMsg] = React.useState("");
  const [password, setpassword] = React.useState("");

  const handleChange = (event) => {
    if (event.target.name == "email") {
      setemail(event.target.value);
      if (event.target.value.length == "") {
        seterrormsg("Enter email");
      }
    }
    if (event.target.name == "password") {
      setpassword(event.target.value);
      if (event.target.value.length == "") {
        seterrormsg("Enter password");
      }
    }

    seterrormsg("");
    // setSuccessMsg("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setloading(true);

    try {
      setloading(false);
      window.localStorage.setItem("login", true);
      history.push("/");
    } catch (err) {
      setloading(false);
      console.log("errrprr--", err.response.data.error);
      seterrormsg("something went wrong!!");
    }
  };

  return (
    <div class="login-wrap">
      <div class="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
        <label for="tab-1" class="tab">
          Sign In
        </label>
        <div class="login-form">
          <div class="sign-in-htm">
            <div class="group">
              <label for="user" class="label">
                Email
              </label>
              <input
                id="user"
                type="email"
                class="input"
                name="email"
                value={email}
                required
                onChange={handleChange}
              />
            {errormsg ? <div className="text-danger">{errormsg}</div> : null}
            </div>
            <div class="group">
              <label for="pass" class="label">
                Password
              </label>
              <input
                id="pass"
                type="password"
                class="input"
                name="password"
                value={password}
                data-type="password"
              />
              {errormsg ? <div className="text-danger">{errormsg}</div> : null}
            </div>

            <div class="group">
              <input
                type="submit"
                class="button"
                value={loading ? "Please wait..." : "SignIn"}
                onChange={handleSubmit}
              />
            </div>
            {errormsg ? <div className="text-danger">{errormsg}</div> : null}
            {/* <div class="hr"></div>
            <div class="foot-lnk">
              <a href="#forgot">Forgot Password?</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
