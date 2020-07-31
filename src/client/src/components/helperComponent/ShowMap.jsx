

import React,{useState} from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";

  var points = [
    { lat: 19.155001, lng: 72.849998, name:"hotel cacajaca", key:1 },
    { lat: 15.2993, lng: 74.1240,name:"Juncus brachycarpus Engelm.",key:2},
    { lat: 18.5408, lng: 73.8913,name:"Gossypianthus lanuginosus (Poir.) Moq.",key:3 },
    { lat:12.9141, lng: 74.8560,name:"Bartonia paniculata (Michx.) Muhl." ,key:4}
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
            containerElement={<div style={{ height: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
        </>
    )
}