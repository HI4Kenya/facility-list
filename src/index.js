import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./bootstrap.min.css";

const rootElement = document.querySelector("#root");
var anything = [];
const headers = {
  headers: {
    Authorization: "Bearer iCRJMQNlMestplr0pgqPSM5fmEYgxj"
  }
};
getFacilities();
function getFacilities() {
  fetch(
    "http://api.kmhfltest.health.go.ke/api/facilities/facilities/?page=1&format=json",
    headers
  )
    .then(fetchData => fetchData.json())
    .then(jsonData => {
      anything = jsonData.results;
      ReactDOM.render(<App results={anything} />, rootElement);
    })
    .catch(error => {
      console.log("Error", error);
    });
}
