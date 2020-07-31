import React, { Component } from "react";
import ContentHeader from "../contentSection/contentSectionHeader";
import Card from "../../helperComponent/Card";
import GoogleMap from "../../helperComponent/ShowMap";
import { hotelListingDataRequest } from "../../../redux/authentication/actions";
import { connect } from "react-redux";
// import AutocompleteForm from "../../home/AutocompleteForm";

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

  render() {
    let maxHeight;
    let { mapView } = this.state;
    let mapCardClass = mapView ? "col-5" : "col-12";
    let mapClass = mapView ? "col-7" : "d-none";
    let scroll = mapView && this.state.cardOverflow;
    let { hotelData } = this.props;

    return (
      <div className="col-9">
        <ContentHeader handleToggle={this.handleMapView} />
        <div className="col-12 d-flex" style={{ ...this.state.divStyle }}>
          <div className={mapCardClass} style={{ ...scroll }}>
            {hotelData && hotelData.status && hotelData.data.map((ele, index) => <Card data={ele} key={index} mapView={mapView} />)}
          </div>
          <div className={mapClass}>
            <GoogleMap />
          </div>
        </div>
        {/* <AutocompleteForm/> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(ContentSection);
