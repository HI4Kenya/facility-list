import React, { Component } from "react";
import { runDHIS2Query } from "../utils/worker.js";
import { updatedhis2 } from "../utils/worker.js";
import $ from "jquery";
import jQuery from "jquery";

class ResolutionReports extends Component {
  constructor(props) {
    super(props);
    this.state = { resolutions: [] };
    this.updateName = this.updateName.bind(this);
    this.updateGeos = this.updateGeos.bind(this);
  }
  updateName(e) {
    var resolute = this.state.resolutions[parseInt(e.target.value)];
    updatedhis2(e.target.id, {
      coordinates: JSON.stringify(resolute.dhis2_latlong),
      name: resolute.mfl_name,
      shortName: resolute.shortName,
      openingDate: resolute.openingDate
    }).then(res => {
      if (res.httpStatusCode === 200) {
        e.preventDefault();
        jQuery.noConflict();
        $("#exampleModalCenter").modal("hide");
      }
    });
  }
  updateGeos(e) {
    var resolute = this.state.resolutions[parseInt(e.target.value)];
    if (resolute.mfl_latlong[0] === 0 && resolute.mfl_latlong[1] === 0) {
      alert("You are about to OVERIDE DHIS2 COORDINATES WITH 0,0");
      //WE NEED CLARIFICATION ON THIS PART
    } else {
      updatedhis2(e.target.id, {
        coordinates: JSON.stringify([
          resolute.mfl_latlong[1],
          resolute.mfl_latlong[0]
        ]),
        name: resolute.dhis2_name,
        shortName: resolute.shortName,
        openingDate: resolute.openingDate
      }).then(res => {
        if (res.httpStatusCode === 200) {
          jQuery("#exampleModalCenter").style("display:none");
        }
      });
    }
  }
  render() {
    var resolute_id = -1;
    return (
      <div className="reports">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">DHIS2</th>
              <th scope="col">MFL</th>
            </tr>
          </thead>
          <tbody>
            {this.state.resolutions.map(resolute => {
              resolute_id = resolute_id + 1;
              return (
                <tr>
                  <div
                    className={
                      resolute.name_status ? "table-success" : "table-danger"
                    }
                  >
                    <td>{resolute.dhis2_name}</td>
                    <td>{resolute.mfl_name}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        style={
                          resolute.name_status
                            ? { display: "none" }
                            : { display: "block" }
                        }
                        onClick={this.updateName.bind(this)}
                        id={resolute.orgID}
                        value={resolute_id}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        UPDATE DHIS2
                      </button>
                    </td>
                  </div>
                  <br />
                  <div
                    className={
                      resolute.code_status ? "table-success" : "table-danger"
                    }
                  >
                    <td>{resolute.dhis2_code}</td>
                    <td>{resolute.mfl_code}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        style={
                          resolute.code_status
                            ? { display: "none" }
                            : { display: "block" }
                        }
                      >
                        UPDATE DHIS2
                      </button>
                    </td>
                  </div>
                  <br />
                  <div
                    className={
                      resolute.latlong_status ? "table-success" : "table-danger"
                    }
                  >
                    <td>
                      {"[" +
                        resolute.dhis2_latlong[0] +
                        "," +
                        resolute.dhis2_latlong[1] +
                        "]"}
                    </td>
                    <td>
                      {"[" +
                        resolute.mfl_latlong[0] +
                        "," +
                        resolute.mfl_latlong[1] +
                        "]"}
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        style={
                          resolute.latlong_status
                            ? { display: "none" }
                            : { display: "block" }
                        }
                        onClick={this.updateGeos.bind(this)}
                        id={resolute.orgID}
                        value={resolute_id}
                      >
                        UPDATE DHIS2
                      </button>
                    </td>
                  </div>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Updating DHIS2...
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentWillReceiveProps(nxt) {
    var resolutions = [];
    nxt.results.results.map(facility => {
      runDHIS2Query(
        "organisationUnits.json?filter=code:eq:" + facility.code
      ).then(resp => {
        if (resp.pager.total === 1) {
          runDHIS2Query(
            "organisationUnits/" + resp.organisationUnits[0].id + ".json"
          ).then(respb => {
            var dhis2_latlong =
              respb.coordinates !== undefined
                ? JSON.parse(respb.coordinates)
                : [0, 0];
            var mfl_latlong =
              facility.lat_long !== null ? facility.lat_long : [0, 0];
            console.log(dhis2_latlong, "vs", facility.lat_long);

            resolutions.push({
              orgID: resp.organisationUnits[0].id,
              mfl_name: facility.name,
              dhis2_name: respb.displayName,
              name_status: facility.name === respb.displayName ? 1 : 0,
              mfl_code: facility.code,
              dhis2_code: parseInt(respb.code),
              code_status: facility.code === parseInt(respb.code) ? 1 : 0,
              mfl_latlong: mfl_latlong,
              dhis2_latlong: dhis2_latlong,
              latlong_status:
                dhis2_latlong[1] === mfl_latlong[0] &&
                dhis2_latlong[0] === mfl_latlong[1]
                  ? 1
                  : 0,
              openingDate: respb.openingDate,
              shortName: respb.shortName
            });
            this.setState({ resolutions: resolutions });
          });
        } else {
          runDHIS2Query(
            "organisationUnits.json?filter=displayName:ilike:" + facility.name
          ).then(function nameMatch(respa) {
            if (respa.pager.total === 1) {
            } else {
              console.log("code and name don't match,updating name");
            }
          });
        }
      });
    });
  }
}

export default ResolutionReports;
