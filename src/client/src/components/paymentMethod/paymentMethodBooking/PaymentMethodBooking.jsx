import React, { Component } from "react";
import styles from "./PaymentMethodBooking.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLock } from "@fortawesome/free-solid-svg-icons";

export default class PaymentMethodBooking extends Component {
  render() {
    const { price, discount, savings, username, email, mobile } = this.props;
    return (
      <>
        <div className="row ml-5">
          <span>
            <FontAwesomeIcon
              icon={faArrowLeft}
              color="rgb(238, 42, 36)"
              size="lg"
            />
          </span>
          <span id={styles.backBtn}>Modify your booking</span>
        </div>
        <div className="col-11 mt-4 offset-1 " id={styles.cardContainer}>
          <div className="row ">
            <div className="col-12" id={styles.saveMoney}>
              <span>
                {" "}
                {`Yay! you just saved ₹${
                  price - discount + savings
                } on this booking!`}
              </span>
            </div>
            <div class="card w-100 ">
              <div class="card-body pt-0 px-3">
                <div
                  className="row justify-content-between align-items-center"
                  id={styles.heading}
                >
                  <div className="row align-items-center">
                    <div id={styles.first}>1</div>
                    <div id={styles.enterDetail}>
                      <span> Your details</span>
                    </div>
                  </div>
                  <div id={styles.modify} onClick={() => {}}>
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
                <div
                  className="row justify-content-between align-items-center"
                  id={styles.anotherHeading}
                >
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
                  <span>
                    We will use these details to share your booking information
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
