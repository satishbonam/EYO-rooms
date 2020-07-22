import React, { Component } from "react";
import { Route } from "react-router-dom";
// import Home from "../components/Home";
import AuthBanner from "../auth/AuthBanner";

export default class Routes extends Component {
  render() {
    return (
      <>
        <Route path="/" component={AuthBanner} />
      </>
    );
  }
}
