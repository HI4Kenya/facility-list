import React, { Component } from "react";
import Facility from "./Facility";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      count: 0
    };
  }

  componentWillReceiveProps(nxt) {
    var nt = nxt.results.results;
    this.setState({
      results: nt,
      count: nxt.results.count,
      progress: nxt.progress
    });
  }
  render() {
    console.log(this.state.results);
    console.log(this.state.count);
    console.log(this.state.progress);

    var progress = "searching...";
    if (this.state.progress == 1) {
      progress = "found " + this.state.count + " results";
    }

    if (this.state.results !== undefined) {
      var id = 0;
      return (
        <div>
          <h5>{progress}</h5>
          {this.state.results.map(function eachfacility(facility) {
            id = id + 1;
            return <Facility key={facility.id} id={id} facility={facility} />;
          })}
        </div>
      );
    }
  }
}

export default SearchResults;
