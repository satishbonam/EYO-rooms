import React, { Component } from "react";
import styles from "./Form.module.css";

export default class OtpForm extends Component {
  render() {
    return (
      <form id={styles.signupform}>
        <div className="form-group">
          <div id={styles.loginHeader}>Share OTP</div>
          <label>We have sent a temporary passcode to you at +91-8340663803</label>
          <label className="text-danger">Use a different number</label>
          <div id={styles.codeHeader}>Enter your 4-digit passcode</div>
          <input type="number" id={styles.otp} maxLength="1" />
          <input type="number" id={styles.otp} maxLength="1" />
          <input type="number" id={styles.otp} maxLength="1" />
          <input type="number" id={styles.otp} maxLength="1" />
        </div>

        <button disabled id={styles.button} type="submit" className="btn btn-primary">
          Submit
        </button>
        <div id={styles.formFooter}>
          <span className="text-danger">Resend Code</span>{" "}
        </div>
      </form>
    );
  }
}
