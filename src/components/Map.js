import React, { Component } from "react";
import "./map.css";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { locations: [] };
  }

  componentWillMount() {
    //console.log("Map component will mount");
    //fetch locations based on the queries and populate the locations array with lat and longs
  }
  render() {
    return (
      <div
        className="modal fade bd-example-modal-lg"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg"
          style={{
            maxWidth: "1200px"
          }}
        >
          <div className="modal-content">
            <div id="map_wrapper">
              <div id="map_canvas" className="mapping" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    //console.log("Map component did mount");
    var script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDV84H8KlRh7mDQzFaEDZNwQPTOeF6yFZI&callback=initMap";
    document.body.appendChild(script);
  }
}

export default Map;
