import React from "react";
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

    if (this.props.list.length === 0) {
      return (
        <div>
          <h3>Nothing was found!!</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Found the folowing results</h3>
          <ol>
            {this.props.list.map(facility => (
              <SearchResult facility={facility} key={facility.id} />
            ))}
          </ol>
        </div>
      );
    }
  }
}
