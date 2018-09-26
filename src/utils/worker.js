import $ from "jquery";
var token_url = "http://api.kmhfltest.health.go.ke/o/token/";
var client_id = "a3UXT427j160XpW1CcmMWqq7FLdkgTfH2NZlDHzV";
var client_secret =
  "Lf3lZv9XYG2p3S7nsy2sy580mDuB9ajDY6M39FIfEEzhNLua1LBY1LB1EV0NdQFClsqSvUnvpkDi8V7XTiVEXIzLtzH3MCMcO3SQblzbqlhpy97d2TamfSDsNoa6HVrJ";
var facilities_endpoint =
  "http://api.kmhfltest.health.go.ke/api/facilities/facilities/";

async function getToken() {
  var settings = {
    async: true,
    crossDomain: true,
    url: token_url,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cache-Control": "no-cache"
    },
    data: {
      username: "test@mail.com",
      password: "test@1234",
      grant_type: "password",
      client_id: client_id,
      client_secret: client_secret
    }
  };

  var y = await $.ajax(settings).done(function(response) {
    return response;
  });
  return y;
}

export async function query(url) {
  var res = await getToken().then(async function my(token) {
    //console.log("gotten token in query", token.access_token);

    var settings = {
      async: true,
      crossDomain: true,
      url: url,
      method: "GET",
      headers: {
        Authorization: "Bearer " + token.access_token,
        "Cache-Control": "no-cache"
      }
    };

    var res = await $.ajax(settings).done(function(response) {
      return response.results;
    });
    return res;
  });
  return res;
}

export async function getFacilities() {
  var settings = {
    async: true,
    crossDomain: true,
    url: "http://197.136.81.99:8082/test/api/organisationUnits",
    method: "GET",
    headers: {
      Authorization: `Basic ${btoa(
        "peterkahenyanjoki@gmail.com:Cephaspk@0100100110"
      )}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  return $.ajax(settings).done(function(response) {
    //console.log(response);
    return response;
  });
}
export async function getUserPermissions(params) {}
export async function assignDataSets(datasets, facilities) {
  var settings = {
    async: true,
    crossDomain: true,
    url:
      "http://197.136.81.99:8080/training/api/dataSets/vP9T265AHZB/organisationUnits/EdEUWUBHquV",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic cGV0ZXJrYWhlbnlhbmpva2lAZ21haWwuY29tOkNlcGhhc3BrQDAxMDAxMDAxMTA=",
      "Cache-Control": "no-cache",
      "Postman-Token": "ef7cb7d4-2c53-4c04-9533-5776a64a30b0"
    }
  };

  $.ajax(settings).done(function(response) {
    // console.log(response);
  });
}

export async function searchTerm(term) {
  var term_lowercase = term.toLowerCase();
  var res = await getToken().then(async function my(token) {
    var settings = {
      async: true,
      crossDomain: true,
      url:
        facilities_endpoint +
        "?search=" +
        term +
        "&" +
        "search=" +
        term_lowercase +
        "&page_size=5&format=json",
      method: "GET",
      headers: {
        Authorization: "Bearer " + token.access_token,
        "Cache-Control": "no-cache"
      }
    };
    //console.log("starting search...");
    var res = await $.ajax(settings).done(function(response) {
      //console.log(response.results);
      return response.results;
    });
    //console.log("done search...");
    return res;
  });
  return res;
}
