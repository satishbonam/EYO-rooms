import React, { Component } from "react";
import { connect } from "react-redux";

export const PaymentGateway = () => {
  const displayRazorpay = () => {
    const options = {
      key: "rzp_test_PLk8LKPwxMUCZt",
      currency: "INR",
      amount: "23434",
      order_id: "order_FKZRoItYSpJDei",
      name: "Booking Transaction",
      description: "Thank You for Booking with EYO",
      handler: function (response) {
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "satish",
        email: "satish.b.s.kumar@gmail.com",
        phone_number: "8500505795",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div>
      <button onClick={() => displayRazorpay()}></button>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentGateway);
