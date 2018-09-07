import React, { Component } from "react";
import "./App.css";
import LogoAndName from "./components/LogoAndName";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";

import Grid from "@material-ui/core/Grid";
import color from "@material-ui/core/colors/pink";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid spacing={16}>
          <LogoAndName />
          <SearchBar />
          <ResultsList />
        </Grid>
      </div>
    );
  }

  componentWillMount() {
    fetch(
      "http://api.kmhfltest.health.go.ke/api/facilities/facilities/?page=1&format=json",
      {
        headers: {
          Authorization: "Bearer ze5uDYpiqxPXZJCxinLahpOdDx9T6T",
          "Content-Type": "application/json"
        }
      }
    )
      .then(fetchData => fetchData.json())
      .then((jsonData.results) => {
        jsonData.map(facility, () => {

         { <SearchResult name={facility.name} />}
        });
      })
      .catch(error => {
        console.warn("error", error);
      });
  }
}

export default App;
