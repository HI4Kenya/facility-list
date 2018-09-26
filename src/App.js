import React, { Component } from "react";
import HomePage from "./components/HomePage";
import ResultsPage from "./components/ResultsPage";
import { BrowserRouter, Route } from "react-router-dom";
import { runDHIS2Query, searchTerm, customQuery } from "./utils/worker.js";
var counties = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.searchTerm = this.searchTerm.bind(this);
    this.runQuery = this.runQuery.bind(this);
    this.state = {
      results: [],
      progress: 0,
      term: ""
    };
  }

  searchTerm(term) {
    searchTerm(term).then(res => {
      this.setState({
        results: res,
        progress: 1,
        term: term
      });
    });
  }

  runQuery(query) {
    customQuery(
      "http://api.kmhfltest.health.go.ke/api/facilities/facilities/?" +
        query +
        "&format=json"
    ).then(res => {
      this.setState({
        results: res,
        progress: 1,
        term: "query"
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact={true}
            path="/"
            render={() => (
              <div className="min">
                <HomePage runQuery={this.runQuery} search={this.searchTerm} />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/results"
            render={() => (
              <div className="results">
                <ResultsPage
                  search={this.searchTerm}
                  results={this.state.results}
                  term={this.state.term}
                  progress={this.state.progress}
                  runQuery={this.runQuery}
                />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
