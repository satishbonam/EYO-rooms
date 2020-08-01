import React, { useEffect } from "react";
import styles from "./PaymentMethodBooking.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLock } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { razorpayRequest } from "../../../redux/authentication/actions";
import axios from "../../../utils/axiosInterceptor";
import { Link, useParams, useHistory } from "react-router-dom";

const PaymentMethodBooking = (props) => {
  const { razorpayRequest, token, billingData, razor } = props;
  const params = useParams();
  const history = useHistory();
  const id = params.id;

  console.log(params);
  const displayRazorpay = (res) => {
    console.log(res);
    const options = {
      key: res.key,
      currency: res.currency,
      amount: Number(res.amount),
      order_id: res.order_id,
      name: "Booking Transaction",
      description: "Thank You for Booking with EYO",
      handler: function (response) {
        history.push(`/entity/${id}/payment/confirmation`);
      },
      prefill: {
        name: res.name,
        email: res.email,
        phone_number: res.mobile,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const { price, discount, savings, username, email, mobile } = props;

  return (
    <>
      <div className="row ml-5">
        <span>
          <FontAwesomeIcon icon={faArrowLeft} color="rgb(238, 42, 36)" size="lg" />
        </span>
        <span id={styles.backBtn}>Modify your booking</span>
      </div>
      <div className="col-11 mt-4 offset-1 " id={styles.cardContainer}>
        <div className="row ">
          <div className="col-12" id={styles.saveMoney}>
            <span> {`Yay! you just saved ₹${price - discount + savings} on this booking!`}</span>
          </div>
          <div class="card w-100 ">
            <div class="card-body pt-0 px-3">
              <div className="row justify-content-between align-items-center" id={styles.heading}>
                <div className="row align-items-center">
                  <div id={styles.first}>1</div>
                  <div id={styles.enterDetail}>
                    <span> Your details</span>
                  </div>
                </div>
                <div id={styles.modify}>
                  <span>Modify</span>
                </div>
              </div>
              <div className="row justify-content-around">
                <div id={styles.info}>{username}</div>
                <div className="mt-2" id={styles.divide}></div>
                <div id={styles.info}>{email}</div>
                <div className="mt-2" id={styles.divide}></div>
                <div id={styles.info}>{mobile}</div>
              </div>
            </div>
          </div>
          <div class="card w-100 mt-4 ">
            <div class="card-body pt-0 px-3">
              <div className="row justify-content-between align-items-center" id={styles.anotherHeading}>
                <div className="row align-items-center">
                  <div id={styles.sec}>2</div>
                  <div id={styles.enterDetail}>
                    <span> Complete your booking</span>
                  </div>
                </div>
                <div id={styles.secure}>
                  <span>
                    <FontAwesomeIcon icon={faLock} color="green" size="sm" />
                  </span>
                  <span>100% secure payments</span>
                </div>
              </div>
              <div className="row" id={styles.detailDes}>
                <span>We will use these details to share your booking information</span>
                <div class="col-6 d-flex align-items-center">
                  <button
                    type="submit"
                    class="btn btn-info col-6 offset-2"
                    onClick={() => {
                      axios
                        .post(
                          "/payment_request",
                          {
                            check_in: billingData.selected.check_in,
                            check_out: billingData.selected.check_out,
                            amount: billingData.selected.discount_price,
                            no_of_rooms: billingData.selected.no_of_rooms,
                            no_of_guests: billingData.selected.no_of_guests,
                            hotel_id: billingData.selected.hotel_id,
                            room_id: billingData.selected.id,
                          },
                          {
                            headers: {
                              "x-amzn-oidc-data": token,
                            },
                          }
                        )
                        .then((res) => displayRazorpay(res.data));
                    }}
                  >
                    payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  otpGenerate: state.auth.otpGenarate,
  user: state.auth.user,
  token: state.auth.token,
  isAuth: state.auth.isAuth,
  entityData: state.auth.entityData,
  review: state.auth.review,
  billingData: state.auth.billingData,
  razor: state.auth.razor,
});

const mapDispatchToProps = (dispatch) => ({
  razorpayRequest: (payload) => dispatch(razorpayRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethodBooking);
