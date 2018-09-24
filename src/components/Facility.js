import React, { Component } from "react";
import "jquery";

class Facility extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let facility = this.props.facility;
    var id = "facility" + this.props.id;
    return (
      <div
        className="results_list"
        style={{
          paddingTop: "30px",
          paddingLeft: "0px",
          flexDirection: "-moz-initial"
        }}
      >
        <div>
          <div className="card border-primary mb-3" style={{ maxWidth: "80%" }}>
            <div className="card-header">
              <div>
                <span
                  className="bg-primary"
                  style={{
                    color: "#fff",
                    fontSize: "3em"
                  }}
                >
                  {facility.code}
                </span>
                |{facility.name}
              </div>
            </div>
            <div className="card-body text-primary">
              <h4 className="card-title">{facility.county_name}</h4>
              <h5 className="card-title">{facility.sub_county_name}</h5>
              <h6 className="card-text">{facility.ward_name}</h6>
            </div>
            <p>
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target={"#" + id}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                View More
              </button>
            </p>
            <div className="collapse" id={id}>
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
