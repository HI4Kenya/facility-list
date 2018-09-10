import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.querySelector("#root");
var results = [];
const headers = {
  headers: {
    Authorization: "Bearer LtW29Wxa7lAnNj8EdyVMr2h5ISWhSF"
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
      results = jsonData.results;
      ReactDOM.render(<App results={results} />, rootElement);
    })
    .catch(error => {
      console.log("Error", error);
    });
}
