import React, { Component } from "react";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "KMHFL" };
  }
  render() {
    return (
      <div
        className={this.props.cname}
        style={{ boxShadow: "1px 2px 3px #ccc" }}
      >
        {this.state.name}
      </div>
    );
  }
}

export default Title;
