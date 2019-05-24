import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import GetInTouch from "./GetInTouch";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <GetInTouch />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
