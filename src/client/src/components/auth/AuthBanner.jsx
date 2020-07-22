import React, { Component } from "react";
import SignUp from "../auth/SignUp";
import styles from "./AuthBanner.module.css";
import { Link } from "react-router-dom";

export default class AuthBanner extends Component {
  render() {
    return (
      <div className="row m-0 ">
        <div className=" col-12 p-0" id={styles.overview}>
          <nav className="navbar navbar-expand-lg navbar-light" id={styles.navContainer}>
            <Link className="navbar-brand text-white " href="#">
              EYO
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link text-white" id={styles.subNav} href="#">
                    Hotels and homes across 800 cities, 24+ countries<span className="sr-only">(current)</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center ">
              <div className="col-5">
                <div>There’s Link smarter way to OYO around</div>
                <div>Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners.</div>
              </div>
              <div className="col-5">
                <SignUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
