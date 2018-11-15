import React, { Component } from "react";

// import { ApolloProvider } from "react-apollo";

import logo from "./assets/";
import "./App.css";
import Launches from "./components/Launches";

export const App = () => (
  <div className="App">
    <img
      src={logo}
      alt="SpaceX"
      style={{
        width: 300,
        display: "block",
        margin: "auto"
      }}
    />
    <Launches />
  </div>
);

// export class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <img
//           src={logo}
//           alt="SpaceX"
//           style={{
//             width: 300,
//             display: "block",
//             margin: "auto"
//           }}
//         />
//         <Launches />
//       </div>
//     );
//   }
// }
