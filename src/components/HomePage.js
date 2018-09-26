import React, { Component } from "react";
import logo from "./medical.png";
import SearchBar from "./SearchBar";
import FilterOptions from "./FilterOptions";
import "./HomePage.css";
import Title from "./Title";
import { Redirect } from "react-router-dom";
import Map from "./Map";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.state = {
      query: "",
      redirect: false
    };
  }
  search(term) {
    console.log("inside homepage search for ", term);
    this.props.search(term);
    this.setState({ redirect: true });
  }
  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to="/results" />;
    }
  }

  render() {
    return (
      <div className="homepage">
        {this.renderRedirect()}
        <Map />
        <div className="faze" />
        <div className="holder">
          <img src={logo} className="logo" alt="afya360logo" />
          <Title cname={"home_title"} />
          <SearchBar
            cname={"home_searchbar"}
            search={this.search}
            counties={this.props.counties}
          />
          <FilterOptions cname={"home_filteroptions"} />
        </div>
      </div>
    );
  }
}

export default HomePage;
