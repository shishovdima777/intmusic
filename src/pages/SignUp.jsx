import React from "react";
import { Link } from "react-router-dom";
import { logoblack } from "../assets/images";
import "../scss/signup.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

function SignUp() {
  return (
    <div className="signup-wrapper">
      <Link to="/">
      <img src={logoblack} alt="logo" />
      </Link>
      <h1>Register and listen for free</h1>
      <div className="api-signups">
        <a href="#" className="api-signups__elem1">
          <FacebookIcon className="icon-size" /> Register with Facebook
        </a>
        <a href="#" className="api-signups__elem2">
          <GoogleIcon className="icon-size" /> Register with Google
        </a>
      </div>
      <div className="signup-or">
        <div className="signup-horizontal-line"></div>
        <p>or</p>
        <div className="signup-horizontal-line"></div>
      </div>
      <p className="second-p">Enter your email and password</p>
      <form className="signup-form">
        <label htmlFor="#">Your e-mail address</label>
        <input
          type="email"
          className="form-control form-control-lg"
          id="exampleFormControlInput1"
          placeholder="Enter your email address"
        />
        <label htmlFor="#">Confirm email address</label>
        <input
          type="email"
          className="form-control form-control-lg"
          placeholder="Enter your email and password"
        />
        <label htmlFor="#">Pick a password</label>
        <input
          type="password"
          className="form-control form-control-lg"
          placeholder="Pick a password"
        />
        <label htmlFor="#">Your name</label>
        <input
          type="text"
          className="form-control form-control-lg name-input"
          placeholder="Enter your name"
        />
        <p>It will appear on your profile.</p>
        <label htmlFor="#">Your date of birth</label>
        <div className="signup-birth-date">
          <div>
            <label htmlFor="#">Day</label>
            <input
              type="text"
              className="form-control form-control-lg birth-date__elem1"
              placeholder="DD"
            />
          </div>
          <div>
            <label htmlFor="#">Month</label>
            <select
              className="form-select form-select-lg birth-date__elem2"
              aria-label="Default select example"
            >
              <option selected className="birth-date__elem2">
                Month
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div>
            <label htmlFor="#">Year</label>
            <input
              type="text"
              className="form-control form-control-lg birth-date__elem3"
              placeholder="YYYY"
            />
          </div>
        </div>
        <label htmlFor="#">Please enter your gender</label>
        <div className="gender-radio">
          <div className="gender-radio-elem1">
            <input type="radio" />
            <label htmlFor="#">Man</label>
          </div>
          <div className="gender-radio-elem2">
            <input type="radio" />
            <label htmlFor="#">Female</label>
          </div>
        </div>
        <div className="terms-checkboxes">
          <div className="terms-checkboxes__elem1">
        <input type="checkbox" />
        <label htmlFor="#">
          I want to receive news and offers from Intmusic.
        </label>
        </div>
        <div className="terms-checkboxes__elem2">
        <input type="checkbox" />
        <label htmlFor="#">
          I accept Intmusic's <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </label>
        </div>
        </div>
        <input type="submit" value="Register" className="sign-up-button"/>
      </form>
      <p className="login-link">
        Already have an account? <Link to="/login">Login</Link>.
      </p>
    </div>
  );
}

export default SignUp;
