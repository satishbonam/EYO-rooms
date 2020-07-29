import React,{useState} from "react";
import styles from "../../sidebar/sidebar.module.css";
import {hotelListingDataRequest} from "../../../../redux/authentication/actions"
import { connect } from "react-redux";

 class SidebarCategoriesItems extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
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
  
}


const mapStateToProps = (state) => ({
  hotelData :state.auth.hotelListData
});

const mapDispatchToProps = (dispatch) => ({
  hotelListingDataRequest: (payload) => dispatch(hotelListingDataRequest(payload)),
  
})

export default connect(mapStateToProps, mapDispatchToProps)(SidebarCategoriesItems);