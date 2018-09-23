import React, { Component } from "react";
import Facility from "./Facility";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentWillReceiveProps(nxt) {
    var nt = nxt.results.results;
    this.setState({
      results: nt
    });
  }
  render() {
    console.log(this.state.results);
    if (this.state.results !== undefined) {
      return this.state.results.map(function eachfacility(facility) {
        return <Facility key={facility.id} facility={facility} />;
      });
    }
  }
}

export default SearchResults;
