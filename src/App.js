import React, { Component } from "react";
import "./App.css";
import LogoAndName from "./components/LogoAndName";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";

export default class App extends Component {
  constructor() {
    super();
    this.search = this.search.bind(this);
    this.state = {
      results: [],
      query: "",
      data: []
    };
  }

  searchCounty(searchterm) {
    this.state.query = searchterm;
    var listofres = [];
    for (let x = 0; x < this.state.data.length; x++) {
      if (this.state.data[x].name.indexOf(this.state.query) !== -1) {
        listofres.push(this.state.data[x]);
        console.log(this.state.results);
      }
    }

    this.setState({
      results: listofres,
      query: searchterm,
      data: [...this.state.data]
    });
    console.log("Done searching and found");
    console.log(this.state);
    if (!this.state.results) {
      alert("Nothing found");
    }
  }

  searchSubCounty(searchterm) {
    this.state.query = searchterm;
    var listofres = [];
    for (let x = 0; x < this.state.data.length; x++) {
      if (this.state.data[x].name.indexOf(this.state.query) !== -1) {
        listofres.push(this.state.data[x]);
        console.log(this.state.results);
      }
    }

    this.setState({
      results: listofres,
      query: searchterm,
      data: [...this.state.data]
    });
    console.log("Done searching and found");
    console.log(this.state);
    if (!this.state.results) {
      alert("Nothing found");
    }
  }

  searchName(searchterm) {
    this.state.query = searchterm;
    var listofres = [];
    for (let x = 0; x < this.state.data.length; x++) {
      if (this.state.data[x].name.indexOf(this.state.query) !== -1) {
        listofres.push(this.state.data[x]);
        console.log(this.state.results);
      }
    }
    this.setState({
      results: listofres,
      query: searchterm,
      data: [...this.state.data]
    });
    console.log("Done searching and found");
    console.log(this.state);
    if (!this.state.results) {
      alert("Nothing found");
    }
  }

  searchCode(searchterm) {
    this.state.query = searchterm;
    var listofres = [];
    for (let x = 0; x < this.state.data.length; x++) {
      if (this.state.data[x].code.indexOf(this.state.query) !== -1) {
        listofres.push(this.state.data[x]);
        console.log(this.state.results);
      }
    }

    this.setState({
      results: listofres,
      query: searchterm,
      data: [...this.state.data]
    });
    console.log("Done searching and found");
    console.log(this.state);
    if (!this.state.results) {
      alert("Nothing found");
    }
  }
  search(searchterm) {
    this.state.query = searchterm;
    var listofres = [];
    for (let x = 0; x < this.state.data.length; x++) {
      if (this.state.data[x].name.indexOf(this.state.query) !== -1) {
        listofres.push(this.state.data[x]);
        console.log(this.state.results);
      }
    }

    this.setState({
      results: listofres,
      query: searchterm,
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
        <LogoAndName className="logo" />
        <SearchBar search={this.search} className="searchbar" />
        <ResultsList list={this.state.results} className="results" />
      </div>
    );
  }
}
