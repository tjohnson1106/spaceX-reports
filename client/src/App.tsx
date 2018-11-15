import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { ApolloProvider } from "react-apollo";

import logo from "./assets/";
import "./App.css";
import Launches from "./components/Launches";
import LaunchFlight from "./components/LaunchFlight";

export const App = () => (
  <Router>
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
      <Route exact path="/" component={Launches} />
      <Route exact path="/launch/:flight_number" component={LaunchFlight} />
    </div>
  </Router>
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
