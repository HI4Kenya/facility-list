import React, { Component } from "react";
import logo from "./medical.png";
import SearchBar from "./SearchBar";
import FilterOptions from "./FilterOptions";
import "./HomePage.css";
import Title from "./Title";
import { Redirect } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.runQuery = this.runQuery.bind(this);
    this.state = {
      query: "",
      redirect: false
    };
  }
  search(term) {
    this.props.search(term);
    this.setState({ redirect: true });
  }
  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to="/results" />;
    }
  }
  runQuery(query) {
    this.props.runQuery(query);
    this.setState({ redirect: true });
  }
  render() {
    return (
      <div className="homepage">
        {this.renderRedirect()}
        <div className="faze" />
        <div className="holder">
          <div>
            <img src={logo} className="logo" alt="afya360logo" />
          </div>

          <SearchBar
            cname={"home_searchbar"}
            search={this.search}
            counties={this.props.counties}
            query={this.runQuery}
          />
          <FilterOptions
            runQuery={this.runQuery}
            cname={"home_filteroptions"}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
