

import React from "react";
import styles from "../../sidebar/sidebar.module.css";
import {hotelListingDataRequest} from "../../../../redux/authentication/actions"
import { connect } from "react-redux";


 function SidebarFacilitiesItems(props) {
 	const {facility} = props
 	console.log(props)
  return (
    <>
    	<div>
    		<label>
        		<input id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
        		<span>{facility}</span>
      		</label>
    	</div>
      	
    </>
  );
}

const mapStateToProps = (state) => ({
  hotelData :state.auth.hotelListData
});

const mapDispatchToProps = (dispatch) => ({
  hotelListingDataRequest: (payload) => dispatch(hotelListingDataRequest(payload)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarFacilitiesItems);