import React, { Component } from "react";
import Navbar from "../navigation/navbar";
import PaymentMethodCard from "./paymentMethodCard/PaymentMethodCard";
// import PaymentMethodDetail from "./PaymentMethodDetail/PaymentMethodDetail";
import PaymentMethodBooking from "./paymentMethodBooking/PaymentMethodBooking";

export default class paymentMethod extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <div className="row m-0">
            <div className="col-7 mt-4">
              {/* <PaymentMethodDetail /> */}
              <PaymentMethodBooking />
            </div>
            <div className="col-5  mt-5">
              <PaymentMethodCard />
            </div>
          </div>
        </div>
      </>
    );
  }
}
