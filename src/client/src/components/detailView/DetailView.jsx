import React, { Component } from "react";
import Navbar from "../navigation/navbar";
import DetailViewContent from "../detailView/DetailViewContent";
import DetailViewCarusel from "../detailView/detailViewCarusel/DetailViewCarusel";
import PriceCard from "../detailView/priceCard/PriceCard";
import DetailViewRecomandation from "./deatilViewRecomandation/DetailViewRecomandation"
export default class DetailView extends Component {
  render() {
    console.log(this.props.match.params.id)
    return (
      <>
        <Navbar />
        <DetailViewCarusel />
        <div className="container-fluid">
          <div className="row m-0 ">
            <DetailViewContent id={this.props.match.params.id}/>
            <PriceCard />
            <DetailViewRecomandation/>
          </div>
        </div>
      </>
    );
  }
}