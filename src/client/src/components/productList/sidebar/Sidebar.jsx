import React, { Component } from "react";
import styles from "./sidebar.module.css";
// import { Link } from "react-router-dom";
import SidebarFilterItems from "./sidebarItems/SidebarFilterItems";
import SidebarCollectionItems from "./sidebarItems/SidebarCollectionItems";
import SidebarCategoriesItems from "./sidebarItems/SidebarCategoriesItems";
import SidebarViewMoreItems from "./sidebarItems/SidebarViewMoreItmes";
import SidebarAccomodationItems from "./sidebarItems/SidebarAccomodationItems";
import {hotelListingDataRequest} from "../../../redux/authentication/actions"
import SidebarFacilitiesItems from "./sidebarItems/SidebarFacilitiesItems";
import { connect } from "react-redux";

class Sidebar extends Component {

  render() {
    let facility;
   const {hotelData} = this.props
       if(hotelData){
         facility = Object.keys(hotelData.data[0].amenities[0])
          console.log(facility)
       }
   
   
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
          <SidebarCollectionItems/>
          <SidebarViewMoreItems />
        <div>
            
        </div>
        </div>
        <div className="col-12 pt-3 border-bottom" id={styles.filter}>
          <h4>Accomodation Type</h4>
              

          <div>
            <SidebarAccomodationItems />
          </div>
        </div>
        <div className="col-12 pt-3 border-bottom" id={styles.filter}>
          <h4>Hotel Facilities</h4>
            {
              facility && facility.map(ele=>(
                  <SidebarFacilitiesItems facility={ele}/>
              ))
            }
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
