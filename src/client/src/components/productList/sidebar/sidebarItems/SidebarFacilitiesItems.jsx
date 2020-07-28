

import React,{useState} from "react";
import styles from "../../sidebar/sidebar.module.css";
import {hotelListingDataRequest} from "../../../../redux/authentication/actions"
import { connect } from "react-redux";


 function SidebarFacilitiesItems(props) {
	const { label, onClick } = props;
	const [checked, setChecked] = useState(false);
 	console.log("amenities",checked)
  return (
    <>
    	<div>
			<label onClick={onClick}>
			<input
			id={styles.check}
			type="checkbox"
			checked={checked}
			aria-label="Checkbox for following text input"
			onChange={() => {
				setChecked(!checked);
			}}
			/>
			<span>{label}</span>
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