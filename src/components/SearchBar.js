import React from "react";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import LocationSearching from "@material-ui/icons/LocationSearching";
import FilterList from "@material-ui/icons/FilterList";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import Avatar from "@material-ui/core/Avatar";

export default class SearchBar extends React.Component {
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
        <TextField
          id="full-width"
          label="Search"
          InputLabelProps={{
            shrink: true
          }}
          style={{ width: 600 }}
          placeholder="Search Name,MFL code or location"
          margin="normal"
        />
        <Avatar>
          <Search />
        </Avatar>
        <Avatar>
          <LocationSearching />
        </Avatar>
      </Grid>
    );
  }
}
