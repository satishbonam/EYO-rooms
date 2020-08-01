
import React,{useState} from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";

  var points = [
    { lat: 42.02, lng: -76.01, name:"hotel cacajaca", key:1 },
    { lat: 42.03, lng: -77.02,name:"Juncus brachycarpus Engelm.",key:2},
    { lat: 41.03, lng: -75.04,name:"Gossypianthus lanuginosus (Poir.) Moq.",key:3 },
    { lat: 42.05, lng: -78.02,name:"Bartonia paniculata (Michx.) Muhl." ,key:4}
]
class map extends React.Component{
    constructor(props){
        super(props)
        this.state={
            select:null
        }
    }
    render(){

        return(
            <>
                <h1>map</h1>
                <GoogleMap
                    defaultZoom={5}
                    defaultCenter={{ lat: 20.5937, lng: 78.9629 }}>
                        {
                            points.map(ele=>(
                                <Marker key={ele.key} position={{ lat: ele.lat, lng: ele.lng }}
                                    onClick={()=>{
                                        this.setState({select:ele})
                                    }}
                                    icon={{
                                        url:"https://i.pinimg.com/600x315/5e/51/0c/5e510c69169756774ee36eea82da3a1a.jpg",
                                        scaledSize:new window.google.maps.Size(40,40),
                                    }}
                                    // label="2000"
                                />
                            ))
                        }
                        {
                            this.state.select && (
                                <InfoWindow
                                 position={{ lat: this.state.select.lat, lng: this.state.select.lng }}
                                  onCloseClick={()=>this.setState({select:null})}>
                                      <div>

                                      <h2>{this.state.select.name}</h2>
                                      <h6>{this.state.select.name}</h6>
                                      </div>
                                </InfoWindow>
                            )
                        }
                </GoogleMap>
            </>
        )
    }
    
}
const WrappedMap = withScriptjs(withGoogleMap(map))

export default function Map(){
    return(
        <>
            <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCcS0j7hDpSs-F4xDi2q6AkTD_sWqECR9M"}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
        </>
    )
}