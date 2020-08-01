import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
// import { hotelEntityDataRequest, hotelBillingDataRequest, hotelReviewDataRequest } from "../../../redux/authentication/actions";
import { connect } from "react-redux";
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from "react-places-autocomplete";
import styles from "./homeBanner/HomeBanner.module.css";
import { saveData } from "../../redux/authentication/localStorage";

const AutocompleteForm = () => {
  const [address, setAddress] = useState("");

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    setAddress(address);
    saveData("address", address);
    const data = geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        saveData("location", latLng);
      })
      .catch((error) => console.error("Error", error));
    console.log(data);
  };
  return (
    <>
      <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div style={{ width: "285px" }}>
            <input
              style={{ height: "67px" }}
              aria-expanded="false"
              id={styles.autoComplete}
              {...getInputProps({
                placeholder: "Please enter city name...",
              })}
            />
            <div className="autocomplete-dropdown-container" style={{ position: "absolute", zIndex: "100", marginTop: "10px", padding: "8px!important" }}>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
                const style = suggestion.active
                  ? { backgroundColor: "#fafbfc", cursor: "pointer", borderRadius: "4px", padding: "14px 8px", fontSize: "16px; ", overflow: "hidden", textOverflow: "ellipsis" }
                  : { backgroundColor: "#ffffff", cursor: "pointer", borderRadius: "4px", padding: "14px 8px", fontSize: "16px; ", overflow: "hidden", textOverflow: "ellipsis" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>
                      <span className="pr-2">
                        <FontAwesomeIcon icon={faMapMarker} color="rgba(0, 0, 0, 0.5)" />
                      </span>
                      <span className="p-2">{suggestion.description}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  user: state.auth.user,
  entityData: state.auth.entityData,
  review: state.auth.review,
});

const mapDispatchToProps = (dispatch) => ({
  //   hotelEntityDataRequest: (payload) => dispatch(hotelEntityDataRequest(payload)),
  //   hotelBillingDataRequest: (payload) => dispatch(hotelBillingDataRequest(payload)),
  //   hotelReviewDataRequest: (payload) => dispatch(hotelReviewDataRequest(payload)),
});
// import React, { Component, useState} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar ,faLandmark, faFan, faToilet, faPersonBooth, faMusic,faHandHoldingWater,faMoneyBillWave,faBreadSlice,faWifi,faFire, faHotTub, faBed,faCheese, faRestroom,faParking, faThermometerEmpty, faChair, faTv, faSoap, faLocationArrow, faSearchLocation} from "@fortawesome/free-solid-svg-icons"
// // import {hotelEntityDataRequest,hotelBillingDataRequest,hotelReviewDataRequest} from "../../../redux/authentication/actions"
// import {connect} from "react-redux"
// import PlacesAutocomplete,{
//     geocodeByAddress,
//     geocodeByPlaceId,
//     getLatLng,
//   }  from 'react-places-autocomplete';

//  const AutocompleteForm =()=> {
//     const [address, setAddress] = useState("")

//   const handleChange = address => {
//     setAddress(address);
// };

// const handleSelect = address => {
//     setAddress(address);

//     const data = geocodeByAddress(address)
//       .then(results => getLatLng(results[0]))
//       .then(latLng => console.log('Success', latLng))
//       .catch(error => console.error('Error', error));
//         console.log(data)
//   };
//      return (
//        <>
//          <PlacesAutocomplete
//         value={address}
//         onChange={handleChange}
//         onSelect={handleSelect}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <input
//               {...getInputProps({
//                 placeholder: 'Search Places ...',
//                 className: 'location-search-input',
//               })}
//             />
//             <div className="autocomplete-dropdown-container">
//               {loading && <div>Loading...</div>}
//               {suggestions.map(suggestion => {
//                 const className = suggestion.active
//                   ? 'suggestion-item--active'
//                   : 'suggestion-item';
//                 // inline style for demonstration purpose
//                 const style = suggestion.active
//                   ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                   : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                 return (
//                   <div
//                     {...getSuggestionItemProps(suggestion, {
//                       className,
//                       style,
//                     })}
//                   >
//                     <span><FontAwesomeIcon icon={faSearchLocation}/>
//                         {suggestion.description}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//        </>
//      )
// }

// const mapStateToProps = (state) => ({
//   token: state.auth.token,
//     user: state.auth.user,
//     entityData: state.auth.entityData,
//     review: state.auth.review
// });

// const mapDispatchToProps = (dispatch) => ({
// //   hotelEntityDataRequest: (payload) => dispatch(hotelEntityDataRequest(payload)),
// //   hotelBillingDataRequest: (payload) => dispatch(hotelBillingDataRequest(payload)),
// //   hotelReviewDataRequest: (payload) => dispatch(hotelReviewDataRequest(payload)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteForm);
