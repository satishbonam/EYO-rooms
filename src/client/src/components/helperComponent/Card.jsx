import React, { Component } from "react";
import styles from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCheckCircle,
  faWifi,
  faCarBattery,
} from "@fortawesome/free-solid-svg-icons";
import { hotelListingDataRequest ,hotelEntityDataRequest,hotelBillingDataRequest,hotelReviewDataRequest} from "../../redux/authentication/actions";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"
class Card extends Component {

  changeToEntityPage=(id)=>{
    console.log("calling entity page",id)
    const {hotelEntityDataRequest,hotelBillingDataRequest, history} =  this.props


    // hotelEntityDataRequest(id)

      hotelBillingDataRequest({
      hotel_id:id,
      room_id:"1",
      check_in:"01/01/2020",
      check_out:"01/01/2020",
      no_of_guests:"2",
      no_of_rooms:"2",
      membership: true
    })
    
    // <Redirect to={`/entity/${id}`}/>
  }

  render() {
    const { data } = this.props;
    const {changeToEntityPage} =  this

    return (
      <>
        <div class="card mt-5 border-0" id={styles.border}>
          <div class="row no-gutters" id={styles.imgContainer}>
            <div class="col-md-4  h-100">
              <img
                src={data.images.large[0]}
                class="card-img"
                alt="..."
                id={styles.imageFit}
              />
            </div>
            <div className="col-1 d-flex flex-column justify-content-center h-100">
              <img
                src={data.images.thumb[0]}
                class="card-img p-1 h-25"
                alt=""
              />
              <img
                src={data.images.thumb[1]}
                class="card-img p-1 h-25"
                alt=""
              />
              <img
                src={data.images.thumb[2]}
                class="card-img p-1 h-25"
                alt=""
              />
              <img
                src={data.images.thumb[3]}
                class="card-img p-1 h-25"
                alt=""
              />
            </div>
            <div class="col-md-7">
              <div class="card-body" id={styles.cardBody}>
                <h5 class="card-title m-0" id={styles.cardTitle}>
                  {data.name}
                </h5>
                <div id={styles.location}> kolkata , kolkata </div>
                <div className="mt-3">
                  <div className="col-4 p-0" id={styles.ratingContainer}>
                    <span id={styles.rating}>
                      <span className="text-white">4.7</span>
                      <span>
                        <FontAwesomeIcon icon={faStar} color="#fff" size="sm" />
                      </span>
                    </span>
                    <span>(32 Rating)</span>
                    <span>Excellent</span>
                  </div>
                </div>
                <div className="col-12 d-flex p-0 mt-2 " id={styles.amenity}>
                  <div id={styles.amenityWrapper}>
                    <span>
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                    <span>Recptions</span>
                  </div>
                  <div id={styles.amenityWrapper}>
                    <span>
                      <FontAwesomeIcon icon={faWifi} />
                    </span>
                    <span>Wifi</span>
                  </div>
                  <div id={styles.amenityWrapper}>
                    <span>
                      <FontAwesomeIcon icon={faCarBattery} />
                    </span>
                    <span>Power backup</span>
                  </div>
                  <div>+ 11 more</div>
                </div>
                <div id={styles.facility}>
                  <span>Included BreakFast</span>
                  <span>santised stay</span>
                  <span>operated by Eyo</span>
                </div>
                <div className="d-flex justify-content-between mt-3 ">
                  <div>
                    <div>
                      <span id={styles.price}>
                        $ {data.rooms[0].actual_price}
                      </span>
                      <span id={styles.slashPrice}>
                        $ {data.rooms[0].discounted_price}
                      </span>
                      <span id={styles.percentage}>
                        {data.rooms[0].discount_percentage} % off
                      </span>
                    </div>
                    <div id={styles.pernight}>per room per night</div>
                    <div id={styles.pernight}>
                      Checking feature-{data.checkin_features}
                    </div>
                  </div>
                  <div>
                    <a href={`/entity/${data.hotel_id}`} target="_blank" id={styles.whilteButton}>View details</a>
                    <button id={styles.greenButton}>Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


const mapStateToProps = (state) => ({
  token: state.auth.token,
    user: state.auth.user,
    entityData: state.auth.entityData,
    review: state.auth.review
});

const mapDispatchToProps = (dispatch) => ({
  hotelEntityDataRequest: (payload) => dispatch(hotelEntityDataRequest(payload)), 
  hotelBillingDataRequest: (payload) => dispatch(hotelBillingDataRequest(payload)), 
  hotelReviewDataRequest: (payload) => dispatch(hotelReviewDataRequest(payload)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
