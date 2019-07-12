import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/styles.scss";

ReactDOM.render(<AppRouter />, document.getElementById("app"));
