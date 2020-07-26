import React, { Component } from "react";
import styles from "./PriceCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorClosed, faPen, faTags } from "@fortawesome/free-solid-svg-icons";

export default class PriceCard extends Component {
  render() {
    return (
      <div className="col-5 mt-4" id={styles.cardContainer}>
        <div class="card w-100 ">
          <div className="d-flex justify-content-around" id={styles.header}>
            <div className="m-0">
              <span id={styles.off}>Login now to get extra 10% Off</span>
            </div>
            <div id={styles.login}>
              <span id={styles.loginButton}>LOGIN</span>
            </div>
          </div>
          <div class="card-body">
            <div>
              <div className="d-flex flex-wrap align-items-center">
                <span id={styles.finalPrice}>$3289</span>
                <span id={styles.discount}>$9867</span>
                <span id={styles.perOff}>40 % off</span>
              </div>
              <div id={styles.perNight}>inclusive of all taxes</div>
            </div>
            <div className="d-flex justify-content-around" id={styles.SecduleContainer}>
              <div>
                <span>Wed, 12 Aug</span>
                <span>-</span>
                <span>Thu, 10 Sep</span>
              </div>
              <div id={styles.divide}></div>
              <div>
                <span>3 Rooms, 3 Guests</span>
              </div>
            </div>
            <div className="d-flex justify-content-between" id={styles.SecduleContainer}>
              <div>
                <span>
                  <FontAwesomeIcon icon={faDoorClosed} color="#f0f0f0" size="sm" />
                </span>
                <span className="ml-2">Classice (2X)</span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faPen} color="red" size="sm" />
                </span>
              </div>
            </div>
            <div id={styles.tagContainer}>
              <div>
                <div>
                  <span>
                    <FontAwesomeIcon icon={faTags} color="#f5a623" size="sm" />
                  </span>
                  <span id={styles.coupon}>Apply coupon</span>
                </div>
              </div>
              <div>
                <span id={styles.moreOffer}>more Offers</span>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div>
                <div id={styles.totalPrice}>Total price</div>
                <div id={styles.tax}>(incl. of all taxes)</div>
              </div>
              <div>
                <span id={styles.actualPrice}>₹196404</span>
              </div>
            </div>
            <div className="mt-5">
              <button>
                <span>Continue to Book</span>
              </button>
            </div>
            <div className="mt-2" id={styles.policy}>
              <div>10 people booked this hotel today</div>
              <div className="mt-3">Cancellation Policy</div>
              <div>Follow safety measures advised at the hotel</div>
              <div>
                <span className="text-secondary mt-3">By proceeding, you agree to our</span> Guest Policies.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
