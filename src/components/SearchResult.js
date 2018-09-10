import React, { Component } from "react";
import { ListItem } from "material-ui";

export default class SearchResult extends Component {
  render() {
    return (
      <li>
        <div>
          <h3>{this.props.facility.name}</h3>
          <h4>{this.props.facility.code}</h4>
          <h4>{this.props.facility.official_name}</h4>
        </div>
      </li>
    );
  }
}
