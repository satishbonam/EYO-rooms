import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../navigation/navbar";
import Sidebar from "./sidebar/Sidebar";
import Contentsection from "../productList/contentSection/ContentSection";
import { hotelListingDataRequest } from "../../redux/authentication/actions";
import { connect } from "react-redux";
import { loadData } from "../../redux/authentication/localStorage";
import Footer from "../helperComponent/Footer";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapView: false,
    };
  }
  componentDidMount() {
    const { hotelListingDataRequest } = this.props;

    let x = document.location.pathname.split("/");
    let path = x.slice(2, x.length).join("");
    let location = loadData("location");
    let lat = location.lat.toString();
    let lon = location.lng.toString();
    let data = loadData("hotelListData");
    console.log(typeof lat);
    console.log(typeof lon);
    console.log("listing calling");
    if (data) {
      hotelListingDataRequest({
        location: { lat, lon, page: data.page },
        path,
      });
    } else {
      hotelListingDataRequest({ location: { lat, lon, page: 1 }, path });
    }
  }

  handleMapView = () => {
    let { mapView } = this.state;
    this.setState({
      mapView: !mapView,
    });
  };
  // shouldComponentUpdate(prevProps) {
  //   const { hotelListingDataRequest, location } = this.props;
  //   hotelListingDataRequest(location.pathname);
  //   return location.pathname !== prevProps.location.pathname;
  // }

  // shouldComponentUpdate = () => {
  //   const { hotelListingDataRequest, location, token } = this.props;

  //   return token && hotelListingDataRequest(location.pathname);
  // };

  render() {
    console.log(this.props, "history checkings");
    const { hotelData, token } = this.props;
    let { mapView } = this.state;
    return (
      <div className="container-fluid p-0">
        <Navbar />
        <div className="row m-0">
          <Sidebar url={this.props} mapView={mapView} />
          <Contentsection
            history={this.props.history}
            mapView={mapView}
            handleMapView={this.handleMapView}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  hotelListingDataRequest: (payload) =>
    dispatch(hotelListingDataRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
