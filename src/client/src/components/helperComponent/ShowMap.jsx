import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper ,Polyline} from "google-maps-react";

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
    // if (this.props.list == undefined) {
    //   return;
    // }

    return[
      
      <Marker
      name={'Dolores park'}
   title={'The marker`s title will appear as a tooltip.'}
   onClick={(props, marker, e) => this.onMarkerClick(props, marker, e)} 
      position={{lat: 37.759703, lng: -122.428093}} />,
   
        <Marker
      title={'The marker`s title will appear as a tooltip.'}
      onClick={(props, marker, e) => this.onMarkerClick(props, marker, e)} 
      name={'SOMA'}
      position={{lat: 37.778519, lng: -122.405640}} />,
   
        <Marker
        onClick={(props, marker, e) => this.onMarkerClick(props, marker, e)} 
      title={'The marker`s title will appear as a tooltip.'}
      name={'SOncdsdjcsnd'}
      position={{lat: 42.02, lng: -77.01}} />
    ]
  };
  
  render() {
    
   
    var points = [
        { lat: 42.02, lng: -77.01 },
        { lat: 42.03, lng: -77.02 },
        { lat: 41.03, lng: -77.04 },
        { lat: 42.05, lng: -77.02 }
    ]
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }
    return (
      <Map google={this.props.google} zoom={5} >
      {/* <Marker name="amresh location" position={{ lat: 19.07, lng: 72.20 }} />
      <Marker name="amresh location" position={{ lat: 16.07, lng: 72.20 }} /> */}
    
        {/* <Marker onClick={(props, marker, e) => this.onMarkerClick(props, marker, e)} name={"Current location"} /> */}
        {this.renderTrucks()}
        {/* <Polyline
          path={triangleCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2} /> */}
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
