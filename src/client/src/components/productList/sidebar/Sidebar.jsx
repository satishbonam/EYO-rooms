import React, { Component } from "react";
import styles from "./sidebar.module.css";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="col-3 border-right " id={styles.sidebar}>
        <div className="col-12 border-bottom " id={styles.filter}>
          <div id={styles.filterHeading}>Filters</div>
          <h4>Popular locations in Kolkata, West Bengal, India</h4>
          <input type="text" placeholder="Search..." />
          <div className="mb-2" id={styles.tagWrapper}>
            <div id={styles.tag}>Howrah Railway station </div>
            <div id={styles.tag}>Dum Dum </div>
            <div id={styles.tag}>Dharamtala </div>
          </div>
          <Link className="text-danger" to="/">
            + View More
          </Link>
        </div>
        <div className="col-12 pt-3 border-bottom" id={styles.filter}>
          <h4>Collections</h4>
          <label>
            <input id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
            <span>Sanitised stays</span>
          </label>
          <label>
            <input id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
            <span>Sanitised stays</span>
          </label>
          <label>
            <input id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
            <span>Sanitised stays</span>
          </label>
          <div>
            <Link className="text-danger" to="/">
              + View More
            </Link>
          </div>
        </div>

        <div className="col-12 pt-3" id={styles.filter}>
          <h4>Categories</h4>
          <div className="row flex-nowrap">
            <input id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
            <div>
              {" "}
              <span className="font-weight-bold">OYO Rooms</span> - super affordable stays with essential amentities
            </div>
          </div>
          <div className="row flex-nowrap">
            <input id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
            <div>
              {" "}
              <span className="font-weight-bold">OYO Rooms</span> - super affordable stays with essential amentities
            </div>
          </div>
          <div className="row flex-nowrap">
            <input id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
            <div>
              {" "}
              <span className="font-weight-bold">OYO Rooms</span> - super affordable stays with essential amentities
            </div>
          </div>
          <div>
            <Link className="text-danger" to="/">
              + View More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
