import React, { Component } from "react";
import "./App.css";
import LogoAndName from "./components/LogoAndName";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";

export default class App extends Component {
  constructor() {
    super();
    this.search = this.search.bind(this);
    this.findName = this.findName.bind(this);
    this.state = {
      results: [],
      query: "",
      data: []
    };
  }
  findName(currentFacility) {
    return this.state.query === currentFacility.name;
  }

  search(query) {
    this.state.query = query;

    var myresults = [this.state.data.find(this.findName)];

    this.setState({
      results: myresults,
      query: "",
      data: [...this.state.data]
    });
    console.log("Done searching and found");
    console.log(this.state);
    if (!this.state.results) {
      alert("Nothing found");
    }
  }

  render() {
    var results = this.props.results;
    this.state.data = results;
    console.log("Inside App");
    console.log(this.state.data);
    return (
      <div className="App">
        <div>
          <LogoAndName />
          <SearchBar search={this.search} />
          <ResultsList list={this.state.results} />
        </div>
      </div>
    );
  }
}
