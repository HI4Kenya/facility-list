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
                  placeholder="county"
                  name="county"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">KEMPH LEVEL</div>
            <div className="col">Facillity Owner</div>
            <div className="col">Facility Owner Category</div>
            <div className="col">Facility Type</div>
            <div className="col">Operational Status</div>
            <div className="col">Has Beds</div>
            <div className="col">Has Cots</div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterOptions;
