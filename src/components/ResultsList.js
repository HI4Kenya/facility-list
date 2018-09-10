import React from "react";
import List from "@material-ui/core/List";
import SearchResult from "./SearchResult";

export default class ResultsList extends React.Component {
  constructor(props) {
    super(props);
    var res = this.props.list;
    this.state = {
      data: res
    };
  }

  render() {
    let result = this.props.list;
    console.log("Rendering ResultsList...");
    console.log(result);

    if (this.props.list.length == 0) {
      return (
        <div>
          <h1>Nothing was found!!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Found the folowing results</h1>
          <ul>
            {this.props.list.map(facility => (
              <SearchResult facility={facility} key={facility.id} />
            ))}
          </ul>
        </div>
      );
    }
  }
}
