import React, { Component } from "react";
import styles from "./sidebar.module.css";
// import { Link } from "react-router-dom";
import SidebarFilterItems from "./sidebarItems/SidebarFilterItems";
import SidebarCollectionItems from "./sidebarItems/SidebarCollectionItems";
import SidebarCategoriesItems from "./sidebarItems/SidebarCategoriesItems";
import SidebarViewMoreItems from "./sidebarItems/SidebarViewMoreItmes";
import {hotelListingDataRequest} from "../../../redux/authentication/actions"
import { connect } from "react-redux";

class Sidebar extends Component {
  render() {
    return (
      <div className="col-3 border-right " id={styles.sidebar}>
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
          <h4>Collections</h4>
            
          

          <div>
            <SidebarViewMoreItems />
          </div>
        </div>

        <div className="col-12 pt-3" id={styles.filter}>
          <h4>Categories</h4>
          <SidebarCategoriesItems />
          <div>
            <SidebarViewMoreItems />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotelData :state.auth.hotelListData
});

const mapDispatchToProps = (dispatch) => ({
  hotelListingDataRequest: (payload) => dispatch(hotelListingDataRequest(payload)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
