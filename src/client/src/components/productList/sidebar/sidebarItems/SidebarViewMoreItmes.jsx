import React from 'react'
import { Link } from "react-router-dom";
import {hotelListingDataRequest} from "../../../../redux/authentication/actions"
import { connect } from "react-redux";

function SidebarViewMore() {
    return (
        <Link className="text-danger" to="/">
        + View More
      </Link>
    )
}



const mapStateToProps = (state) => ({
  hotelData :state.auth.hotelListData
});

const mapDispatchToProps = (dispatch) => ({
  hotelListingDataRequest: (payload) => dispatch(hotelListingDataRequest(payload)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarViewMore);