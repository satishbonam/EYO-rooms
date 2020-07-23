import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../navigation/navbar";
import Sidebar from "./sidebar/Sidebar";
import Contentsection from "../productList/contentSection/ContentSection";

export default class ProductList extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <Navbar />
        <div className="row m-0">
          <Sidebar />
          <Contentsection />
        </div>
      </div>
    );
  }
}
