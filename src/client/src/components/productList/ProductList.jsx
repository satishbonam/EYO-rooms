import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../navigation/navbar";
import Sidebar from "./sidebar/Sidebar";
import Contentsection from "../productList/contentSection/ContentSection";
import {hotelListingDataRequest} from "../../redux/authentication/actions"
import {connect} from "react-redux"

 class ProductList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
      hotelData:[]
      
    };
  }

  componentDidMount=()=>{

  const {hotelListingDataRequest,hotelData} = this.props
  hotelListingDataRequest()
    this.setState({hotelData})
  }

  render() {
       const {hotelData} = this.props
    return (
      <div className="container-fluid p-0">
        <Navbar />
        <div className="row m-0">
          <Sidebar hotelData={hotelData}/>
          <Contentsection hotelData={hotelData}/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  hotelData :state.auth.hotelListData
});

const mapDispatchToProps = (dispatch) => ({
  hotelListingDataRequest: (payload) => dispatch(hotelListingDataRequest(payload)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
