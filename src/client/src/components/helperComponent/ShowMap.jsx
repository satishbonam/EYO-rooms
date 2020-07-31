import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class ShowMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
    });
  };

  renderTrucks = () => {
    if (this.props.list == undefined) {
      return;
    }

    return <Marker name="amresh location" position={{ lat: 37.762391, lng: -122.439192 }} />;
  };
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        {/* <Marker onClick={(props, marker, e) => this.onMarkerClick(props, marker, e)} name={"Current location"} /> */}
        {this.renderTrucks()}
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCcS0j7hDpSs-F4xDi2q6AkTD_sWqECR9M",
})(ShowMap);
