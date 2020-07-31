import React, { Component } from "react";
import styles from "./DetailViewYourRoom.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faCheckCircle, faFan, faTv, faBed } from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD
import { faStar , faCheckCircle,faFan, faToilet, faPersonBooth, faMusic,faHandHoldingWater,faMoneyBillWave,faBreadSlice,faWifi,faFire, faHotTub,faCheese, faRestroom,faParking,faBed, faThermometerEmpty, faChair, faTv, faSoap} from "@fortawesome/free-solid-svg-icons"
import {hotelEntityDataRequest,hotelBillingDataRequest,hotelReviewDataRequest} from "../../../redux/authentication/actions"
import {connect} from "react-redux"
import DetailViewRoomCard from "./DetialViewRoomCard"
=======
import {
  faStar,
  faCheckCircle,
  faFan,
  faToilet,
  faPersonBooth,
  faMusic,
  faHandHoldingWater,
  faMoneyBillWave,
  faBreadSlice,
  faWifi,
  faFire,
  faHotTub,
  faCheese,
  faRestroom,
  faParking,
  faBed,
  faThermometerEmpty,
  faChair,
  faTv,
  faSoap,
} from "@fortawesome/free-solid-svg-icons";
import {
  hotelEntityDataRequest,
  hotelBillingDataRequest,
  hotelReviewDataRequest,
} from "../../../redux/authentication/actions";
import { connect } from "react-redux";
import DetailViewRoomCard from "./DetialViewRoomCard";
import DetailViewRoomSelected from "./DetailViewRoomSelected";
>>>>>>> c12255e6445dfba9cd4e53e7cf55eba92c43dd70

class DetailViewYourRomm extends Component {
  componentDidMount = () => {
    const {
      hotelEntityDataRequest,
      hotelBillingDataRequest,
      hotelReviewDataRequest,
    } = this.props;

<<<<<<< HEAD
 class DetailViewYourRomm extends Component {

  componentDidMount=()=>{
    const {hotelEntityDataRequest,hotelBillingDataRequest,hotelReviewDataRequest} = this.props
    hotelEntityDataRequest(10)
     hotelBillingDataRequest({
      hotel_id:"10",
      room_id:"1",
      check_in:"01/01/2020",
      check_out:"01/01/2020",
      no_of_guests:"2",
      no_of_rooms:"2",
      membership: true
    })
=======
    hotelBillingDataRequest({
      hotel_id: "10",
      room_id: "1",
      check_in: "01/08/2020",
      check_out: "02/08/2020",
      no_of_guests: "2",
      no_of_rooms: "2",
      membership: true,
    });
>>>>>>> c12255e6445dfba9cd4e53e7cf55eba92c43dd70
    // hotelReviewDataRequest(10)
  };

  render() {
    // let rooms,selected
<<<<<<< HEAD
    if(this.props.billingData){

      const {billingData} = this.props
      const {rooms,selected} =  billingData
      console.log(billingData)
=======
    if (this.props.billingData) {
      const { billingData } = this.props;
      const { rooms, selected } = billingData;
      console.log(billingData);
>>>>>>> c12255e6445dfba9cd4e53e7cf55eba92c43dd70
      return (
        <>
          <div className="px-4" id={styles.heading}>
            Choose your room
          </div>
<<<<<<< HEAD
  
          {
            rooms && rooms.map(ele=>(
                <DetailViewRoomCard data={ele} selected={selected}/>
            ))
          }
          
        </>
      );
    }
    return "loading..."
=======

          <DetailViewRoomSelected data={rooms} selected={selected} />
          {rooms &&
            rooms.map((ele) =>
              ele.id !== selected.id ? (
                <DetailViewRoomCard data={ele} selected={selected} />
              ) : (
                false
              )
            )}
        </>
      );
    }
    return "loading...";
>>>>>>> c12255e6445dfba9cd4e53e7cf55eba92c43dd70
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  user: state.auth.user,
  entityData: state.auth.entityData,
  review: state.auth.review,
  billingData: state.auth.billingData,
});

const mapDispatchToProps = (dispatch) => ({
  hotelEntityDataRequest: (payload) =>
    dispatch(hotelEntityDataRequest(payload)),
  hotelBillingDataRequest: (payload) =>
    dispatch(hotelBillingDataRequest(payload)),
  hotelReviewDataRequest: (payload) =>
    dispatch(hotelReviewDataRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailViewYourRomm);
