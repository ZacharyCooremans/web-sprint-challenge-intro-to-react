// This is for the fake API. Do not delete!
import React from "react";
//import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { worker } from "./mocks/browser";
import { render } from "@testing-library/react";
worker.start();

//ReactDOM.render(<App />, document.getElementById("#root"));
render(
    <App />,
    document.querySelector('#root')
)
