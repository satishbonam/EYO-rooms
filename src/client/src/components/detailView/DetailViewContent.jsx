import React, { Component } from "react";
import DetailViewDescription from "../detailView/detailViewDescription/DetailViewDescription";
import DetailViewAmenities from "../detailView/detailViewAmenities/DetailViewAmenities";
import DetailViewYourRoom from "./DetailViewYourRoom/DetailViewYourRoom";
import DetailViewMeal from "./DetailViewMeal/DetailViewMeal";
import DetailViewRating from "./detailViewRating/DetailViewRating";

export default class DetailViewContent extends Component {
  render() {
    return (
      <>
        <div className="col-7  mt-4">
          <DetailViewDescription />
          <DetailViewAmenities />
          <DetailViewYourRoom />
          <DetailViewMeal />
          <DetailViewRating />
        </div>
      </>
    );
  }
}
