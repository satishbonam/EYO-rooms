import React, { Component } from "react";
import styles from "./SignUpForm.module.css";

export default class SignUp extends Component {
  render() {
    return (
      <form id={styles.signupform}>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Create a password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Enter 4 digit passcode</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>

        <button disabled id={styles.button} type="submit" class="btn btn-primary">
          signup
        </button>
      </form>
    );
  }
}
