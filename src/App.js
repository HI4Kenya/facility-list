import React, { Component } from "react";
import HomePage from "./components/HomePage";
import ResultsPage from "./components/ResultsPage";
import { BrowserRouter, Route } from "react-router-dom";
import {
  runDHIS2Query,
  searchTerm,
  customQuery,
  customMFL
} from "./utils/worker.js";
var counties = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.searchTerm = this.searchTerm.bind(this);
    this.runQuery = this.runQuery.bind(this);
    this.state = {
      results: [],
      progress: 0,
      term: ""
    };
  }

  searchDhis2() {
    console.log("inside searchdhis2");
    this.setState({ results: [], resolution: [], status: 0 });
    runDHIS2Query(
      "organisationUnits.json?filter=level:eq:5&filter=displayName:ilike:" +
        this.state.term
    ).then(resp => {
      resp.organisationUnits.map(org => {
        runDHIS2Query("organisationUnits/" + org.id + ".json").then(
          org_unit => {
            var updated = this.state.results.concat(org_unit);
            this.setState({ results: updated, status: 1 });
            this.state.results.map(orgunit => {
              console.log("resolving...");
              customMFL(
                "facilities/facilities/?format=json&name=" +
                  orgunit.displayName +
                  "&code=" +
                  orgunit.code
              ).then(resp => {
                if (resp.results.length !== 1) {
                  console.log("Searching name...");
                  customMFL(
                    "facilities/facilities/?format=json&name=" +
                      orgunit.displayName
                  ).then(resp => {
                    if (resp.results.length !== 1) {
                      console.log("Searching code...");
                      customMFL(
                        "facilities/facilities/?format=json&" +
                          "&code=" +
                          orgunit.code
                      ).then(resp => {
                        if (resp.results.length !== 1) {
                          console.log("Facility does not exist in MFL");

                          var dhis2_latlong =
                            orgunit.coordinates !== null
                              ? orgunit.coordinates
                              : [0, 0];
                          var updated = this.state.resolution.concat({
                            present_in_mhfl: false,
                            dhis_id: "",
                            ward: orgunit.parent,
                            mfl_name: orgunit.name,
                            dhis2_name: "",
                            name_status: 0,
                            mfl_code: orgunit.code,
                            dhis2_code: 0,
                            code_status: 0,
                            mfl_latlong: mfl_latlong,
                            dhis2_latlong: null,
                            latlong_status: 0,
                            openingDate: orgunit.openingDate,
                            shortName: ""
                          });
                        } else {
                          var facility = resp.results[0];
                          console.log("KMHFL found by code", facility);
                          var dhis2_latlong =
                            orgunit.coordinates !== undefined
                              ? JSON.parse(orgunit.coordinates)
                              : [0, 0];
                          var mfl_latlong =
                            facility.lat_long !== null
                              ? facility.lat_long
                              : [0, 0];
                          var updated = this.state.resolution.concat({
                            present: true,
                            dhis_id: orgunit.id,
                            mfl_name: facility.name,
                            dhis2_name: orgunit.displayName,
                            name_status:
                              facility.name === orgunit.displayName ? 1 : 0,
                            mfl_code: facility.code,
                            dhis2_code: orgunit.code,
                            code_status:
                              facility.code === parseInt(orgunit.code) ? 1 : 0,
                            mfl_latlong: mfl_latlong,
                            dhis2_latlong: dhis2_latlong,
                            latlong_status:
                              dhis2_latlong[1] === mfl_latlong[0] &&
                              dhis2_latlong[0] === mfl_latlong[1]
                                ? 1
                                : 0,
                            openingDate: orgunit.openingDate,
                            shortName: orgunit.shortName
                          });
                          this.setState({ resolution: updated });
                        }
                      });
                    } else {
                      var facility = resp.results[0];
                      console.log("KMHFL found by name ", facility);
                      var dhis2_latlong =
                        orgunit.coordinates !== undefined
                          ? JSON.parse(orgunit.coordinates)
                          : [0, 0];
                      var mfl_latlong =
                        facility.lat_long !== null ? facility.lat_long : [0, 0];
                      var updated = this.state.resolution.concat({
                        present: true,
                        dhis_id: orgunit.id,
                        mfl_name: facility.name,
                        dhis2_name: orgunit.displayName,
                        name_status:
                          facility.name === orgunit.displayName ? 1 : 0,
                        mfl_code: facility.code,
                        dhis2_code: orgunit.code,
                        code_status:
                          facility.code === parseInt(orgunit.code) ? 1 : 0,
                        mfl_latlong: mfl_latlong,
                        dhis2_latlong: dhis2_latlong,
                        latlong_status:
                          dhis2_latlong[1] === mfl_latlong[0] &&
                          dhis2_latlong[0] === mfl_latlong[1]
                            ? 1
                            : 0,
                        openingDate: orgunit.openingDate,
                        shortName: orgunit.shortName
                      });
                      this.setState({ resolution: updated });
                    }
                  });
                } else {
                  var facility = resp.results[0];
                  console.log("KMHFL found by name and code ", facility);
                  var dhis2_latlong =
                    orgunit.coordinates !== undefined
                      ? JSON.parse(orgunit.coordinates)
                      : [0, 0];
                  var mfl_latlong =
                    facility.lat_long !== null ? facility.lat_long : [0, 0];
                  var updated = this.state.resolution.concat({
                    present: true,
                    dhis_id: orgunit.id,
                    mfl_name: facility.name,
                    dhis2_name: orgunit.displayName,
                    name_status: facility.name === orgunit.displayName ? 1 : 0,
                    mfl_code: facility.code,
                    dhis2_code: orgunit.code,
                    code_status:
                      facility.code === parseInt(orgunit.code) ? 1 : 0,
                    mfl_latlong: mfl_latlong,
                    dhis2_latlong: dhis2_latlong,
                    latlong_status:
                      dhis2_latlong[1] === mfl_latlong[0] &&
                      dhis2_latlong[0] === mfl_latlong[1]
                        ? 1
                        : 0,
                    openingDate: orgunit.openingDate,
                    shortName: orgunit.shortName
                  });
                  this.setState({ resolution: updated });
                }
              });
            });
          }
        );
      });
    });
  }
  searchTerm(term, system) {
    this.state.term = term;
    system === "dhis2"
      ? this.searchDhis2()
      : searchTerm(term).then(res => {
          this.setState({
            results: res,
            progress: 1,
            term: term
          });
        });
  }

  runQuery(query) {
    customQuery(
      "http://api.kmhfltest.health.go.ke/api/facilities/facilities/?" +
        query +
        "&format=json"
    ).then(res => {
      this.setState({
        results: res,
        progress: 1,
        term: "query"
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact={true}
            path="/"
            render={() => (
              <div className="min">
                <HomePage runQuery={this.runQuery} search={this.searchTerm} />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/results"
            render={() => (
              <div className="results">
                <ResultsPage
                  search={this.searchTerm}
                  results={this.state.results}
                  term={this.state.term}
                  progress={this.state.progress}
                  runQuery={this.runQuery}
                />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
