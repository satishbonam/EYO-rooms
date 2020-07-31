import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faStar,
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
  faBed,
  faCheese,
  faRestroom,
  faParking,
  faThermometerEmpty,
  faChair,
  faTv,
  faSoap,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./DetailViewRecomandation.module.css";
import { hotelRecommendationDataRequest } from "../../../redux/authentication/actions";
import { build } from "search-params";
import { connect } from "react-redux";

class DetailViewRecomandation extends Component {
  componentDidMount = () => {
    const { hotelRecommendationDataRequest, hotelData } = this.props;
    var para = {};
    console.log(hotelData, "hotel data");
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
    let params = build(para);
    console.log(params);
    hotelRecommendationDataRequest(params);
  };

  render() {
    console.log(this.props.recommendation);
    return (
      <div className="container-fluid my-5">
        <div className=" col-12 ">
          <div className="row">
            <div className="col-7" id={styles.head}>
              Similar OYOs
            </div>
          </div>
          <div className="row">
            {[
              { heading: "OYO 29781 Radhika Ex", subHeading: "Some quick example text to build o", rating: "4", icon: faStar, review: "134", val: "Very Good", price: "1389", off: "46%" },
              { heading: "OYO 29781 Radhika Ex", subHeading: "Some quick example text to build o", rating: "4", icon: faStar, review: "134", val: "Very Good", price: "1389", off: "46%" },
              { heading: "OYO 29781 Radhika Ex", subHeading: "Some quick example text to build o", rating: "4", icon: faStar, review: "134", val: "Very Good", price: "1389", off: "46%" },
            ].map((elem) => {
              return (
                <div className="col-3 p-0" style={{ paddingLeft: "5px" }}>
                  <div className="card w-100">
                    <img className="card-img-top" src="/images/bed.webp" />
                    <div className="card-body">
                      <h2 className="text-truncate" id={styles.heading}>
                        {elem.heading}
                      </h2>
                      <p className="card-text text-truncate" id={styles.subHeading}>
                        {elem.subHeading}
                      </p>
                      <div>
                        <span id={styles.icon}>
                          {elem.rating}
                          <span>
                            <FontAwesomeIcon icon={elem.icon} color="#fff" size="sm" />
                          </span>
                        </span>
                        <span id={styles.review}>({elem.review} • reviews) Very Good</span>
                      </div>
                      <div>
                        <span id={styles.price}>₹ {elem.price}</span>
                        <span id={styles.slashed}>₹ {elem.price}</span>
                        <span id={styles.off}>{elem.off} off</span>
                      </div>
                      <div id={styles.perNight}>
                        <span>per room per night</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  user: state.auth.user,
  entityData: state.auth.entityData,
  review: state.auth.review,
  billingData: state.auth.billingData,
  recommendation: state.auth.recommendation,
  hotelData: state.auth.hotelData,
});

const mapDispatchToProps = (dispatch) => ({
  hotelRecommendationDataRequest: (payload) => dispatch(hotelRecommendationDataRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailViewRecomandation);
