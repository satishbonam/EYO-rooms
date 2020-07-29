import React, { useState } from "react";
import styles from "../../sidebar/sidebar.module.css";
import { hotelListingDataRequest } from "../../../../redux/authentication/actions";
import { connect } from "react-redux";

class SidebarCollectionItems extends React.Component {
  constructor(props){
    super(props)
    this.state={
      EYO_Welcome_Couples:false,
      EYO_Family:false,
      Sanitised_Stays:false,
      Business_Travellers:false,
      For_Group_Travellers:false,
      Local_IDs_Accepted:false
    }
  }
  render(){
    const {EYO_Welcome_Couples,EYO_Family,Sanitised_Stays,Business_Travellers
      ,For_Group_Travellers,Local_IDs_Accepted} = this.state

      const {handleRoute} = this.props
    return(

      <>
      <div>
      <label>
        <input 
          onChange={(e) => {
           this.setState({EYO_Welcome_Couples:e.target.checked},()=>{
             handleRoute("collections","EYO_Welcomes_Couples",EYO_Welcome_Couples)
           })
          }}
        id={styles.check} type="checkbox" aria-label="Checkbox for following text input" />
        <span>EYO Welcome Couples</span>
        </label>
      </div>
        <div>
          <label>
        <input 
         onChange={(e) => {
          this.setState({For_Group_Travellers:e.target.checked},()=>{
            handleRoute("collections","For_Group_Travellers",For_Group_Travellers)
          })
        }}
        id={styles.check} type="checkbox"/>
        <span>For Group Travellers</span>
      </label>
        </div>
        <div>
          <label>
        <input 
         onChange={(e) => {
          this.setState({Local_IDs_Accepted:e.target.checked},()=>{
            handleRoute("collections","Local_ID's_Accepted",Local_IDs_Accepted)
          })
        }}
        id={styles.check} type="checkbox"/>
        <span>For Group Travellers</span>
      </label>
        </div>
       <div>
         <label>
        <input  onChange={(e) => {
          this.setState({Business_Travellers:e.target.checked},()=>{
            handleRoute("collections","Business_Travellers",Business_Travellers)
           })
          }}
        id={styles.check} type="checkbox" />
        <span>Business Travellers</span>
      </label>
       </div>
       <div>
         <label>
        <input  onChange={(e) => {
          this.setState({Sanitised_Stays:e.target.checked},()=>{
            handleRoute("collections","Sanitised_Stays",Sanitised_Stays)
           })
          }}
        id={styles.check} type="checkbox" />
        <span>Sanitised Stays</span>
      </label>
       </div>
       <div>
         <label>
        <input  onChange={(e) => {
          this.setState({EYO_Family:e.target.checked},()=>{
            handleRoute("collections","Family_EYOs",EYO_Family)
           })
          }}
        id={styles.check} type="checkbox" />
        <span>Family EYO's</span>
      </label>
       </div>
       
    </>
    
    )
  }
    // const {EYO_Welcome_Couples} = this.state
    

  // Sanitised StaysBusiness TravellersLocal ID's AcceptedFor Group TravellersEYO Welcome's Couples
 
}

const mapStateToProps = (state) => ({
  hotelData: state.auth.hotelListData,
});

const mapDispatchToProps = (dispatch) => ({
  hotelListingDataRequest: (payload) =>
    dispatch(hotelListingDataRequest(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarCollectionItems);
