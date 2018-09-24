import React, { Component } from "react";
import SearchResults from "./SearchResults";
import ResolutionReports from "./ResolutionReports";
import Updates from "./Updates";
import NavBar from "./NavBar";
import "./ResultsPage.css";

class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      term: ""
    };
    this.search = this.search.bind(this);
  }

  search(queryterm) {
    console.log("Inside ResultsPage search fn", queryterm);
    this.setState({
      results: this.state.results,
      term: queryterm
    });
    this.props.search(queryterm);
  }

  componentWillReceiveProps(nxt) {
    var currentres = nxt.results;
    this.setState({
      results: currentres
    });
  }
  render() {
    var currentres = this.props.results;
    return (
      <div className="resultspage">
        <NavBar search={this.search} term={this.state.term} />
        <div className="" style={{ paddingLeft: "177px" }}>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <SearchResults
                results={currentres}
                progress={this.props.progress}
              />
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <ResolutionReports />
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <Updates />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsPage;
