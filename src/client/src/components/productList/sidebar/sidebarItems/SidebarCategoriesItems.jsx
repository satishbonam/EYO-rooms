import React from "react";
import styles from "../../sidebar/sidebar.module.css";

export default function SidebarCategories() {
  return (
    <>
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
    </>
  );
}
