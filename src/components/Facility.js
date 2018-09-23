import React, { Component } from "react";
import "jquery";

class Facility extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facility: this.props.facility
    };
  }
  render() {
    let the_facility = this.state.facility.name;
    return (
      <div
        className="results_list"
        style={{
          paddingTop: "30px",
          paddingLeft: "0px",
          flexDirection: "-moz-initial"
        }}
      >
        <div key={the_facility}>
          <div className="card border-primary mb-3" style={{ maxWidth: "80%" }}>
            <div className="card-header">
              <h3>
                {this.state.facility.code}|{the_facility}
              </h3>
            </div>
            <div className="card-body text-primary">
              <h5 className="card-title">Info card title</h5>
              <p className="card-text">{the_facility}</p>
            </div>
            <p>
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target={"#" + this.state.facility.code}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                View More
              </button>
            </p>
            <div className="collapse" id={this.state.facility.code}>
              <div className="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident. Anim pariatur cliche reprehenderit, enim eiusmod
                high life accusamus terry richardson ad squid. Nihil anim
                keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                sapiente ea proident. Anim pariatur cliche reprehenderit, enim
                eiusmod high life accusamus terry richardson ad squid. Nihil
                anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident. Anim pariatur cliche
                reprehenderit, enim eiusmod high life accusamus terry richardson
                ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                anderson cred nesciunt sapiente ea proident. Anim pariatur
                cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Facility;
