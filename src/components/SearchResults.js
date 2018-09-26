import React, { Component } from "react";
import Facility from "./Facility";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      count: 0,
      progress: 0
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

    var progress = "";
    if (this.state.progress === 1) {
      progress = "found " + this.state.count + " results";
      this.state.progress = 0;
    } else {
      progress = "searching...";
    }

    if (this.state.results !== undefined) {
      var id = 0;
      return (
        <div>
          <h5>{progress}</h5>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>

                <div id="#1">some value</div>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
                <div id="#2">some other value</div>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
          <div id="#1">some value</div>
          <div id="#2">some other value</div>
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
