import React, { Component } from "react";
import Navbar from "../navigation/navbar";
import DetailViewContent from "../detailView/DetailViewContent";
import DetailViewCarusel from "../detailView/detailViewCarusel/DetailViewCarusel";
import PriceCard from "../detailView/priceCard/PriceCard";

export default class DetailView extends Component {
  render() {
    return (
      <>
        <Navbar />
        <DetailViewCarusel />
        <div className="container-fluid">
          <div className="row m-0 " style={{ display: "unset" }}>
            <DetailViewContent />
            <PriceCard />
          </div>
        </div>
      </>
    );
  }
}
