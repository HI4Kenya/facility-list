import React, { Component } from "react";

class DHIS2Filters extends Component {
  constructor(props) {
    super(props);
    var counties = JSON.parse(
      localStorage.getItem("dhis2_county_names_and_id")
    );
    this.state = { counties: counties, subcounties: [] };
  }
  render() {
    return (
      <select>
        <option value={-1}>select county</option>
        {this.state.counties.map(county => (
          <option value={county.id} className="form-control form-control-sm">
            {county.displayName}
          </option>
        ))}
      </select>
    );
  }
}

export default DHIS2Filters;
