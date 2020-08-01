import React, { Component } from "react";
import ToggleButton from "../../helperComponent/toggleButton";
import styles from "./contentSectionHeader.module.css";
import { hotelListingDataRequest } from "../../../redux/authentication/actions";
import { connect } from "react-redux";

import Skelton from "../../helperComponent/SkeltonListing";
import { loadData } from "../../../redux/authentication/localStorage";

class contentSectionHeader extends Component {
  render() {
    console.log(this.props, "prosp in header");
    let { handleToggle, hotelData } = this.props;
    if (hotelData) {
      let { total_results } = hotelData;
      let address = loadData("address");
      return (
        <div className="container border-bottom p-3">
          <div className="row  align-items-center ">
            <div className="col-6">
              <div id={styles.filterHeader}>
                {total_results} EYOs {address}{" "}
              </div>
            </div>
            <div className="col-3 d-flex justify-content-around align-items-center" id={styles.mapFilter}>
              <span>Map View</span>
              <ToggleButton handleToggle={handleToggle} />
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
    } else {
      return <Skelton />;
    }
  }
}

const mapStateToProps = (state) => ({
  hotelData: state.auth.hotelListData,
});

const mapDispatchToProps = (dispatch) => ({
  hotelListingDataRequest: (payload) => dispatch(hotelListingDataRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(contentSectionHeader);
