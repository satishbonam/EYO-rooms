import React from "react";
import styles from "../../sidebar/sidebar.module.css";
import {hotelListingDataRequest} from "../../../../redux/authentication/actions"
import { connect } from "react-redux";


 function SidebarCollectionItems(props) {
 console.log(props)
  return (
    <>
      <label>
        <input id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
        <span>Sanitised stays</span>
      </label>
      <label>
        <input id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
        <span>EYO_Welcome's_Couples</span>
      </label>
      <label>
        <input id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
        <span>Local_ID's_Accepted</span>
      </label>
      <label>
        <input id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
        <span>Business_Travellers</span>
      </label>
       <label>
        <input id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
        <span>EYO_Welcome's_Couples</span>
      </label>
    </>
  );
}

const mapStateToProps = (state) => ({
  hotelData :state.auth.hotelListData
});

const mapDispatchToProps = (dispatch) => ({
  hotelListingDataRequest: (payload) => dispatch(hotelListingDataRequest(payload)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarCollectionItems);