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
      results: []
    };
    this.search = this.search.bind(this);
    this.runQuery = this.runQuery.bind(this);
  }

  search(queryterm) {
    this.props.search(queryterm);
  }

  runQuery(q) {
    this.props.runQuery(q);
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
        <NavBar
          search={this.search}
          term={this.props.term}
          runQuery={this.runQuery}
        />

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
              <ResolutionReports results={currentres} />
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="co
              ntact-tab"
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
