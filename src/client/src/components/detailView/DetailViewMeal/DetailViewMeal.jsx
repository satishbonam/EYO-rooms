import React, { Component } from "react";
import styles from "./DetailviewMeal.module.css";

export default class DetailViewMeal extends Component {
  render() {
    return (
      <div className="col-7 m-0 mt-3">
        <div className="px-4" id={styles.heading}>
          Choose your room
        </div>
        <div className="row m-0">
          {[
            { heading: "Breakfast", subHeading: "Continental & Indian menu", price: "1902" },
            { heading: "Breakfast", subHeading: "Continental & Indian menu", price: "1902" },
            { heading: "Breakfast", subHeading: "Continental & Indian menu", price: "1902" },
          ].map((elem) => {
            return (
              <div className="col-4 p-1">
                <div className="card mb-3 w-100">
                  <div className="row no-gutters p-2 align-items-center">
                    <div className="col-md-5 d-flex border p-1 rounded">
                      <img src="/images/bed.webp" id={styles.mealImage} className="card-img " alt="..." />
                    </div>
                    <div className="col-md-7 p-2">
                      <div className="card-body p-0">
                        <span className="card-title m-0" id={styles.subHeading}>
                          {elem.heading}
                        </span>

                        <div id={styles.menu}>{elem.subHeading}</div>
                        <div id={styles.mealPrice}>₹{elem.price}</div>
                      </div>
                    </div>

                    <div className="col-md-12 ">
                      <div className="p-2">
                        <button id={styles.selectButton}>Select</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
