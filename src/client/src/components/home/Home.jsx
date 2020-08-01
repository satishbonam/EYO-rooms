import React, { Component } from "react";
import HomeBanner from "./homeBanner/HomeBanner";
import Navbar from "../navigation/navbar";
import Footer from "../helperComponent/Footer";
import HomeContent from "./HomeContent/HomeContent";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <HomeBanner history= {this.props.history}/>
        <HomeContent />
        <Footer />
      </>
    );
  }
}
