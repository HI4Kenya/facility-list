import $ from "jquery";
var token_url = "http://api.kmhfltest.health.go.ke/o/token/";
var client_id = "a3UXT427j160XpW1CcmMWqq7FLdkgTfH2NZlDHzV";
var client_secret =
  "Lf3lZv9XYG2p3S7nsy2sy580mDuB9ajDY6M39FIfEEzhNLua1LBY1LB1EV0NdQFClsqSvUnvpkDi8V7XTiVEXIzLtzH3MCMcO3SQblzbqlhpy97d2TamfSDsNoa6HVrJ";
var facilities_endpoint =
  "http://api.kmhfltest.health.go.ke/api/facilities/facilities/";
var dhis2url = "http://197.136.81.99:8082/test/api";
var mfl_endpoint = "http://api.kmhfltest.health.go.ke/api/";
var mfl_client_id = "a3UXT427j160XpW1CcmMWqq7FLdkgTfH2NZlDHzV";
var mfl_client_secret =
  "Lf3lZv9XYG2p3S7nsy2sy580mDuB9ajDY6M39FIfEEzhNLua1LBY1LB1EV0NdQFClsqSvUnvpkDi8V7XTiVEXIzLtzH3MCMcO3SQblzbqlhpy97d2TamfSDsNoa6HVrJ";
var mfl_username = "test@mail.com";
var mfl_password = "test@1234";
var dhis2_endpoint = "https://test.hiskenya.org/kenya/api/";
var dhis2username = "gray";
var dhis2password = "Ourgroup1.";

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

export async function customQuery(url) {
  console.log(url);
  var res = await getToken().then(async function my(token) {
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

export async function customMFL(query) {
  var res = await getToken().then(async function my(token) {
    var settings = {
      async: true,
      crossDomain: true,
      url: mfl_endpoint + query,
      method: "GET",
      headers: {
        Authorization: "Bearer " + token.access_token,
        "Cache-Control": "no-cache"
      }
    };
    console.log(mfl_endpoint + query);
    return await $.ajax(settings).done(function(response) {
      return response.results;
    });
  });
  return res.results;
}

export async function getCounties() {
  var res = await getToken().then(async function my(token) {
    //console.log("gotten token in query", token.access_token);

    var settings = {
      async: true,
      crossDomain: true,
      url:
        "http://api.kmhfltest.health.go.ke/api/common/counties/?page_size=47&format=json",
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
  localStorage.setItem("mfl_counties", JSON.stringify(res.results));
}

export async function getSubCounties() {
  var res = await getToken().then(async function my(token) {
    //console.log("gotten token in query", token.access_token);

    var settings = {
      async: true,
      crossDomain: true,
      url:
        "http://api.kmhfltest.health.go.ke/api/common/sub_counties/?page_size=298&format=json",
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
  localStorage.setItem("mfl_subcounties", JSON.stringify(res.results));
}
export async function getWards() {
  var res = await getToken().then(async function my(token) {
    //console.log("gotten token in query", token.access_token);

    var settings = {
      async: true,
      crossDomain: true,
      url:
        "http://api.kmhfltest.health.go.ke/api/common/wards/?page_size=1450&format=json",
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
  localStorage.setItem("mfl_wards", JSON.stringify(res.results));
}
export async function getServices() {
  var res = await getToken().then(async function my(token) {
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "http://api.kmhfltest.health.go.ke/api/facilities/services/?page_size=92&format=json",
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
  localStorage.setItem("mfl_services", JSON.stringify(res.results));
}

export async function getOwners() {
  var res = await getToken().then(async function my(token) {
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "http://api.kmhfltest.health.go.ke/api/facilities/owners/?page_size=23&format=json",
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
  localStorage.setItem("mfl_owners", JSON.stringify(res.results));
}
export async function getOwnerTypes() {
  var res = await getToken().then(async function my(token) {
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "http://api.kmhfltest.health.go.ke/api/facilities/owner_types/?page_size=6&format=json",
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
  localStorage.setItem("mfl_ownertypes", JSON.stringify(res.results));
}
export async function getGeoCodes() {
  var res = await getToken().then(async function my(token) {
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "http://api.kmhfltest.health.go.ke/api/facilities/facilities/?fields=lat_long,name&format=json&page_size=11133",
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
  localStorage.setItem("mfl_geocodes", JSON.stringify(res.results));
}
export async function getCodes() {
  var res = await getToken().then(async function my(token) {
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "http://api.kmhfltest.health.go.ke/api/facilities/facilities/?fields=code&format=json&page_size=11133",
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
  localStorage.setItem("mfl_codes", JSON.stringify(res.results));
}
if (!localStorage.getItem("mfl_counties")) {
  getOwnerTypes();
  getOwners();
  getWards();
  getSubCounties();
  getCounties();
  getServices();
  getCodes();
}

export async function runDHIS2Query(query) {
  var settings = {
    async: true,
    crossDomain: true,
    url: dhis2_endpoint + query,
    method: "GET",
    headers: {
      Authorization: `Basic ${btoa(dhis2username + ":" + dhis2password)}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  return $.ajax(settings).done(function(response) {
    return response;
  });
}

export async function updatedhis2(orgid, payload) {
  var payl = JSON.stringify(payload);
  console.log(payl);
  var settings = {
    async: true,
    crossDomain: true,
    url: dhis2_endpoint + "organisationUnits/" + orgid,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(dhis2username + ":" + dhis2password)}`
    },
    processData: false,
    data: payl
    //'{\n "coordinates":"[12,22]",\n "name":"South Eastern Kenya University",\n "shortName":"SEKU",\n "openingDate":"1899-12-26T23:27:16.000"\n}'
  };
  console.log(settings.data);
  return await $.ajax(settings).done(function(response) {
    //console.log(response);

    return response;
  });
}
