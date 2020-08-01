import React, { Component } from "react";
import styles from "../paymentMethodComformation/PaymentMethodConfromation.module.css";

export default class PaymentMethodConformation extends Component {
  render() {
    return (
      <div className="row m-5 p-0 ">
        <div className="col-12 ">
          <h1 id={styles.heading}>Great! Your stay is confirmed.</h1>
          <div id={styles.subHeading}>You will soon receive an email confirmation on abhishekkumar9608@gmail.com</div>
        </div>
        <div className="col-12 my-5">
          <div className="card">
            <div className="card-body">
              <div className="row justify-content-between px-3">
                <div>
                  <span id={styles.idTitle}> Booking Id</span>
                  <div id={styles.id}>CWRU9732</div>
                </div>
                <div>Booked by Abhishek on Fri, 31 Jul 2020</div>
              </div>
              <div id={styles.divide}></div>
              <div className="row px-3">
                <div id={styles.priceHeading}>Payment Details</div>
                <table class="table" id={styles.table}>
                  <tbody>
                    <tr>
                      <td>Room Tariff</td>
                      <td id={styles.center}>₹1352 X 3 Nights</td>
                      <td id={styles.right}>₹ </td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td id={styles.center}>Thornton</td>
                      <td id={styles.right}>₹ 3042</td>
                    </tr>
                    <tr>
                      <td>Larry</td>
                      <td id={styles.center}>the Bird</td>
                      <td id={styles.right}>₹ 3042</td>
                    </tr>
                    <tr>
                      <td>Larry</td>
                      <td id={styles.center}>the Bird</td>
                      <td id={styles.right}>₹ 3042</td>
                    </tr>
                    <tr>
                      <td>Larry</td>
                      <td id={styles.center}>the Bird</td>
                      <td id={styles.right}>₹ 3042</td>
                    </tr>
                    <tr>
                      <td id={styles.total} colSpan="2">
                        Total Due(inclusive of all taxes)
                      </td>
                      <td id={styles.cash}>₹ 3042</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
