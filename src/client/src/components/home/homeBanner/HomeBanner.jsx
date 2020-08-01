import React, { Component } from "react";
import styles from "./HomeBanner.module.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import AutocompleteForm from "../AutocompleteForm";
import { hotelListingDataRequest } from "../../../redux/authentication/actions";
import { connect } from "react-redux";
import { loadData } from "../../../redux/authentication/localStorage";

class HomeBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputStart: "01/08/2020",
      inputFinish: "02/08/2020",
      checked: true,
      showrooms: false,
      roomCount: 1,
      guestCount: 1,
      roomContainer: [<div></div>],
    };
  }

  handleSearchHotel = () => {
    const { hotelListingDataRequest, history } = this.props;
    console.log(this.props);
    let location = loadData("location");
    let lat = location.lat.toString();
    let lon = location.lng.toString();
    console.log(typeof lat);
    console.log(typeof lon);
    console.log("listing calling");
    hotelListingDataRequest({ location: { lat, lon }, path: "" });
    history.push("/listing");
  };

  handleEvent = (event, picker) => {
    this.setState({
      inputStart: picker.startDate.format("DD/MM/YYYY"),
      inputFinish: picker.endDate.format("DD/MM/YYYY"),
    });
    console.log(this.state);
  };

  showRoomsHandler = () => {
    this.setState({
      showrooms: !this.state.showrooms,
    });
  };

  handleRoomAndGuest = () => {
    const { roomCount, guestCount, roomContainer } = this.state;

    let ele = [
      ...roomContainer,
      <div className="row m-0 p-3 justify-content-around align-items-center" id={styles.dropDownHead}>
        <div>Room {roomCount}</div>
        <div>
          <span id={styles.operator} onClick={() => this.setState({ guestCount: guestCount - 1 })}>
            –
          </span>
          <span>{guestCount}</span>
          <span id={styles.operator} onClick={() => this.setState({ guestCount: guestCount + 1 })}>
            +
          </span>
        </div>
      </div>,
    ];

    return ele;
  };
  handleAddRoom = () => {
    const { roomCount, guestCount, roomContainer } = this.state;
    console.log(roomContainer.length);
    let ele = (
      <div className="row m-0 p-3 justify-content-around align-items-center" id={styles.dropDownHead}>
        <div>Room {roomCount}</div>
        <div>
          <span id={styles.operator} onClick={() => this.setState({ guestCount: guestCount - 1 })}>
            –
          </span>
          <span>{1}</span>
          <span id={styles.operator} onClick={() => this.setState({ guestCount: guestCount + 1 })}>
            +
          </span>
        </div>
      </div>
    );
    this.setState({ roomContainer: [...roomContainer, ele], roomCount: roomCount + 1 });
    return roomContainer;
  };
  handleDeleteRoom = () => {
    const { roomCount, guestCount, roomContainer } = this.state;
    console.log(roomContainer.length);
    let elem = roomContainer.map((ele) => {
      if (ele.length < roomContainer.length - 2) {
        return ele;
      }
    });
    console.log(elem);
  };
  render() {
    let { showrooms, roomCount, guestCount, inputStart, inputFinish } = this.state;
    let { handleRoomAndGuest, handleAddRoom, handleDeleteRoom, handleSearchHotel } = this;
    let showRoomsDrop = showrooms ? "" : "d-none";
    return (
      <div className="container-fluid" style={{ position: "relative", zIndex: "1" }}>
        <div className="row p-0">
          <div className="col-12 d-flex justify-content-center" id={styles.container}>
            <div className="col-10 " id={styles.wrapper}>
              <div className="row justify-content-around w-100" id={styles.background}>
                <img src="images/banner.svg" alt="" />
                <img src="images/banner.svg" alt="" />
              </div>
              <div className="row w-100 justify-content-center " id={styles.headingForm}>
                <h1 id={styles.title}>Find hotels and home at best prices</h1>
              </div>
              <div className="row justify-content-center flex-wrap">
                <div className="d-flex">
                  <AutocompleteForm />
                  {/* <input id={styles.autoComplete} type="text" placeholder="Search by city, hotel, or neighborhood" autocomplete="no" required="" /> */}
                </div>

                <div id={styles.homeCalender}>
                  <DateRangePicker autoUpdateInput={false} startDate={this.state.inputStart} endDate={this.state.inputFinish} locale={{ format: "DD/MM/YYYY" }} onApply={this.handleEvent} autoApply={true}>
                    <div>
                      <span>{inputStart} </span>
                      <span>-</span>
                      <span>{inputFinish}</span>
                    </div>
                  </DateRangePicker>
                </div>
                <div id={styles.homeRoom}>
                  <span type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false" onClick={this.showRoomsHandler}>
                    {roomCount} Rooms, {guestCount} Guests
                  </span>
                  <div className={showRoomsDrop} aria-labelledby="dropdownMenuButton" id={styles.dropDownContainer}>
                    <div className="row justify-content-around" id={styles.dropDownHead}>
                      <div>Rooms</div>
                      <div>Guests</div>
                    </div>
                    {/* <div className="row m-0 p-3 justify-content-around align-items-center" id={styles.dropDownHead}>
                      <div>Room 1</div>
                      <div>
                        <span id={styles.operator}>–</span>
                        <span>3</span>
                        <span id={styles.operator}>+</span>
                      </div>
                    </div> */}
                    {handleRoomAndGuest()}
                    <div className="row justify-content-around" id={styles.dropDownHead}>
                      <div onClick={() => handleAddRoom()}>Add Room</div>
                      <div onClick={() => handleDeleteRoom()}>Delete Room</div>
                    </div>
                  </div>
                </div>

                <div id={styles.homebutton} style={{ height: "67px" }}>
                  <button id={styles.homebutton} onClick={handleSearchHotel}>
                    Search
                  </button>
                </div>
              </div>
              <div className="row px-5 py-4 align-items-cene w-100" id={styles.items}>
                <div id={styles.searched}>
                  <span>Continue your search</span>
                </div>
                <div id={styles.searchedPlace}>
                  <span>Hydrabad Central India Transport 17 Sep - 20 Sep | 3 Guests</span>
                </div>
                <div id={styles.searchedPlace}>
                  <span>Hydrabad Central India Transport 17 Sep - 20 Sep | 3 Guests</span>
                </div>
                <div id={styles.searchedPlace}>
                  <span>Hydrabad Central India Transport 17 Sep - 20 Sep | 3 Guests</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  hotelListingDataRequest: (payload) => dispatch(hotelListingDataRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeBanner);
