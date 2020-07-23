import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div class="card mt-5  ">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="/images/bed.webp" class="card-img" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
