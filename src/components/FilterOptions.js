import React, { Component } from "react";

class FilterOptions extends Component {
  constructor(props) {
    super(props);
    var counties = JSON.parse(localStorage.getItem("mfl_counties"));
    var sub_counties = JSON.parse(localStorage.getItem("mfl_subcounties"));
    var wards = JSON.parse(localStorage.getItem("mfl_wards"));
    var services = JSON.parse(localStorage.getItem("mfl_services"));
    var owners = JSON.parse(localStorage.getItem("mfl_owners"));
    var owners_types = JSON.parse(localStorage.getItem("mfl_ownertypes"));
    this.state = {
      counties: counties,
      sub_counties: sub_counties,
      wards: wards,
      services: services,
      owners: owners,
      owners_types: owners_types,
      query: ""
    };
    this.runQuery = this.runQuery.bind(this);
  }

  runQuery() {
    var county = document.getElementById("county").value;
    var subcounty = document.getElementById("sub_county").value;
    var ward = document.getElementById("county").value;

    this.state.query += "county=" + county;

    /* this.state.query += "&sub_county=" + subcounty;

    this.state.query += "&ward=" + ward; */

    /* console.log(this.state.query);
    this.props.runQuery(this.state.query); */
  }
  render() {
    let dtent = "collapse bg-secondary " + this.props.cname;
    return (
      <div id="filters_options" className={dtent}>
        <div className="card card-body bg-secondary " style={{}}>
          <div className="row">
            <div className="col">
              <div className="filter_option">
                <select id="county" className="form-control form-control-sm">
                  <option>select county</option>
                  {this.state.counties.map(county => (
                    <option
                      value={county.id}
                      className="form-control form-control-sm"
                    >
                      {county.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col">
              <div className="filter_option">
                <select
                  id="sub_county"
                  className="form-control form-control-sm"
                >
                  <option>select sub county</option>
                  {this.state.sub_counties.map(sub_county => (
                    <option value={sub_county.id}>{sub_county.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col">
              <div className="filter_option">
                <select id="ward" className="form-control form-control-sm">
                  <option>select ward</option>
                  {this.state.wards.map(ward => (
                    <option value={ward.id}>{ward.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col">
              <div className="filter_option">
                <select id="service" className="form-control form-control-sm">
                  <option>choose service</option>
                  {this.state.services.map(service => (
                    <option value={service.id}>{service.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <div className="filter_option">
                <div class="input-group-text">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />{" "}
                  Has Beds
                </div>
              </div>
            </div>
            <div className="col">
              <div className="filter_option">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="No of beds"
                  name="no_beds"
                />
              </div>
            </div>
            <div className="col">
              <div className="filter_option">
                <div class="input-group-text">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                    placeholder="has cots"
                  />
                  Has Cots
                </div>
              </div>
            </div>
            <div className="col">
              <div className="filter_option">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="No. of Cots"
                  name="no_cots"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <select className="form-control form-control-sm" id="kemph_level">
                <option>KEMPH Level</option>
                <option value="1">Level 1</option>
                <option value="2">Level 2</option>
                <option value="3">Level 3</option>
                <option value="4">Level 4</option>
                <option value="5">Level 5</option>
                <option value="6">Level 6</option>
              </select>
            </div>
            <div className="col">
              <div className="filter_option">
                <select id="owner" className="form-control form-control-sm">
                  <option>select owner</option>
                  {this.state.owners.map(owner => (
                    <option
                      value={owner.id}
                      className="form-control form-control-sm"
                    >
                      {owner.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col">
              <div className="filter_option">
                <select
                  id="owner_type"
                  className="form-control form-control-sm"
                >
                  <option>select owner type</option>
                  {this.state.owners_types.map(owner_type => (
                    <option
                      value={owner_type.id}
                      className="form-control form-control-sm"
                    >
                      {owner_type.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col">
              <div className="filter_option">
                <div class="input-group-text">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                  Operational?
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={this.runQuery.bind(this)}
          className="btn btn-outline-primary"
        >
          search
        </button>
      </div>
    );
  }
}

export default FilterOptions;
