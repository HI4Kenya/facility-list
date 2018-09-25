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
  var settings = {
    async: true,
    crossDomain: true,
    url: "http://api.kmhfltest.health.go.ke/api/common/counties/?format=json",
    method: "GET",
    headers: {
      Authorization: "Bearer 298YfxgUsCT1zyfvQdfMO8ejN3Nos4",
      "Cache-Control": "no-cache",
      "Postman-Token": "df589197-1303-41ce-9eed-cb768cda3148"
    }
  };

  $.ajax(settings).done(function(response) {
    console.log(response);
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
    console.log("starting search...");
    var res = await $.ajax(settings).done(function(response) {
      console.log(response.results);
      return response.results;
    });
    console.log("done search...");
    return res;
  });
  return res;
}
