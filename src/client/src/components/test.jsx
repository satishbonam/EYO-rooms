// import React from "react";
// import axios from "../utils/axiosInterceptor";
// import { useParams } from "react-router-dom";

// const test = (props) => {
//   console.log(props);
//   const handleRoute = () => {
//     let url = props.location.pathname;
//     let new_url = new URLSearchParams(url);
//     new_url.append("collections", "test");
//     var str = new_url.toString().split("%2F=&");
//     if (str.length > 1) {
//       str = str[1];
//     } else {
//       str = str[0].split("%2F");
//       str = str[1];
//     }
//     props.history.push(str);
//   };
//   return (
//     <button
//       onClick={() => {
//         handleRoute();
//         var params = new URLSearchParams();
//         params.append("collections", "Sanitised_Stays");
//         params.append("collections", "Sanitised_Stays");
//         console.log(params.toString());
//         axios
//           .get(
//             "/hotel_listinghg",
//             {}
//             //   {

//             // //   : {
//             // //     collections: "Sanitised_Stays",
//             // //   },
//             // }
//           )
//           .then((res) => console.log(res));
//       }}
//     >
//       axios
//     </button>
//   );
// };

// export default test;

import React, { Component } from "react";

export default class test extends Component {
  render() {
    return <div>
      
    </div>;
  }
}
