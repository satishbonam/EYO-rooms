import React, { Component } from "react";
import styles from "./Form.module.css";

export default class LogIn extends Component {
  render() {
    return (
      <form id={styles.signupform}>
        <div className="form-group">
          <div id={styles.loginHeader}> Login / Signup</div>
          <label for="exampleInputEmail1"> Please enter your phone number to continue</label>
          <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>

        <button disabled id={styles.button} type="submit" className="btn btn-primary">
          Verify Number
        </button>
        <div id={styles.formFooter}>
          Prefer to Proceed with OTP instead? <span className="text-danger">Click here</span>{" "}
        </div>
      </form>
    );
  }
}
