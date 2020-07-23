import React from "react";
import styles from "./toggleButton.module.css";

export default function toggleButton() {
  return (
    <>
      <input type="checkbox" id="switch" className={styles.checkbox} />
      <label for="switch" className={`${styles.toggle} + m-0`}></label>
    </>
  );
}
