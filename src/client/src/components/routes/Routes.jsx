import React, { Component } from "react";
import { Route } from "react-router-dom";
// import Home from "../components/Home";
import AuthBannerLogin from "../auth/AuthBannerLogin";
import ProductList from "../productList/ProductList";
import AuthBannerLoginOtp from "../auth/AuthBannerLoginOtp";
import AuthBannerSignUp from "../auth/AuthBannerSignUp";
import AuthBannerOtpVerify from "../auth/AuthBannerOtpVerify";

export default class Routes extends Component {
  render() {
    return (
      <>
        <Route path="/" component={ProductList} />
        <Route path="/login" exact component={AuthBannerLogin} />
        <Route path="/loginotp" component={AuthBannerLoginOtp} />
        <Route path="/otpverify" component={AuthBannerOtpVerify} />
        <Route path="/signup" component={AuthBannerSignUp} />
      </>
    );
  }
}
