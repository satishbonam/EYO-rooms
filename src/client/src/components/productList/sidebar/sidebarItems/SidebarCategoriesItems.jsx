import React, { useState, useEffect } from "react";
import styles from "../../sidebar/sidebar.module.css";
import {
  hotelListingDataRequest,
  handleParams,
} from "../../../../redux/authentication/actions";
import { connect } from "react-redux";
import { build } from "search-params";
import {loadData} from "../../../../redux/authentication/localStorage"

class SidebarCategoriesItems extends React.Component {
  componentDidUpdate(prevProps) {
    const { hotelListingDataRequest, hotelData } = this.props;
    var para = {};
    hotelData &&
      hotelData.filters.category.forEach((item) => {
        if (item.status && para.category) {
          para["category"].push(item.label);
        } else if (item.status) {
          para["category"] = [item.label];
        }
      });
    hotelData &&
      hotelData.filters.collections.forEach((item) => {
        if (item.status && para.collections) {
          para["collections"].push(item.label);
        } else if (item.status) {
          para["collections"] = [item.label];
        }
      });
    hotelData &&
      hotelData.filters.accomodation_type.forEach((item) => {
        if (item.status && para.accomodation_type) {
          para["accomodation_type"].push(item.label);
        } else if (item.status) {
          para["accomodation_type"] = [item.label];
        }
      });
    hotelData &&
      hotelData.filters.amenities.forEach((item) => {
        if (item.status && para.amenities) {
          para["amenities"].push(item.label);
        } else if (item.status) {
          para["amenities"] = [item.label];
        }
      });
    hotelData &&
      hotelData.filters.checkin_features.forEach((item) => {
        if (item.status && para.checkin_features) {
          para["checkin_features"].push(item.label);
        } else if (item.status) {
          para["checkin_features"] = [item.label];
        }
      });
    if (prevProps.value !== this.props.value) {
      this.props.url.history.push("/listing/"+build(para));
      let location  = loadData("location")
      let lat =  location.lat.toString()
      let lon =  location.lng.toString()
      hotelListingDataRequest({location:{lat,lon},path:build(para)});
    }
  }
  render() {
    const {
      label,
      onClick,
      hotelData,
      hotelListingDataRequest,
      value,
    } = this.props;
    return (
      <>
        <div>
          <label onClick={onClick}>
            <input
              id={styles.check}
              type="checkbox"
              checked={value}
              aria-label="Checkbox for following text input"
            />
            <span>{label}</span>
          </label>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  hotelData: state.auth.hotelListData,
  params: state.auth.params,
});

const mapDispatchToProps = (dispatch) => ({
  hotelListingDataRequest: (payload) =>
    dispatch(hotelListingDataRequest(payload)),
  handleParams: (payload) => dispatch(handleParams(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarCategoriesItems);
