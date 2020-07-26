import React, { Component } from "react";
import styles from "./DetailViewDescription.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default class DetailViewDescription extends Component {
  render() {
    return (
      <div className="col-8  mt-4">
        <div className="col-12 px-3">
          <div className="d-flex justify-content-around " id={styles.headingContainer}>
            <h1 className="mx-4" id={styles.heading}>
              OYO Townhouse 229 Hotel Mannat International
            </h1>
            <div className="mr-5 ">
              <div className="d-flex bg-success justify-content-around" id={styles.ratingIcons}>
                <div>4.5</div>
                <span>
                  <FontAwesomeIcon icon={faStar} color="#fff" size="sm" />
                </span>
              </div>
              <div id={styles.rating}>
                <span>176 Ratings</span>
              </div>
            </div>
          </div>
          <div>
            <span className="m-4" id={styles.subHeading}>
              81-1, Gulshan Hall, Near Bypass connector, Kolkata
            </span>
          </div>
          <div className="d-flex justify-content-start ml-4" id={styles.badgeBox}>
            <div>
              <span id={styles.badgeLeft}>TOWNHOUSE</span>
            </div>
            <div>
              <span id={styles.operate}>Operated by EYO</span>
            </div>
          </div>
        </div>
        <div className="col-12  px-3 mt-5">
          <div className="px-4">
            <div>
              <span id={styles.Des}>Description</span>
            </div>
            <div>
              <span id={styles.DesDetail}>
                The COVID19 pandemic has made us all understand the importance of sanitization and not take it for granted. Rest assured, we have reached out to our partners to uphold the highest standards of sanitation and safety.
              </span>
            </div>
            <div id={styles.location}>
              <strong>Location</strong>
              <div>
                <span id={styles.hotelDetail}>Hotel Mannat International is well-decorated property located close to the famous Tiljala road in Kolkata.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
