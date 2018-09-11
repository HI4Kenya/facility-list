import React from "react";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
  state = {
    searchterm: ""
  };

  search() {
    console.log(this.state.searchterm);
    this.props.search(this.state.searchterm);
  }
  queryTermChangedHandler(e) {
    e.preventDefault();
    this.setState({ searchterm: e.target.value });
  }
  render() {
    return (
      <div className="searchbar">
        <form onSubmit={this.search.bind(this)}>
          <div class="input-group input-group-lg">
            <div class="input-group-append">
              <span class="input-group-text" id="inputGroup-sizing-lg">
                <i class="material-icons">filter_list</i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              value={this.state.searchterm}
              onChange={this.queryTermChangedHandler.bind(this)}
              placeholder="Search Facility Name or code or Location..."
              aria-label="Search Facility Name or code or Location..."
            />
            <div className="input-group-append">
              <button
                className="input-group-text"
                id="inputGroup-sizing-lg"
                class="btn btn-outline-secondary"
                type="button"
                onClick={this.search.bind(this)}
              >
                <i class="material-icons">search</i>
              </button>
              <div class="input-group-append">
                <span class="input-group-text" id="inputGroup-sizing-lg">
                  <i class="material-icons">location_on</i>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
