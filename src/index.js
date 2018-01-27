import React from "react";
import ReactDOM from "react-dom";
import "./css/pure-required.css";
import "./css/index.css";
import App from "./js/App";
import { unregister } from './registerServiceWorker';

/* Renders react app to the screen */
ReactDOM.render(<App />, document.getElementById("root"));
unregister();