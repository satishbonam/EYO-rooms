
import React from "react";
import styles from "../../sidebar/sidebar.module.css";
import {hotelListingDataRequest} from "../../../../redux/authentication/actions"
import { connect } from "react-redux";


 class SidebarAccomodationItems extends React.Component {
   constructor(props){
     super(props)
     this.state={
       Hotel: false,
       Apartment:false,
       Eyo: false
     }
   }

 render(){
    const {handleRoute} = this.props
    const {Apartments,EYO,Apartment}
  return (
    <>
    	<div>
    	<label>
        <input 
          onChange={(e) => {
           this.setState({Apartment:e.target.value},()=>{
             handleRoute("accomodation_type","Apartments",Apartment)
           })
          }}
        id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
        <span>Apartments</span>
      	</label>
    	</div>
      	<div>
      		<label>
        <input 
         onChange={(e) => {
          this.setState({Hotel:e.target.value},()=>{
            handleRoute("accomodation_type","Hotels",Hotel)
          })
         }}
        id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
        <span>Hotel</span>
      </label>
      	</div>
   		<div>
   			<label>
        <input  onChange={(e) => {
           this.setState({EYO:e.target.value},()=>{
             handleRoute("accomodation_type","EYO-Rooms",Eyo)
           })
          }}
        id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
        <span>EYO_Rooms</span>
      </label>
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
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarAccomodationItems);