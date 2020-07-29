import React, { Component } from "react";
import ContentHeader from "../contentSection/contentSectionHeader";
import Card from "../../helperComponent/Card";
import { hotelListingDataRequest } from "../../../redux/authentication/actions";
import { connect } from "react-redux";

class ContentSection extends Component {
  render() {
    const { hotelData } = this.props;
    console.log(hotelData);
    return (
      <div className="col-9">
        <ContentHeader />
        {hotelData && hotelData.status && hotelData.data.map((ele) => <Card data={ele} key={ele.name} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotelData: state.auth.hotelListData,
});

const mapDispatchToProps = (dispatch) => ({
  hotelListingDataRequest: (payload) => dispatch(hotelListingDataRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentSection);
