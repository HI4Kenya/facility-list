import React, { Component } from "react";

class FilterOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counties: [],
      services: [],
      sub_counties: []
    };
  }
  render() {
    let dtent = "collapse bg-light " + this.props.cname;
    return (
      <div id="filters_options" className={dtent}>
        <div className="card card-body bg-light " style={{ border: "none" }}>
          <div className="row">
            <div className="col">
              <div className="filter_option">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="county"
                  name="county"
                />
              </div>
            </div>
            <div className="col">
              <div className="filter_option">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="sub county"
                  name="sub_county"
                />
              </div>
            </div>
            <div className="col">
              <div className="filter_option">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="ward"
                  name="ward"
                />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <div className="filter_option">
                <select className="form-control form-control-sm" name="service">
                  <option>choose service</option>
                </select>
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
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="No. of Cots"
                  name="no_cots"
                />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <select className="form-control form-control-sm" name="service">
                <option>KEMPH Level</option>
              </select>
            </div>
            <div className="col">
              <div className="filter_option">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Facility Owner"
                  name="no_cots"
                />
              </div>
            </div>
            <div className="col">
              <div className="filter_option">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Owner category"
                  name="no_cots"
                />
              </div>
            </div>

            <div className="col">
              <div className="filter_option">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Facility Type"
                  name="no_cots"
                />
              </div>
            </div>
            <div className="col">
              <div className="filter_option">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Operational Status"
                  name="no_cots"
                />
              </div>
            </div>
            <div className="col">
              <div className="filter_option">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Has Beds"
                  name="no_cots"
                />
              </div>
            </div>
            <div className="col">
              <div className="filter_option">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Has Cots"
                  name="no_cots"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterOptions;
