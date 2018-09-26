import React, { Component } from "react";
import HomePage from "./components/HomePage";
import ResultsPage from "./components/ResultsPage";
import { BrowserRouter, Route } from "react-router-dom";
import { searchTerm, query, getFacilities } from "./utils/worker.js";

var counties = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.searchTerm = this.searchTerm.bind(this);
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

  componentWillMount() {
    query(
      "http://api.kmhfltest.health.go.ke/api/common/counties/?format=json&page_size=47"
    ).then(function f(data) {
      counties = data;
    });
    getFacilities().then(function f(facilities) {
      //console.log(facilities);
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
                <HomePage search={this.searchTerm} />
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
