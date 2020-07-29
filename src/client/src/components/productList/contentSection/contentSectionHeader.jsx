import React, { Component } from "react";
import ToggleButton from "../../helperComponent/toggleButton";
import styles from "./contentSectionHeader.module.css";
import { hotelListingDataRequest } from "../../../redux/authentication/actions";
import { connect } from "react-redux";

class contentSectionHeader extends Component {
  render() {
    return (
      <div className="container border-bottom p-3">
        <div className="row  align-items-center ">
          <div className="col-6">
            <div id={styles.filterHeader}>79 EYOs in Dharmatala</div>
          </div>
          <div className="col-3 d-flex justify-content-around align-items-center" id={styles.mapFilter}>
            <span>Map View</span>
            <ToggleButton />
          </div>
          <div className="col-3 d-flex  justify-content-around align-items-center p-0">
            <span>Sort By</span>
            <div class="form-group m-0 pl-1" id={styles.filterOption}>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Popularity</option>
                <option>Guest Ratings</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>
            </div>
          </div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(contentSectionHeader);
