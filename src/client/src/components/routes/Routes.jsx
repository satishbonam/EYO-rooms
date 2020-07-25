import React, { Component } from "react";
import { Route } from "react-router-dom";
// import Home from "../components/Home";
import AuthBanner from "../auth/AuthBanner";
import ProductList from "../productList/ProductList";

export default class Routes extends Component {
  render() {
    return (
      <>
        <Route path="/" component={ProductList} />
        <Route path="/login" component={AuthBanner} />
      </>
    );
  }
}
