import React, { Component } from "react";
import ContentHeader from "../contentSection/contentSectionHeader";
import Card from "../../helperComponent/Card";

export default class ContentSection extends Component {
  render() {
    return (
      <div className="col-9">
        <ContentHeader />
        <Card />
      </div>
    );
  }
}
