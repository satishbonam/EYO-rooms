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
    const {
      title,
      rating,
      ratings,
      rooms,
      guests,
      type,
      price,
      discount,
      savings,
    } = this.props;
    return (
      <div className="col-10 mt-4 " id={styles.cardContainer}>
        <div className="row sticky-top">
          <div class="card w-100 ">
            <div class="card-body">
              <div className="d-flex">
                <div className="col-9">
                  <div id={styles.heading}>{title}</div>
                  <div className="d-flex align-items-center">
                    <div id={styles.ratingContainer}>
                      <span>{rating}</span>
                      <span>
                        <FontAwesomeIcon
                          icon={faStar}
                          color="#f0f0f0"
                          size="sm"
                        />
                      </span>
                    </div>
                    <span id={styles.ratingCount}>
                      {`${ratings} Ratings  .`}
                    </span>
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
                  <span>{`${rooms} Rooms , ${guests} Guests`}</span>
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
                  <span className="ml-2">{type}</span>
                </div>
              </div>
              <div id={styles.tagContainer}>
                {[
                  {
                    priceDes: `Room price for ${rooms} Rooms X ${guests} Guests`,
                    amount: price,
                  },
                  {
                    priceDes: "Price Drop",
                    amount: price - discount - savings,
                  },
                  { priceDes: "5% Membership Discount", amount: savings },
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
                  <div id={styles.total}>{discount}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
