import React, { Component } from "react";
import styles from "./DetailViewAmenities.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFan, faWifi, faBed } from "@fortawesome/free-solid-svg-icons";
import { faStar , faFan, faToilet, faPersonBooth, faMusic,faHandHoldingWater,faMoneyBillWave,faBreadSlice,faWifi,faFire, faHotTub, faCheese, faRestroom,faParking,faBed, faThermometerEmpty, faChair, faTv, faSoap} from "@fortawesome/free-solid-svg-icons"
import {connect} from "react-redux"

 class DetailViewAmenities extends Component {

  constructor(props){
    super(props);
    this.state={
      showFontIcon:false
    }
  }

   render() {
    let amenities = []
    let amenities2 = []
    const {entityData} = this.props
    const {showFontIcon}  =this.state
    console.log(entityData,"amenities")
    if(entityData){

       entityData.amenities.map(ele=>{
        if(ele.status){
          amenities2.push(ele)
        }
        if(amenities.length<6){
          amenities.push(ele)

        }

      })
    }
    console.log(amenities, typeof faFan)
    // let amenities = []
    // if(entityData){

    //    for (item of entityData.amenities[0]){
    //      console.log (item)
    //    }

    //    console.log(amenities)
    // }
    return (
      <div className="col-12 px-3 mt-5">
        <div>
          <div className="px-4" id={styles.heading}>
            Amenities
          </div>
          <div className="d-flex justify-content-around flex-wrap" id={styles.container}>
          {!showFontIcon && amenities && amenities.map((elem) => {
              console.log(elem);
              return (
                <div className="col-4">
                  <span>
                    <FontAwesomeIcon icon={elem.frot_awsome} color="#000" size="lg" />
                  </span>
                  <span>{elem.label}</span>
                </div>
              );
            })}
          {showFontIcon && amenities2 && amenities2.map((elem) => {
              console.log(elem);
              return (
                <div className="col-4">
                  <span>
                    <FontAwesomeIcon icon={faFan} color="#000" size="lg" />
                  </span>
                  <span>{elem.label}</span>
                </div>
              );
            })}
          </div>
          <div onClick={()=>this.setState({showFontIcon:!showFontIcon})} className=" mx-4 mt-3" id={styles.showMore}>
            Show More
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
    user: state.auth.user,
    entityData: state.auth.entityData
});



export default connect(mapStateToProps, null)(DetailViewAmenities);