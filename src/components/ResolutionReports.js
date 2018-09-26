import React, { Component } from "react";
import Chart from "chart.js";

class ResolutionReports extends Component {
  constructor(props) {
    super(props);
    this.state = { mfl_list: [] };
  }
  render() {
    return (
      <div className="reports">
        {this.state.mfl_list.map(facility => {
          return (
            <div>
              <button
                class="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                {facility.name}
              </button>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">KMHFL</th>
                        <th scope="col">DHIS2</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{facility.name}</td>
                        <td>NULL</td>
                      </tr>
                      <tr>
                        <td>{facility.code}</td>
                        <td>NULL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        })}

        <div className="row">
          <canvas className="col" id="myChart" />
        </div>
      </div>
    );
  }

  componentWillReceiveProps(nxt) {
    var res = nxt.results.results;
    console.log(res);
    this.setState({ mfl_list: res });
  }
  componentDidMount() {
    var ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}

export default ResolutionReports;
