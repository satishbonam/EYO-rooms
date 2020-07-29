import React from "react";
import styles from "../../sidebar/sidebar.module.css";
import {
  hotelListingDataRequest,
  handleParams,
} from "../../../../redux/authentication/actions";
import { connect } from "react-redux";

function SidebarFilterItems(props) {
  // console.log(props)
  return (
    <>
      <div id={styles.tag}>Howrah Railway station </div>
      <div id={styles.tag}>Dum Dum </div>
      <div id={styles.tag}>Dharamtala </div>
      <div id={styles.tag}>Dum Dum </div>
      <div id={styles.tag}>Dharamtala </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  hotelData: state.auth.hotelListData,
});

const mapDispatchToProps = (dispatch) => ({
  hotelListingDataRequest: (payload) =>
    dispatch(hotelListingDataRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarFilterItems);
