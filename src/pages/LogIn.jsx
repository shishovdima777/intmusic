import React from "react";
import "../scss/login.scss";
import { logoblack } from "../assets/images";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

function LogIn() {
  return (
    <div className="login-wrapper">
      <img className="login-img" src={logoblack} alt="logoblack" />
      <span className="login-horizontal-line"></span>
      <p>Sign in to Intmusic to continue.</p>
      <div className="api-logins">
        <div className="api-logins__elem1">
        <a href="#">
          <FacebookIcon className="icon-size" />
        </a>
        <a href="#">LOGIN WITH FACEBOOK</a>
        </div>
        <div className="api-logins__elem2">
        <a href="#">
          <AppleIcon className="icon-size" />
        </a>
        <a href="#">SIGN IN WITH APPLE</a>
        </div>
        <div className="api-logins__elem3">
        <a href="#">
          <GoogleIcon className="icon-size" />
        </a>
        <a href="#">LOGIN IN WITH GOOGLE</a>
        </div>
      </div>
      <div className="login-or">
        <span className="login-horizontal-line-2"></span>
        <p>OR</p>
        <span className="login-horizontal-line-2"></span>
      </div>
      <form action="#">
        <label htmlFor="#">Email or username</label>
        <input type="email" />
        <label htmlFor="#">Password</label>
        <input type="password" />
        <p>Forgot your password?</p>
        <label htmlFor="#">Remember me</label>
        <input type="checkbox" />
        <input type="submit" value="submit" />
      </form>
      <span></span>
      <p>Don't have an account?</p>
      <a href="#">SIGNING UP FOR INTMUSIC</a>
    </div>
  );
}

export default LogIn;
