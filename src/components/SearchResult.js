import React, { Component } from "react";
import { Paper } from "@material-ui/core";

export default class SearchResult extends Component {
  render() {
    return (
      <div>
        <Paper>
          <span>
            <h2>
              {this.props.facility.code}|{this.props.facility.name}
            </h2>
          </span>
          <h5>{this.props.facility.official_name}</h5>
        </Paper>
      </div>
    );
  }
}
