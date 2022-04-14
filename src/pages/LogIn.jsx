import React from "react";
import "../scss/login.scss";
import { logoblack } from "../assets/images";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import Checkbox from '@mui/material/Checkbox';
import { orange } from '@mui/material/colors';

function LogIn() {
  return (
    <div className="login-wrapper">
      <Link to="/">
        <img className="login-img" src={logoblack} alt="logoblack" />
      </Link>
      <span className="login-horizontal-line"></span>
      <p>Sign in to Intmusic to continue.</p>
      <div className="api-logins">
        <a href="#" className="api-logins__elem1">
          <FacebookIcon className="icon-size" /> LOGIN WITH FACEBOOK
        </a>
        <a href="#" className="api-logins__elem2">
          <AppleIcon className="icon-size" /> SIGN IN WITH APPLE
        </a>
        <a href="#" className="api-logins__elem3">
          <GoogleIcon className="icon-size" /> LOGIN IN WITH GOOGLE
        </a>
      </div>
      <div className="login-or">
        <div className="login-horizontal-line-2"></div>
        <p>OR</p>
        <div className="login-horizontal-line-2"></div>
      </div>
      <form action="#" className="login-form">
        <label htmlFor="#">Email or username</label>
        <input type="email" className="form-control form-control-lg" />
        <label htmlFor="#">Password</label>
        <input type="password" className="form-control form-control-lg" />
        <p>Forgot your password?</p>
        <div className="login-remember-submit">
          <div>
            < Checkbox defaultChecked sx={{
              color: orange[800],
              "&.Mui-checked": {
                color: orange[800]
              }
            }} />
            <label htmlFor="#" className="remember-me">
              Remember me
            </label>
          </div>
          <input type="submit" value="TO COME IN" className="to-come-in" />
        </div>
      </form>
      <span className="login-horizontal-line-2"></span>
      <p id="no-account">Don't have an account?</p>
      <Link to="/signup" className="sign-up-link">
        SIGNING UP FOR INTMUSIC
      </Link>
    </div>
  );
}

export default LogIn;


{/* <input type="checkbox" className="check-inline" /> */}
