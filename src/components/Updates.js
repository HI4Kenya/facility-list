import React, { Component } from "react";
import { runDHIS2Query } from "../utils/worker.js";

class Updates extends Component {
  constructor(props) {
    super(props);
    this.state = { mfl_list: [], dhis2_list: [] };
  }

  componentWillMount() {
    this.state.mfl_list.map(mfl => {
      /*  runDHIS2Query("/organisationUnits.json?filter=code:eq:" + mfl.code).then(
        function fun(data) {
          this.state.dhis2_list.push(data);
        }
      ); */
    });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">KMHFL</th>
              <th scope="col">DHIS2</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {/*             {this.state.mfl_list.map(facility => {
              return (
                <div>
                  <button
                    class="btn btn-primary"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    {facility.name}
                  </button>
                  <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                      <tr>
                        <td>{facility.name}</td>
                        <td>{this.state.dhiseq.displayName}</td>
                        <th scope="col">
                          {this.state.dhiseq.name == facility.name ? "Y" : "N"}
                        </th>
                      </tr>
                      <tr>
                        <td>{facility.code}</td>
                        <th scope="col">
                          {this.state.dhiseq.CODE == facility.code ? "Y" : "N"}
                        </th>
                      </tr>
                      <tr>
                        <td>long lat</td>
                        <td>{this.state.dhiseq.lat_long}</td>
                      </tr>
                    </div>
                  </div>
                </div>
              );
            })} */}
          </tbody>
        </table>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Updates;
