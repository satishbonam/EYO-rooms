import React, { Component } from "react";
import styles from "./sidebar.module.css";
// import { Link } from "react-router-dom";
import SidebarFilterItems from "./sidebarItems/SidebarFilterItems";
import SidebarCollectionItems from "./sidebarItems/SidebarCollectionItems";
import SidebarCategoriesItems from "./sidebarItems/SidebarCategoriesItems";
import SidebarViewMoreItems from "./sidebarItems/SidebarViewMoreItmes";
import SidebarAccomodationItems from "./sidebarItems/SidebarAccomodationItems";
import { hotelListingDataRequest } from "../../../redux/authentication/actions";
import SidebarFacilitiesItems from "./sidebarItems/SidebarFacilitiesItems";
import { connect } from "react-redux";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  handleRoute = (key, value,type) => {
    console.log(key,value,type)
    if(type){
      
      const { url, hotelListingDataRequest } = this.props;
      let urll = url.location.pathname;
      let new_url = new URLSearchParams(urll);
      new_url.delete(key, value);
      var str = new_url.toString().split("%2F=&");
      if (str.length > 1) {
        str = str[1];
      } else {
        str = str[0].split("%2F");
        str = str[1];
      }
      url.history.push(str);
      hotelListingDataRequest(str);
      return
    }
    const { url, hotelListingDataRequest } = this.props;
    console.log(url)
    let urll = url.location.pathname;
    let new_url = new URLSearchParams(urll);
    new_url.append(key, value);
    var str = new_url.toString().split("%2F=&");
    if (str.length > 1) {
      str = str[1];
    } else {
      str = str[0].split("%2F");
      str = str[1];
    }
    url.history.push(str);
    hotelListingDataRequest(str);
  };
  render() {
    let collections,amenities,category,accomodation;
    const { hotelData } = this.props;
    const { handleRoute } = this;
    if (hotelData) {
      collections = Object.keys(hotelData.data[0].collections);
      console.log(collections);

      amenities = Object.keys(hotelData.data[0].amenities[0]);
      console.log(amenities);

      accomodation = Object.keys(hotelData.data[0].accomodation_type);
      console.log(accomodation);

      category = hotelData.data[0].category
      console.log(category);
      
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
        
          <SidebarCollectionItems
          handleRoute = {handleRoute}
        />
          
          <div>
            <SidebarViewMoreItems
              
             />
          </div>
        </div>
        <div className="col-12 pt-3 border-bottom" id={styles.filter}>
          <h4>Accomodation Type</h4>

          <div>
            <SidebarAccomodationItems handleRoute={handleRoute}/>
            {/* {accomodation &&
            accomodation.map((item) => {
              return (
                <SidebarAccomodationItems
                  key={item}
                  label={item.split("_").join(" ")}
                  onClick={() => handleRoute("accomodation_type", item)}
                />
              );
            })} */}
          </div>
        </div>
        <div className="col-12 pt-3 border-bottom" id={styles.filter}>
          <h4>Hotel Facilities</h4>
         
          {amenities &&
            amenities.map((item) => {
              return (
                <SidebarFacilitiesItems
                  key={item}
                  label={item.split("_").join(" ")}
                  onClick={() => handleRoute("amenities", item)}
                />
              );
            })}
        </div>

        <div className="col-12 pt-3" id={styles.filter}>
          <h4>Categories</h4>
          {accomodation &&
            accomodation.map((item) => {
              return (
                <SidebarCategoriesItems
                  key={item}
                  label={item.split("_").join(" ")}
                  onClick={() => handleRoute("category", item)}
                />
              );
            })}
          <div>
            <SidebarViewMoreItems />
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
  hotelListingDataRequest: (payload) =>
    dispatch(hotelListingDataRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
