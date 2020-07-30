import React, { Component } from "react";
import styles from "./PaymentMethodCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorClosed,
  faStar,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

export default class PaymentMethodCard extends Component {
  render() {
    return (
      <div className="col-10 mt-4 " id={styles.cardContainer}>
        <div className="row sticky-top">
          <div class="card w-100 ">
            <div class="card-body">
              <div className="d-flex">
                <div className="col-9">
                  <div id={styles.heading}>
                    EYO Flagship 30106 Prafulla Devi Guest House Rajarhat
                    Chomatha
                  </div>
                  <div className="d-flex align-items-center">
                    <div id={styles.ratingContainer}>
                      <span>4.6</span>
                      <span>
                        <FontAwesomeIcon
                          icon={faStar}
                          color="#f0f0f0"
                          size="sm"
                        />
                      </span>
                    </div>
                    <span id={styles.ratingCount}>(134 Ratings) ·</span>
                    <span id={styles.ratingCount}>Excellent</span>
                  </div>
                  <div id={styles.days}>3 Nights</div>
                </div>
                <div className="col-3">
                  <img
                    src="/images/bed.webp"
                    id={styles.img}
                    className="card-img "
                    alt=""
                  />
                </div>
              </div>
              <div
                className="d-flex justify-content-between pl-0"
                id={styles.SecduleContainer}
              >
                <div>
                  <span>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      color="#f0f0f0"
                      size="lg"
                    />
                  </span>
                  <span>Wed, 12 Aug</span>
                  <span>-</span>
                  <span>Thu, 10 Sep</span>
                </div>
                <div id={styles.divide}></div>
                <div>
                  <span>3 Rooms, 3 Guests</span>
                </div>
              </div>
              <div
                className="d-flex justify-content-between pl-0"
                id={styles.quality}
              >
                <div>
                  <span>
                    <FontAwesomeIcon
                      icon={faDoorClosed}
                      color="#f0f0f0"
                      size="sm"
                    />
                  </span>
                  <span className="ml-2">Classice (2X)</span>
                </div>
              </div>
              <div id={styles.tagContainer}>
                {[
                  {
                    priceDes: "Room price for 3 Nights X 3 Guests",
                    amount: "₹36198",
                  },
                  { priceDes: "Price Drop", amount: "-₹7236" },
                  { priceDes: "25% Coupon Discount", amount: "-₹7241" },
                ].map((elem) => {
                  return (
                    <div className="row justify-content-between px-4 my-3">
                      <div id={styles.priceDes}>{elem.priceDes}</div>
                      <div id={styles.price}>{elem.amount}</div>
                    </div>
                  );
                })}

                <div id={styles.divider}></div>
                <div className="row justify-content-between px-4 my-3">
                  <div>
                    <span id={styles.payable}>Payable Amount</span>
                    <div id={styles.inc}>inclusive of all taxes</div>
                  </div>
                  <div id={styles.total}>₹21721</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
