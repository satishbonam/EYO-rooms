import React from "react";
import styles from "../../sidebar/sidebar.module.css";

export default function SidebarCollectionItems() {
  return (
    <>
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
      <label>
        <input id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
        <span>Sanitised stays</span>
      </label>
    </>
  );
}
