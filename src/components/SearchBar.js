import React from "react";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
  state = {
    searchterm: ""
  };

  search() {
    this.props.search(this.state.searchterm);
  }
  queryTermChangedHandler(e) {
    e.preventDefault();
    this.setState({ searchterm: e.target.value });
  }
  render() {
    return (
      <div className="searchbar">
        <div className="input-group input-group-lg">
          <div className="input-group-append">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              <i className="material-icons">filter_list</i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
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
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.search.bind(this)}
            >
              <i className="material-icons">search</i>
            </button>
            <div className="input-group-append">
              <span className="input-group-text" id="inputGroup-sizing-lg">
                <i className="material-icons">location_on</i>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
