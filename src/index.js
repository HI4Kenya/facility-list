import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import $ from "jquery";
var dhis2 = {};
//fetch facilities and create a json hierarchy
console.log("Inside Index.js setting up...");
async function getCountry() {
  var settings = {
    async: true,
    crossDomain: true,
    url:
      "http://197.136.81.99:8082/test/api/organisationUnits/?filter=level:eq:1",
    method: "GET",
    headers: {
      Authorization: `Basic ${btoa(
        "peterkahenyanjoki@gmail.com:Cephaspk@0100100110"
      )}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  var country = await $.ajax(settings).done(function(response) {
    return response;
  });
  dhis2 = country.organisationUnits[0];
  return country;
}

async function getCounty() {
  console.log(dhis2);
  var x = await getCountry();
  console.log(dhis2);
  var settings = {
    async: true,
    crossDomain: true,
    url:
      "http://197.136.81.99:8082/test/api/organisationUnits/?filter=level:eq:2&filter=parent.id:eq:" +
      x.organisationUnits[0].id,
    method: "GET",
    headers: {
      Authorization: `Basic ${btoa(
        "peterkahenyanjoki@gmail.com:Cephaspk@0100100110"
      )}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  var county = await $.ajax(settings).done(function(response) {
    return response;
  });
  dhis2.counties = county.organisationUnits;
  return county.organisationUnits;
}

async function getSubCounty() {
  console.log(dhis2);
  var x = await getCounty();
  console.log(dhis2);
  x.map(async function some(x) {
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "http://197.136.81.99:8082/test/api/organisationUnits/?filter=level:eq:3&filter=parent.id:eq:" +
        x.id,
      method: "GET",
      headers: {
        Authorization: `Basic ${btoa(
          "peterkahenyanjoki@gmail.com:Cephaspk@0100100110"
        )}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    //console.log(settings);
    var sub = await $.ajax(settings).done(function(response) {
      //console.log(response);
      return response;
    });
    x.subcounties = sub.organisationUnits;
  });
}
async function getWard() {
  console.log(dhis2);
  var x = await getSubCounty();
  //console.log(dhis2.counties);

  for (let index = 0; index < dhis2.counties.length; index++) {
    var element = dhis2.counties[index];
    console.log(element);
  }
  dhis2.counties.map(function loopsub(county) {
    var current_county = county;

    //console.log(current_county.subcounties);
    /* county.subcounties.map(async function some(x) {
      var settings = {
        async: true,
        crossDomain: true,
        url:
          "http://197.136.81.99:8082/test/api/organisationUnits/?filter=level:eq:5&filter=parent.id:eq:" +
          x.id,
        method: "GET",
        headers: {
          Authorization: `Basic ${btoa(
            "peterkahenyanjoki@gmail.com:Cephaspk@0100100110"
          )}`,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };
      var wards = await $.ajax(settings).done(function(response) {
        return response;
      });
      x.wards = wards;
      console.log(wards);
    }); */
  });
}

getWard();
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
