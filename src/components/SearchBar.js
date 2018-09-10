import React from "react";
import ReactDOM from "react-dom";
import Search from "@material-ui/icons/Search";
import LocationSearching from "@material-ui/icons/LocationSearching";
import FilterList from "@material-ui/icons/FilterList";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import Avatar from "@material-ui/core/Avatar";
import ResultsList from "./ResultsList";

export default class SearchBar extends React.Component {
  search() {
    this.props.search(document.querySelector("#query").value);
  }
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={24}
      >
        <Avatar>
          <FilterList />
        </Avatar>
        <input type="text" id="query" placeholder="Enter facility Name" />

        <Avatar>
          <Search onClick={this.search.bind(this)} />
        </Avatar>
        <Avatar>
          <LocationSearching />
        </Avatar>
      </Grid>
    );
  }
}
