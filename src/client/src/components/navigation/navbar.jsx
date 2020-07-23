import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../navigation/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default class navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top border">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ padding: "0.5rem 0" }}>
            <img src="/images/logo_size.jpg" alt="EYO" style={{ height: "35px" }} />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li role="presentation" className="nav-item d-none d-md-block d-lg-block d-xl-block">
                <Link to="/" id={styles.button} className="nav-link btn  btn-sm font-weight-bold ">
                  <FontAwesomeIcon icon={faUserCircle} />
                  Login / Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
