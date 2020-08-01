import React, { Component } from "react";
import styles from "./sidebar.module.css";
// import { Link } from "react-router-dom";
import SidebarFilterItems from "./sidebarItems/SidebarFilterItems";
import SidebarCollectionItems from "./sidebarItems/SidebarCollectionItems";
import SidebarCategoriesItems from "./sidebarItems/SidebarCategoriesItems";
import SidebarViewMoreItems from "./sidebarItems/SidebarViewMoreItmes";
import SidebarAccomodationItems from "./sidebarItems/SidebarAccomodationItems";
import SidebarCheckinItems from "./sidebarItems/SidebarCheckinItems";
import { hotelListingDataRequest, handleFilterAmenities, handleFilterAccomodation, handleFilterCategory, handleFilterCheckin, handleFilterCollection } from "../../../redux/authentication/actions";
import SidebarFacilitiesItems from "./sidebarItems/SidebarFacilitiesItems";
import { connect } from "react-redux";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleSidebar: {
        maxHeight: "120vh",
        overflow: "hidden auto",
      },
    };
  }

  render() {
    let collections, amenities, category, accomodation;
    const { hotelData, handleFilterAmenities, url, handleFilterAccomodation, handleFilterCategory, handleFilterCheckin, handleFilterCollection } = this.props;
    const { handleRoute } = this;
    const { mapView } = this.props;
    let sideBarOverFlow = mapView && this.state.styleSidebar;
    console.log(mapView, "mapView");

    return (
      <div className="col-3 border-right " id={styles.sidebar} style={{ ...sideBarOverFlow }}>
        <div className="col-12 border-bottom " id={styles.filter}>
          <div id={styles.filterHeading}>Filters</div>
          <h4>Popular locations in Kolkata, West Bengal, India</h4>
          <input type="text" placeholder="Search..." />
          <div className="mb-2" id={styles.tagWrapper}>
            <SidebarFilterItems />
          </div>
          <SidebarViewMoreItems />
        </div>

        <div className="col-12 pt-3 border-bottom" id={styles.filter}>
          <h4>Categories</h4>

          {hotelData &&
            hotelData.status &&
            hotelData.filters.category.map((item) => {
              return <SidebarCategoriesItems url={url} key={item.label} label={item.label.split("_").join(" ")} value={item.status} onClick={() => handleFilterCategory(item)} />;
            })}
        </div>
        <div className="col-12 pt-3 border-bottom" id={styles.filter}>
          <h4>Hotel Facilities</h4>

          {hotelData &&
            hotelData.status &&
            hotelData.filters.accomodation_type.map((item) => {
              return <SidebarAccomodationItems url={url} key={item.label} label={item.label.split("_").join(" ")} value={item.status} onClick={() => handleFilterAccomodation(item)} />;
            })}
        </div>
        <div className="col-12 pt-3 border-bottom" id={styles.filter}>
          <h4>Accomodation Type</h4>

          {hotelData &&
            hotelData.status &&
            hotelData.filters.amenities.map((item) => {
              return <SidebarFacilitiesItems url={url} key={item.label} label={item.label.split("_").join(" ")} value={item.status} onClick={() => handleFilterAmenities(item)} />;
            })}
        </div>

        <div className="col-12 pt-3 border-bottom" id={styles.filter}>
          <h4>Hotel Facilities</h4>

          {hotelData &&
            hotelData.status &&
            hotelData.filters.collections.map((item) => {
              return <SidebarCollectionItems url={url} key={item.label} label={item.label.split("_").join(" ")} value={item.status} onClick={() => handleFilterCollection(item)} />;
            })}
        </div>
        <div className="col-12 pt-3 border-bottom" id={styles.filter}>
          <h4>Check-in features</h4>

          {hotelData &&
            hotelData.status &&
            hotelData.filters.checkin_features.map((item) => {
              return <SidebarCheckinItems url={url} key={item.label} label={item.label.split("_").join(" ")} value={item.status} onClick={() => handleFilterCheckin(item)} />;
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotelData: state.auth.hotelListData,
});

const mapDispatchToProps = (dispatch) => ({
  hotelListingDataRequest: (payload) => dispatch(hotelListingDataRequest(payload)),
  handleFilterAmenities: (payload) => dispatch(handleFilterAmenities(payload)),
  handleFilterCollection: (payload) => dispatch(handleFilterCollection(payload)),
  handleFilterCheckin: (payload) => dispatch(handleFilterCheckin(payload)),
  handleFilterCategory: (payload) => dispatch(handleFilterCategory(payload)),
  handleFilterAccomodation: (payload) => dispatch(handleFilterAccomodation(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
