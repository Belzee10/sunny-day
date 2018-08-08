import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./css/styles.css";
import "./css/weather-icons.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
