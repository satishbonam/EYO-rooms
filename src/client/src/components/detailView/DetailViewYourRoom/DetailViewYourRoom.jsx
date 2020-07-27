import React, { Component } from "react";
import styles from "./DetailViewYourRoom.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheckCircle, faFan, faTv, faBed } from "@fortawesome/free-solid-svg-icons";

export default class DetailViewYourRomm extends Component {
  render() {
    return (
      <div className="col-7 m-0 ">
        <div className="px-4" id={styles.heading}>
          Choose your room
        </div>
        <div className="px-4">
          <div className="card mb-3 w-100">
            <div className="d-flex" id={styles.header}>
              <div className="m-0">
                <span id={styles.off}>
                  <FontAwesomeIcon icon={faStar} color="yellow" size="sm" />
                </span>
              </div>
              <div>
                <span id={styles.selected}>SELECTED CATEGORY</span>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-md-8">
                <div className="card-body p-4">
                  <span className="card-title m-0" id={styles.subHeading}>
                    Classic (2X)
                  </span>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faCheckCircle} color="lightgreen" size="lg" />
                  </span>
                  <div id={styles.roomSize}>Room size: 120 sqft</div>
                  <div className="mt-5 ml-0">
                    <span>
                      <span>
                        <FontAwesomeIcon icon={faFan} color="#000" size="sm" />
                      </span>
                      <span>AC</span>
                    </span>
                    <span>
                      <span>
                        <FontAwesomeIcon icon={faTv} color="#000" size="sm" />
                      </span>
                      <span>AC</span>
                    </span>
                    <span>
                      <span>
                        <FontAwesomeIcon icon={faBed} color="#000" size="sm" />
                      </span>
                      <span>AC</span>
                    </span>
                    <span>+ 18 more</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <img src="/images/bed.webp" className="card-img" alt="..." />
              </div>
              <div className="col-md-12 border-top ">
                <div className="d-flex justify-content-between p-2">
                  <div className="d-flex justify-content-between  align-items-center">
                    <span id={styles.price}>₹3735</span>
                    <span id={styles.slashPrice}>₹6378</span>
                  </div>
                  <div>
                    <button id={styles.whiteBtn}>
                      <span className="m-0">
                        <FontAwesomeIcon icon={faCheckCircle} color="lightgreen" size="sm" />
                      </span>
                      <span>Selected</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
