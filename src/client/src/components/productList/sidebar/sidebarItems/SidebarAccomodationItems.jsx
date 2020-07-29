import React, { useState, useEffect } from "react";
import styles from "../../sidebar/sidebar.module.css";
import {
  hotelListingDataRequest,
  handleParams,
} from "../../../../redux/authentication/actions";
import { connect } from "react-redux";
import { build } from "search-params";

class SidebarAccomodationItems extends React.Component {
  handleRoute = () => {
    const {
      hotelListingDataRequest,
      hotelData,
      handleParams,
      params,
    } = this.props;
    hotelData && handleParams();
    setTimeout(() => {
      this.props.url.history.push(build(params));
      hotelListingDataRequest(build(params));
    }, 50);
  };
  render() {
    const {
      label,
      onClick,
      hotelData,
      hotelListingDataRequest,
      value,
    } = this.props;
    const { handleRoute } = this;
    return (
      <>
        <div>
          <label onClick={onClick}>
            <input
              id={styles.check}
              type="checkbox"
              checked={value}
              onClick={() => {
                handleRoute();
              }}
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
)(SidebarAccomodationItems);
