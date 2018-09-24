import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(<HomePage />, document.getElementById("root"));
registerServiceWorker();
