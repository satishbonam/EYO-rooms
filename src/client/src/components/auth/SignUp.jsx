import React, { Component } from "react";
import styles from "./Form.module.css";

export default class SignUp extends Component {
  render() {
    return (
      <form id={styles.signupform}>
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Create a password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Enter 4 digit passcode</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>

        <button disabled id={styles.button} type="submit" className="btn btn-primary">
          signup
        </button>
      </form>
    );
  }
}
