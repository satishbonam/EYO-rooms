import React, { Component } from "react";
import ContentHeader from "../contentSection/contentSectionHeader";
import Card from "../../helperComponent/Card";
import GoogleMap from "../../helperComponent/ShowMap";
import { hotelListingDataRequest } from "../../../redux/authentication/actions";
import { connect } from "react-redux";
import {loadData} from "../../../redux/authentication/localStorage"
// import AutocompleteForm from "../../home/AutocompleteForm";
import { build } from "search-params";

class ContentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapView: false,
      divStyle: {
        maxHeight: "100vh",
      },
      cardOverflow: {
        overflowY: "auto",
        overflowX: "hidden",
      },
    };
  }

  handleMapView = () => {
    let { mapView } = this.state;
    this.setState({
      mapView: !mapView,
    });
  };

  handleMoreResults=()=>{
    const { hotelListingDataRequest, hotelData,page,history } = this.props;
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

    history.push("/listing/"+build(para));
    let location  = loadData("location")
    let lat =  location.lat.toString()
    let lon =  location.lng.toString()
    console.log("page data")
    hotelListingDataRequest({location:{lat,lon,page:Number(hotelData.page)+1},path:build(para)});
  }
  render() {
    let maxHeight;
    let { mapView } = this.state;
    let mapCardClass = mapView ? "col-5" : "col-12";
    let mapClass = mapView ? "col-7" : "d-none";
    let scroll = mapView && this.state.cardOverflow;
    let { hotelData } = this.props;
    const {handleMoreResults} = this

    return (
      <>
      <div className="col-9">
      <div>
          <button onClick={()=>{
            handleMoreResults()
          }}>
            View more results
          </button>
      </div>
        <ContentHeader handleToggle={this.handleMapView} />
        <div className="col-12 d-flex" style={{ ...this.state.divStyle }}>
          <div className={mapCardClass} style={{ ...scroll }}>
            {hotelData && hotelData.status && hotelData.data.map((ele, index) => <Card data={ele} key={index} mapView={mapView} />)}
          </div>
          <div className={mapClass}>
            {
              hotelData && hotelData.status &&
              <GoogleMap hotelData={hotelData}/>
            }
          </div>
        
        </div>
      </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  hotelData: state.auth.hotelListData,
  page:state.auth.page
});

const mapDispatchToProps = (dispatch) => ({
  hotelListingDataRequest: (payload) => dispatch(hotelListingDataRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentSection);
