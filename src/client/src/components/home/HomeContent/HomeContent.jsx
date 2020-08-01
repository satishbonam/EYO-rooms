import React, { Component } from "react";
import styles from "./HomeContent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import style from "../../detailView/deatilViewRecomandation/DetailViewRecomandation.module.css";

export default class HomeContent extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <img src="images/open.webp" class="card-img-top" alt="" />
        </div>
        <div className="row mt-5">
          {[
            { heading: "OYO 29781 Radhika Ex", subHeading: "Some quick example text to build o", rating: "4", icon: faStar, review: "134", val: "Very Good", price: "1389", off: "46%" },
            { heading: "OYO 29781 Radhika Ex", subHeading: "Some quick example text to build o", rating: "4", icon: faStar, review: "134", val: "Very Good", price: "1389", off: "46%" },
            { heading: "OYO 29781 Radhika Ex", subHeading: "Some quick example text to build o", rating: "4", icon: faStar, review: "134", val: "Very Good", price: "1389", off: "46%" },
          ].map((elem) => {
            return (
              <div className="col-4 p-1 " style={{ paddingLeft: "10px" }}>
                <div className="card w-100">
                  <img className="card-img-top" src="/images/bed.webp" />
                  <div className="card-body">
                    <h2 className="text-truncate" id={style.heading}>
                      {elem.heading}
                    </h2>
                    <p className="card-text text-truncate" id={style.subHeading}>
                      {elem.subHeading}
                    </p>
                    <div>
                      <span id={style.icon}>
                        {elem.rating}
                        <span>
                          <FontAwesomeIcon icon={elem.icon} color="#fff" size="sm" />
                        </span>
                      </span>
                      <span id={style.review}>({elem.review} • reviews) Very Good</span>
                    </div>
                    <div>
                      <span id={style.price}>₹ {elem.price}</span>
                      <span id={style.slashed}>₹ {elem.price}</span>
                      <span id={style.off}>{elem.off} off</span>
                    </div>
                    <div id={style.perNight}>
                      <span>per room per night</span>{" "}
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
