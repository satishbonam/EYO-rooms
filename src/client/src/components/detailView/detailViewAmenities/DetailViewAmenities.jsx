import React, { Component } from "react";
import styles from "./DetailViewAmenities.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan, faWifi, faBed } from "@fortawesome/free-solid-svg-icons";

export default class DetailViewAmenities extends Component {
  render() {
    return (
      <div className="col-12 px-3 mt-5">
        <div>
          <div className="px-4" id={styles.heading}>
            Amenities
          </div>
          <div className="d-flex justify-content-around flex-wrap" id={styles.container}>
            {[
              { icon: faFan, tool: "AC" },
              { icon: faWifi, tool: "Wifi" },
              { icon: faBed, tool: "AC" },
              { icon: faBed, tool: "AC" },
              { icon: faFan, tool: "AC" },
              { icon: faWifi, tool: "AC" },
            ].map((elem) => {
              console.log(elem);
              return (
                <div className="col-4">
                  <span>
                    <FontAwesomeIcon icon={elem.icon} color="#000" size="lg" />
                  </span>
                  <span>{elem.tool}</span>
                </div>
              );
            })}
          </div>
          <div className=" mx-4 mt-3" id={styles.showMore}>
            Show More
          </div>
        </div>
      </div>
    );
  }
}
