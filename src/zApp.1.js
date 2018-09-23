import React, { Component } from "react";

console.log("Inside the App.js");
class App extends Component {
  constructor() {
    super();
    this.state = {
      val: ""
    };
    //this.fetchAsync = this.fetchAsync.bind(this);
    console.log("inside the app.js constructor");
  }
  /*   async fetchAsync() {
    // await response of fetch call
    let response = await fetch("https://api.github.com");
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    this.setState({
      val: data.code_search_url
    });
    return data;
  } */
  render() {
    //this.fetchAsync();

    return <h1>Hello Kenya!</h1>;
  }
}

export default App;
