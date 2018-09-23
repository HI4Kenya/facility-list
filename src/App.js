import React, { Component } from "react";
import HomePage from "./components/HomePage";
import ResultsPage from "./components/ResultsPage";
import { BrowserRouter, Route } from "react-router-dom";
import { searchTerm } from "./utils/worker.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.searchTerm = this.searchTerm.bind(this);
    this.state = {
      results: []
    };
  }

  searchTerm(term) {
    console.log("Inside the App.js searching ", term, "....");

    searchTerm(term).then(res => {
      this.setState({
        results: res
      });
    });
  }
  componentWillMount() {}

  render() {
    console.log("app.js,", this.state.results);
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
                  term={"Kenya"}
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
