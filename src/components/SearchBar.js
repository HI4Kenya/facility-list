import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(e) {
    e.preventDefault();
    var queryterm = document.getElementById("query").value;
    this.props.search(queryterm);
  }

  render() {
    return (
      <div
        className={this.props.cname}
        style={{
          borderRadius: "30px"
        }}
      >
        <div
          className="input-group input-group-lg"
          style={{
            height: "50px",
            lineHeight: "100px",
            boxShadow: "1px 2px 3px  #ccc",
            border: "none",
            backgroundColor: "white"
          }}
        >
          <div className="input-group-prepend">
            <button
              className="input-group-text btn btn-primary filtersbtn "
              id="inputGroup-sizing-lg"
              data-toggle="collapse"
              data-target="#filters_options"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={{
                backgroundColor: "#fff",
                height: "50px",
                cursor: "pointer",
                borderRadius: "10px",
                border: "0"
              }}
            >
              <i
                className="material-icons"
                style={{ color: "rgb(1, 126, 199)" }}
              >
                filter_list
              </i>
            </button>
          </div>
          <form
            autoComplete="off"
            onSubmit={this.searchHandler.bind(this)}
            style={{ width: "85%" }}
          >
            <input
              type="text"
              className="form-control"
              style={{
                height: "50px",
                lineHeight: "100px",
                boxShadow: "0px 0px 0px  #ccc",
                border: "none",
                borderRadius: "0"
              }}
              id="query"
              placeholder="Search Facility Name, MFL code or Location..."
              aria-label="Search Facility Name, MFL code or Location..."
              aria-describedby="button-addon4"
            />
          </form>
          <div className="input-group-append" id="button-addon4">
            <button
              className="btn btn-outline-secondary"
              style={{ display: "none" }}
              type="button"
            >
              smart detect out
            </button>
            <button
              href="#"
              className="input-group-text"
              id="inputGroup-sizing-lg"
              style={{
                backgroundColor: "#ffffff",
                height: "50px",
                width: "10%",
                lineHeight: "100px",
                border: "none",
                borderRadius: "0"
              }}
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              <i className="material-icons" style={{ color: "#0584ec" }}>
                location_on
              </i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
